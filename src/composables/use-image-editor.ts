import { ref, computed } from 'vue'
import {
  loadImageToCanvas, cropCanvas, flipCanvas, rotateCanvas,
  renderToDisplay, drawCropOverlay, downloadCanvas, clampCropBox, getDisplayBox,
  transformCropBoxAfterFlip, transformCropBoxAfterRotation,
} from '../utils/image-editor'
import type { CropBox, HandleZone, HandleDragState, ImageAction, ImageActionType, ImageActionStatus } from '../types/image-editor'

export type { CropBox } from '../types/image-editor'
export type ExportFormat = 'png' | 'jpeg'

const MIN_CROP_PX = 2
const HANDLE_SIZE = 10
const HIT_TOLERANCE = 4
const ZONE_MARGIN = HANDLE_SIZE / 2 + HIT_TOLERANCE  // 9px square hit zone around each handle

// Maps each non-move zone to which box edges it controls [x, y, endX, endY]
const HANDLE_AXIS: Record<string, [boolean, boolean, boolean, boolean]> = {
  nw: [true, true, false, false],
  ne: [false, true, true, false],
  sw: [true, false, false, true],
  se: [false, false, true, true],
  n:  [false, true, false, false],
  s:  [false, false, false, true],
  w:  [true, false, false, false],
  e:  [false, false, true, false],
}

function copyCanvas(src: HTMLCanvasElement): HTMLCanvasElement {
  const dst = document.createElement('canvas')
  dst.width = src.width
  dst.height = src.height
  dst.getContext('2d')!.drawImage(src, 0, 0)
  return dst
}

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
}

function hitTestHandle(
  mx: number,
  my: number,
  box: { x: number; y: number; endX: number; endY: number },
): HandleZone {
  const { x, y, endX, endY } = box
  const midX = (x + endX) / 2
  const midY = (y + endY) / 2

  // Corners take priority over edges (test first)
  if (Math.max(Math.abs(mx - x), Math.abs(my - y)) <= ZONE_MARGIN) return 'nw'
  if (Math.max(Math.abs(mx - endX), Math.abs(my - y)) <= ZONE_MARGIN) return 'ne'
  if (Math.max(Math.abs(mx - x), Math.abs(my - endY)) <= ZONE_MARGIN) return 'sw'
  if (Math.max(Math.abs(mx - endX), Math.abs(my - endY)) <= ZONE_MARGIN) return 'se'

  // Edge midpoints
  if (Math.max(Math.abs(mx - midX), Math.abs(my - y)) <= ZONE_MARGIN) return 'n'
  if (Math.max(Math.abs(mx - midX), Math.abs(my - endY)) <= ZONE_MARGIN) return 's'
  if (Math.max(Math.abs(mx - x), Math.abs(my - midY)) <= ZONE_MARGIN) return 'w'
  if (Math.max(Math.abs(mx - endX), Math.abs(my - midY)) <= ZONE_MARGIN) return 'e'

  // Interior: move the whole box
  if (mx > x + ZONE_MARGIN && mx < endX - ZONE_MARGIN &&
      my > y + ZONE_MARGIN && my < endY - ZONE_MARGIN) return 'move'

  return null
}

function applyMoveBox(startBox: CropBox, dx: number, dy: number, imageW: number, imageH: number): CropBox {
  const w = startBox.endX - startBox.x
  const h = startBox.endY - startBox.y
  let x = startBox.x + dx
  let y = startBox.y + dy
  let endX = x + w
  let endY = y + h
  if (x < 0) { x = 0; endX = w }
  if (y < 0) { y = 0; endY = h }
  if (endX > imageW) { endX = imageW; x = imageW - w }
  if (endY > imageH) { endY = imageH; y = imageH - h }
  return { x, y, endX, endY }
}

function applyHandleDelta(
  zone: Exclude<HandleZone, null>,
  dxDisplay: number,
  dyDisplay: number,
  startBox: CropBox,
  scale: number,
  imageW: number,
  imageH: number,
): CropBox {
  const dx = dxDisplay / scale
  const dy = dyDisplay / scale

  if (zone === 'move') return applyMoveBox(startBox, dx, dy, imageW, imageH)

  const [ax, ay, aex, aey] = HANDLE_AXIS[zone]!
  let { x, y, endX, endY } = startBox
  if (ax) x += dx
  if (ay) y += dy
  if (aex) endX += dx
  if (aey) endY += dy

  // Enforce minimum size — clamp the moving side, not the fixed anchor side
  if (endX - x < MIN_CROP_PX) {
    if (ax) x = endX - MIN_CROP_PX; else endX = x + MIN_CROP_PX
  }
  if (endY - y < MIN_CROP_PX) {
    if (ay) y = endY - MIN_CROP_PX; else endY = y + MIN_CROP_PX
  }

  return clampCropBox({ x, y, endX, endY }, imageW, imageH)
}

