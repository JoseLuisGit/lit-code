import type { CropBox, DisplayBox } from '../types/image-editor'

export type { CropBox }

export function loadImageToCanvas(file: File): Promise<HTMLCanvasElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      canvas.getContext('2d')!.drawImage(img, 0, 0)
      URL.revokeObjectURL(url)
      resolve(canvas)
    }
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Failed to load image')) }
    img.src = url
  })
}

export function clampCropBox(box: CropBox, w: number, h: number): CropBox {
  const x = Math.max(0, Math.min(box.x, w - 1))
  const y = Math.max(0, Math.min(box.y, h - 1))
  const endX = Math.max(x + 1, Math.min(box.endX, w))
  const endY = Math.max(y + 1, Math.min(box.endY, h))
  return { x, y, endX, endY }
}

export function cropCanvas(src: HTMLCanvasElement, box: CropBox): HTMLCanvasElement {
  const { x, y, endX, endY } = clampCropBox(box, src.width, src.height)
  const dst = document.createElement('canvas')
  dst.width = endX - x
  dst.height = endY - y
  dst.getContext('2d')!.drawImage(src, x, y, dst.width, dst.height, 0, 0, dst.width, dst.height)
  return dst
}

export function flipCanvas(src: HTMLCanvasElement, horizontal: boolean, vertical: boolean): HTMLCanvasElement {
  const dst = document.createElement('canvas')
  dst.width = src.width
  dst.height = src.height
  const ctx = dst.getContext('2d')!
  ctx.translate(horizontal ? src.width : 0, vertical ? src.height : 0)
  ctx.scale(horizontal ? -1 : 1, vertical ? -1 : 1)
  ctx.drawImage(src, 0, 0)
  return dst
}

export function transformCropBoxAfterFlip(
  box: CropBox,
  srcW: number,
  srcH: number,
  horizontal: boolean,
  vertical: boolean,
): CropBox {
  let { x, y, endX, endY } = box
  if (horizontal) {
    const nx = srcW - endX
    endX = srcW - x
    x = nx
  }
  if (vertical) {
    const ny = srcH - endY
    endY = srcH - y
    y = ny
  }
  return { x, y, endX, endY }
}

export function transformCropBoxAfterRotation(
  box: CropBox,
  srcW: number,
  srcH: number,
  degrees: number,
): CropBox {
  const rad = (degrees * Math.PI) / 180
  const cos = Math.cos(rad)
  const sin = Math.sin(rad)
  const newW = srcW * Math.abs(cos) + srcH * Math.abs(sin)
  const newH = srcW * Math.abs(sin) + srcH * Math.abs(cos)

  const pts = [
    [box.x, box.y], [box.endX, box.y],
    [box.x, box.endY], [box.endX, box.endY],
  ].map(([px, py]) => [
    (px! - srcW / 2) * cos - (py! - srcH / 2) * sin + newW / 2,
    (px! - srcW / 2) * sin + (py! - srcH / 2) * cos + newH / 2,
  ])

  return {
    x: Math.round(Math.min(...pts.map(p => p[0]!))),
    y: Math.round(Math.min(...pts.map(p => p[1]!))),
    endX: Math.round(Math.max(...pts.map(p => p[0]!))),
    endY: Math.round(Math.max(...pts.map(p => p[1]!))),
  }
}

export function rotateCanvas(src: HTMLCanvasElement, degrees: number): HTMLCanvasElement {
  const rad = (degrees * Math.PI) / 180
  const cos = Math.abs(Math.cos(rad))
  const sin = Math.abs(Math.sin(rad))
  const newW = Math.round(src.width * cos + src.height * sin)
  const newH = Math.round(src.width * sin + src.height * cos)
  const dst = document.createElement('canvas')
  dst.width = newW
  dst.height = newH
  const ctx = dst.getContext('2d')!
  ctx.translate(newW / 2, newH / 2)
  ctx.rotate(rad)
  ctx.drawImage(src, -src.width / 2, -src.height / 2)
  return dst
}

export function getDisplayBox(box: CropBox, wc: HTMLCanvasElement, dc: HTMLCanvasElement): DisplayBox {
  const scale = Math.min(dc.width / wc.width, dc.height / wc.height)
  const offsetX = (dc.width - wc.width * scale) / 2
  const offsetY = (dc.height - wc.height * scale) / 2
  return {
    x: Math.round(box.x * scale + offsetX),
    y: Math.round(box.y * scale + offsetY),
    endX: Math.round(box.endX * scale + offsetX),
    endY: Math.round(box.endY * scale + offsetY),
    scale,
    offsetX,
    offsetY,
  }
}

export function renderToDisplay(src: HTMLCanvasElement, dst: HTMLCanvasElement): void {
  const ctx = dst.getContext('2d')!
  ctx.clearRect(0, 0, dst.width, dst.height)
  const scale = Math.min(dst.width / src.width, dst.height / src.height)
  const dw = src.width * scale
  const dh = src.height * scale
  const dx = (dst.width - dw) / 2
  const dy = (dst.height - dh) / 2
  ctx.drawImage(src, dx, dy, dw, dh)
}

export function drawCropOverlay(dst: HTMLCanvasElement, box: CropBox, isPending = false): void {
  const ctx = dst.getContext('2d')!
  const { x, y, endX, endY } = box

  ctx.fillStyle = isPending ? 'rgba(0,0,0,0.25)' : 'rgba(0,0,0,0.45)'
  ctx.fillRect(0, 0, dst.width, y)
  ctx.fillRect(0, endY, dst.width, dst.height - endY)
  ctx.fillRect(0, y, x, endY - y)
  ctx.fillRect(endX, y, dst.width - endX, endY - y)

  ctx.strokeStyle = isPending ? 'rgba(99,102,241,0.8)' : 'rgba(255,255,255,0.9)'
  ctx.lineWidth = 1.5
  ctx.setLineDash([5, 4])
  ctx.strokeRect(x + 0.5, y + 0.5, endX - x - 1, endY - y - 1)
  ctx.setLineDash([])

  ctx.fillStyle = isPending ? 'rgba(99,102,241,1)' : '#ffffff'

  // Corner handles (10×10, centered on each corner)
  const cs = 10
  const ch = cs / 2
  ctx.fillRect(x - ch, y - ch, cs, cs)
  ctx.fillRect(endX - ch, y - ch, cs, cs)
  ctx.fillRect(x - ch, endY - ch, cs, cs)
  ctx.fillRect(endX - ch, endY - ch, cs, cs)

  // Edge handles (centered on each edge midpoint)
  const midX = Math.round((x + endX) / 2)
  const midY = Math.round((y + endY) / 2)
  ctx.fillRect(midX - 10, y - ch, 20, cs)   // N: wide horizontal bar
  ctx.fillRect(midX - 10, endY - ch, 20, cs) // S: wide horizontal bar
  ctx.fillRect(x - ch, midY - 10, cs, 20)   // W: tall vertical bar
  ctx.fillRect(endX - ch, midY - 10, cs, 20) // E: tall vertical bar
}

export async function downloadCanvas(
  canvas: HTMLCanvasElement,
  filename: string,
  format: 'png' | 'jpeg',
  quality = 0.9,
): Promise<void> {
  const mime = format === 'jpeg' ? 'image/jpeg' : 'image/png'
  const dataUrl = canvas.toDataURL(mime, quality)
  const a = document.createElement('a')
  a.href = dataUrl
  a.download = filename
  a.click()
}
