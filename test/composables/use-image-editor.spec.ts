import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { useImageEditor } from '../../src/composables/use-image-editor'
import { mockCanvas2dContext } from '../helpers/canvas-mock'

// Mock the canvas-raster functions (no real 2D context in happy-dom) while
// keeping the pure coordinate math (clampCropBox, transform*, getDisplayBox).
vi.mock('../../src/utils/image-editor', async importOriginal => {
  const actual = await importOriginal<typeof import('../../src/utils/image-editor')>()
  return {
    ...actual,
    loadImageToCanvas: vi.fn(async () => {
      const canvas = document.createElement('canvas')
      canvas.width = 100
      canvas.height = 80
      return canvas
    }),
    cropCanvas: vi.fn((src: HTMLCanvasElement) => src),
    flipCanvas: vi.fn((src: HTMLCanvasElement) => src),
    rotateCanvas: vi.fn((src: HTMLCanvasElement) => src),
    renderToDisplay: vi.fn(),
    drawCropOverlay: vi.fn(),
    downloadCanvas: vi.fn(async () => {}),
  }
})

function imageFile(name = 'photo.png'): File {
  return new File([''], name, { type: 'image/png' })
}

async function loadedEditor() {
  const editor = useImageEditor()
  await editor.loadFile(imageFile())
  return editor
}

describe('useImageEditor', () => {
  beforeEach(() => {
    mockCanvas2dContext()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('rejects non-image files', async () => {
    const editor = useImageEditor()
    await editor.loadFile(new File([''], 'doc.txt', { type: 'text/plain' }))
    expect(editor.error.value).toContain('must be an image')
    expect(editor.actionPipeline.value).toEqual([])
    expect(editor.selectedFile.value).toBeNull()
  })

  it('loads an image and records the load action', async () => {
    const editor = await loadedEditor()
    expect(editor.error.value).toBeNull()
    expect(editor.imageSize.value).toEqual({ w: 100, h: 80 })
    expect(editor.actionPipeline.value).toHaveLength(1)
    expect(editor.actionPipeline.value[0]).toMatchObject({
      type: 'load',
      status: 'applied',
      params: { filename: 'photo.png', width: 100, height: 80 },
    })
  })

  it('applyFlip and applyRotation append applied actions', async () => {
    const editor = await loadedEditor()
    editor.applyFlip(true, false)
    editor.applyRotation(90)
    expect(editor.actionPipeline.value.map(a => a.type)).toEqual(['load', 'flip', 'rotate'])
    expect(editor.actionPipeline.value.every(a => a.status === 'applied')).toBe(true)
  })

  it('confirmCrop creates one pending action and updates it in place', async () => {
    const editor = await loadedEditor()
    editor.toggleCropMode()
    editor.cropBox.value = { x: 10, y: 10, endX: 50, endY: 40 }
    editor.confirmCrop()

    expect(editor.pendingCropBox.value).toEqual({ x: 10, y: 10, endX: 50, endY: 40 })
    const firstCrop = editor.actionPipeline.value.find(a => a.type === 'crop')!
    expect(firstCrop.status).toBe('pending')

    // Re-confirming a new selection replaces the pending action, same id
    editor.cropBox.value = { x: 0, y: 0, endX: 30, endY: 30 }
    editor.confirmCrop()
    const crops = editor.actionPipeline.value.filter(a => a.type === 'crop')
    expect(crops).toHaveLength(1)
    expect(crops[0].id).toBe(firstCrop.id)
    expect(crops[0].params).toEqual({ x: 0, y: 0, endX: 30, endY: 30 })
  })

  it('cancelConfirmedCrop removes the pending crop', async () => {
    const editor = await loadedEditor()
    editor.toggleCropMode()
    editor.cropBox.value = { x: 10, y: 10, endX: 50, endY: 40 }
    editor.confirmCrop()
    editor.cancelConfirmedCrop()
    expect(editor.pendingCropBox.value).toBeNull()
    expect(editor.actionPipeline.value.some(a => a.type === 'crop')).toBe(false)
  })

  it('toggleCropMode pre-populates from the confirmed crop and clears on exit', async () => {
    const editor = await loadedEditor()
    editor.toggleCropMode()
    editor.cropBox.value = { x: 10, y: 10, endX: 50, endY: 40 }
    editor.confirmCrop()
    editor.toggleCropMode() // exit
    expect(editor.cropBox.value).toBeNull()
    editor.toggleCropMode() // re-enter
    expect(editor.cropBox.value).toEqual({ x: 10, y: 10, endX: 50, endY: 40 })
  })

  it('resetAll restores the original state and empties the pipeline', async () => {
    const editor = await loadedEditor()
    editor.applyFlip(true, false)
    editor.toggleCropMode()
    editor.cropBox.value = { x: 1, y: 1, endX: 20, endY: 20 }
    editor.confirmCrop()
    editor.resetAll()
    expect(editor.actionPipeline.value).toEqual([])
    expect(editor.pendingCropBox.value).toBeNull()
    expect(editor.isCropMode.value).toBe(false)
    expect(editor.customAngle.value).toBe(0)
  })

  it('pipelineSummaryJson cancels out a double horizontal flip', async () => {
    const editor = await loadedEditor()
    editor.applyFlip(true, false)
    editor.applyFlip(true, false)
    const summary = JSON.parse(editor.pipelineSummaryJson.value)
    expect(summary.flip).toBeUndefined()
    expect(summary.file).toBe('photo.png')
  })

  it('pipelineSummaryJson sums rotations modulo 360', async () => {
    const editor = await loadedEditor()
    editor.applyRotation(270)
    editor.applyRotation(90)
    let summary = JSON.parse(editor.pipelineSummaryJson.value)
    expect(summary.rotation).toBeUndefined()

    editor.applyRotation(90)
    summary = JSON.parse(editor.pipelineSummaryJson.value)
    expect(summary.rotation).toEqual({ degrees: 90 })
  })

  it('pipelineSummaryJson includes the pending crop with its status', async () => {
    const editor = await loadedEditor()
    editor.toggleCropMode()
    editor.cropBox.value = { x: 5, y: 5, endX: 25, endY: 25 }
    editor.confirmCrop()
    const summary = JSON.parse(editor.pipelineSummaryJson.value)
    expect(summary.crop).toMatchObject({ x: 5, y: 5, endX: 25, endY: 25, status: 'pending' })
  })

  it('pipelineSummaryJson is {} with no actions', () => {
    const editor = useImageEditor()
    expect(editor.pipelineSummaryJson.value).toBe('{}')
  })

  it('canvasCursor is default outside crop mode and crosshair inside', async () => {
    const editor = await loadedEditor()
    expect(editor.canvasCursor.value).toBe('default')
    editor.toggleCropMode()
    expect(editor.canvasCursor.value).toBe('crosshair')
  })

  it('flipping transforms a pending crop box (mirrored coordinates)', async () => {
    const editor = await loadedEditor() // canvas 100x80
    editor.toggleCropMode()
    editor.cropBox.value = { x: 10, y: 10, endX: 40, endY: 40 }
    editor.confirmCrop()
    editor.applyFlip(true, false)
    expect(editor.pendingCropBox.value).toEqual({ x: 60, y: 10, endX: 90, endY: 40 })
  })
})