function buildPipelineSummary(
  pipeline: ImageAction[],
  size: { w: number; h: number } | null,
): Record<string, unknown> {
  const result: Record<string, unknown> = {}
  let flipH = false
  let flipV = false
  let totalDeg = 0

  for (const action of pipeline) {
    if (action.type === 'load') result.file = action.params.filename
    else if (action.type === 'flip') {
      if (action.params.horizontal) flipH = !flipH
      if (action.params.vertical) flipV = !flipV
    } else if (action.type === 'rotate') {
      totalDeg = (((totalDeg + (action.params.degrees as number)) % 360) + 360) % 360
    } else if (action.type === 'crop') {
      result.crop = { ...action.params, status: action.status }
    }
  }

  if (size) result.dimensions = size
  if (flipH || flipV) result.flip = { horizontal: flipH, vertical: flipV }
  if (totalDeg !== 0) result.rotation = { degrees: totalDeg }

  return result
}

export function useImageEditor() {
  const workingCanvas = ref<HTMLCanvasElement | null>(null)
  const originalCanvas = ref<HTMLCanvasElement | null>(null)
  const displayCanvasEl = ref<HTMLCanvasElement | null>(null)

  const selectedFile = ref<File | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const imageSize = computed(() =>
    workingCanvas.value
      ? { w: workingCanvas.value.width, h: workingCanvas.value.height }
      : null
  )

  // Crop state
  const isCropMode = ref(false)
  const cropBox = ref<CropBox | null>(null)           // in-progress selection (active in crop mode)
  const pendingCropBox = ref<CropBox | null>(null)    // confirmed but not yet baked into canvas
  const handleDrag = ref<HandleDragState | null>(null) // active handle resize/move drag
  const hoveredZone = ref<HandleZone>(null)            // for cursor changes on hover
  const newCropAnchor = ref<{ x: number; y: number } | null>(null) // anchor for drawing a fresh crop

  // Rotation
  const customAngle = ref(0)

  // Export
  const exportFormat = ref<ExportFormat>('png')
  const exportQuality = ref(90)

  // Action pipeline
  const actionPipeline = ref<ImageAction[]>([])
  const isActionPanelOpen = ref(false)

  const displayScale = computed((): number => {
    if (!workingCanvas.value || !displayCanvasEl.value) return 1
    return workingCanvas.value.width / displayCanvasEl.value.width
  })

  const canvasCursor = computed((): string => {
    if (!isCropMode.value) return 'default'
    const cursors: Record<Exclude<HandleZone, null>, string> = {
      nw: 'nw-resize', ne: 'ne-resize', sw: 'sw-resize', se: 'se-resize',
      n: 'n-resize', s: 's-resize', w: 'w-resize', e: 'e-resize',
      move: 'move',
    }
    return hoveredZone.value ? (cursors[hoveredZone.value] ?? 'crosshair') : 'crosshair'
  })

  const actionPipelineJson = computed((): string =>
    JSON.stringify(actionPipeline.value, null, 2)
  )

  const pipelineSummaryJson = computed((): string => {
    if (actionPipeline.value.length === 0) return '{}'
    return JSON.stringify(buildPipelineSummary(actionPipeline.value, imageSize.value), null, 2)
  })

  function addAction(type: ImageActionType, params: Record<string, unknown>, status: ImageActionStatus): void {
    actionPipeline.value.push({
      id: generateId(),
      type,
      params,
      status,
      timestamp: new Date().toISOString(),
    })
  }

  function render(): void {
    if (!workingCanvas.value || !displayCanvasEl.value) return
    renderToDisplay(workingCanvas.value, displayCanvasEl.value)
    const dc = displayCanvasEl.value
    const wc = workingCanvas.value

    // Active selection (white) takes priority; pending overlay (indigo) shows whenever no active selection
    if (isCropMode.value && cropBox.value) {
      drawCropOverlay(dc, getDisplayBox(cropBox.value, wc, dc), false)
    } else if (pendingCropBox.value) {
      drawCropOverlay(dc, getDisplayBox(pendingCropBox.value, wc, dc), true)
    }
  }

  async function loadFile(file: File): Promise<void> {
    if (!file.type.startsWith('image/')) {
      error.value = 'File must be an image (PNG, JPEG, WebP, GIF)'
      return
    }
    isLoading.value = true
    error.value = null
    try {
      const canvas = await loadImageToCanvas(file)
      workingCanvas.value = canvas
      originalCanvas.value = copyCanvas(canvas)
      selectedFile.value = file
      isCropMode.value = false
      cropBox.value = null
      pendingCropBox.value = null
      handleDrag.value = null
      newCropAnchor.value = null
      actionPipeline.value = []
      addAction('load', { filename: file.name, width: canvas.width, height: canvas.height }, 'applied')
      render()
    } catch {
      error.value = 'Failed to load image'
    } finally {
      isLoading.value = false
    }
  }

  function syncPendingCropToPipeline(newBox: CropBox): void {
    pendingCropBox.value = newBox
    const idx = actionPipeline.value.findIndex(a => a.type === 'crop' && a.status === 'pending')
    if (idx >= 0) {
      actionPipeline.value[idx] = {
        ...actionPipeline.value[idx]!,
        params: { ...newBox },
        timestamp: new Date().toISOString(),
      }
    }
  }

  function applyFlip(horizontal: boolean, vertical: boolean): void {
    if (!workingCanvas.value) return
    const srcW = workingCanvas.value.width
    const srcH = workingCanvas.value.height
    workingCanvas.value = flipCanvas(workingCanvas.value, horizontal, vertical)
    cropBox.value = null
    if (pendingCropBox.value) {
      const transformed = transformCropBoxAfterFlip(pendingCropBox.value, srcW, srcH, horizontal, vertical)
      syncPendingCropToPipeline(clampCropBox(transformed, workingCanvas.value.width, workingCanvas.value.height))
      if (isCropMode.value) cropBox.value = { ...pendingCropBox.value }
    }
    addAction('flip', { horizontal, vertical }, 'applied')
    render()
  }

  function applyRotation(degrees: number): void {
    if (!workingCanvas.value) return
    const srcW = workingCanvas.value.width
    const srcH = workingCanvas.value.height
    workingCanvas.value = rotateCanvas(workingCanvas.value, degrees)
    cropBox.value = null
    if (pendingCropBox.value) {
      const transformed = transformCropBoxAfterRotation(pendingCropBox.value, srcW, srcH, degrees)
      syncPendingCropToPipeline(clampCropBox(transformed, workingCanvas.value.width, workingCanvas.value.height))
      if (isCropMode.value) cropBox.value = { ...pendingCropBox.value }
    }
    addAction('rotate', { degrees }, 'applied')
    render()
  }

  function confirmCrop(): void {
    if (!cropBox.value) return
    pendingCropBox.value = { ...cropBox.value }
    const existingIdx = actionPipeline.value.findIndex(a => a.type === 'crop' && a.status === 'pending')
    const cropAction: ImageAction = {
      id: existingIdx >= 0 ? actionPipeline.value[existingIdx]!.id : generateId(),
      type: 'crop',
      params: { ...cropBox.value },
      status: 'pending',
      timestamp: new Date().toISOString(),
    }
    if (existingIdx >= 0) {
      actionPipeline.value[existingIdx] = cropAction
    } else {
      actionPipeline.value.push(cropAction)
    }
    render()
  }

  function cancelConfirmedCrop(): void {
    pendingCropBox.value = null
    actionPipeline.value = actionPipeline.value.filter(
      a => !(a.type === 'crop' && a.status === 'pending')
    )
    render()
  }

  function toggleCropMode(): void {
    isCropMode.value = !isCropMode.value
    if (isCropMode.value) {
      // Pre-populate from confirmed crop so the user resumes editing it
      if (pendingCropBox.value) cropBox.value = { ...pendingCropBox.value }
    } else {
      cropBox.value = null
      handleDrag.value = null
      newCropAnchor.value = null
      hoveredZone.value = null
    }
    render()
  }

  function resetCrop(): void {
    cropBox.value = null
    pendingCropBox.value = null
    isCropMode.value = false
    handleDrag.value = null
    newCropAnchor.value = null
    hoveredZone.value = null
    actionPipeline.value = actionPipeline.value.filter(
      a => !(a.type === 'crop' && a.status === 'pending')
    )
    render()
  }

  function resetAll(): void {
    if (!originalCanvas.value) return
    workingCanvas.value = copyCanvas(originalCanvas.value)
    cropBox.value = null
    pendingCropBox.value = null
    isCropMode.value = false
    handleDrag.value = null
    newCropAnchor.value = null
    hoveredZone.value = null
    customAngle.value = 0
    actionPipeline.value = []
    render()
  }

  async function download(): Promise<void> {
    if (!workingCanvas.value || !selectedFile.value) return
    // Apply pending crop to a temporary canvas — workingCanvas is never modified
    const exportCanvas = pendingCropBox.value
      ? cropCanvas(workingCanvas.value, pendingCropBox.value)
      : workingCanvas.value
    const base = selectedFile.value.name.replace(/\.[^.]+$/, '')
    const ext = exportFormat.value
    await downloadCanvas(exportCanvas, `${base}-edited.${ext}`, exportFormat.value, exportQuality.value / 100)
  }

  function onCropMouseDown(e: MouseEvent): void {
    if (!isCropMode.value || !workingCanvas.value || !displayCanvasEl.value) return
    const rect = displayCanvasEl.value.getBoundingClientRect()
    const mx = e.clientX - rect.left
    const my = e.clientY - rect.top

    // Check if hitting a handle on the existing crop box
    if (cropBox.value) {
      const dbox = getDisplayBox(cropBox.value, workingCanvas.value, displayCanvasEl.value)
      const zone = hitTestHandle(mx, my, dbox)
      if (zone !== null) {
        handleDrag.value = { zone, startMouseX: mx, startMouseY: my, startBox: { ...cropBox.value } }
        return
      }
    }

    // No handle hit — start drawing a new crop box
    const dc = displayCanvasEl.value
    const wc = workingCanvas.value
    const scale = Math.min(dc.width / wc.width, dc.height / wc.height)
    const offsetX = (dc.width - wc.width * scale) / 2
    const offsetY = (dc.height - wc.height * scale) / 2
    const ix = Math.round((mx - offsetX) / scale)
    const iy = Math.round((my - offsetY) / scale)
    newCropAnchor.value = { x: ix, y: iy }
    cropBox.value = { x: ix, y: iy, endX: ix + 1, endY: iy + 1 }
  }

  function onCropMouseMove(e: MouseEvent): void {
    if (!displayCanvasEl.value || !workingCanvas.value) return
    const rect = displayCanvasEl.value.getBoundingClientRect()
    const mx = e.clientX - rect.left
    const my = e.clientY - rect.top

    // Active handle drag: use delta-based resize/move
    if (handleDrag.value && cropBox.value) {
      const drag = handleDrag.value
      const dbox = getDisplayBox(drag.startBox, workingCanvas.value, displayCanvasEl.value)
      cropBox.value = applyHandleDelta(
        drag.zone,
        mx - drag.startMouseX,
        my - drag.startMouseY,
        drag.startBox,
        dbox.scale,
        workingCanvas.value.width,
        workingCanvas.value.height,
      )
      render()
      return
    }

    // Drawing a new crop box: anchor stays fixed, extend to current mouse position
    if (newCropAnchor.value) {
      const dc = displayCanvasEl.value
      const wc = workingCanvas.value
      const scale = Math.min(dc.width / wc.width, dc.height / wc.height)
      const offsetX = (dc.width - wc.width * scale) / 2
      const offsetY = (dc.height - wc.height * scale) / 2
      const ix = Math.round((mx - offsetX) / scale)
      const iy = Math.round((my - offsetY) / scale)
      const anchor = newCropAnchor.value
      cropBox.value = clampCropBox({
        x: Math.min(anchor.x, ix),
        y: Math.min(anchor.y, iy),
        endX: Math.max(anchor.x, ix),
        endY: Math.max(anchor.y, iy),
      }, wc.width, wc.height)
      render()
      return
    }

    // Idle in crop mode: update hover zone for cursor feedback
    if (isCropMode.value && cropBox.value) {
      const dbox = getDisplayBox(cropBox.value, workingCanvas.value, displayCanvasEl.value)
      hoveredZone.value = hitTestHandle(mx, my, dbox)
    }
  }

  function onCropMouseUp(): void {
    handleDrag.value = null
    hoveredZone.value = null
    newCropAnchor.value = null
    if (cropBox.value) {
      const { x, y, endX, endY } = cropBox.value
      if (endX - x < MIN_CROP_PX && endY - y < MIN_CROP_PX) {
        cropBox.value = null
        render()
      }
    }
  }

  function updateCropBoxFromInputs(box: CropBox): void {
    if (!workingCanvas.value) return
    cropBox.value = clampCropBox(box, workingCanvas.value.width, workingCanvas.value.height)
    render()
  }

  return {
    displayCanvasEl,
    selectedFile, isLoading, error,
    imageSize,
    isCropMode, cropBox, pendingCropBox,
    canvasCursor,
    customAngle,
    exportFormat, exportQuality,
    actionPipeline, actionPipelineJson, pipelineSummaryJson, isActionPanelOpen,
    loadFile, render,
    applyFlip, applyRotation,
    confirmCrop, cancelConfirmedCrop,
    toggleCropMode, resetCrop, resetAll, download,
    onCropMouseDown, onCropMouseMove, onCropMouseUp,
    updateCropBoxFromInputs,
    displayScale,
  }
}
