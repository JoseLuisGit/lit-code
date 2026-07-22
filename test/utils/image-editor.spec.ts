import { describe, it, expect } from 'vitest'
import {
  clampCropBox,
  transformCropBoxAfterFlip,
  transformCropBoxAfterRotation,
  getDisplayBox,
} from '../../src/utils/image-editor'
import type { CropBox } from '../../src/utils/image-editor'

// getDisplayBox only reads .width/.height — a plain object stub is enough
function fakeCanvas(width: number, height: number): HTMLCanvasElement {
  return { width, height } as HTMLCanvasElement
}

describe('clampCropBox', () => {
  it('leaves an in-bounds box unchanged', () => {
    const box: CropBox = { x: 10, y: 20, endX: 50, endY: 60 }
    expect(clampCropBox(box, 100, 100)).toEqual(box)
  })

  it('clamps negative origins to 0', () => {
    const result = clampCropBox({ x: -5, y: -10, endX: 50, endY: 50 }, 100, 100)
    expect(result.x).toBe(0)
    expect(result.y).toBe(0)
  })

  it('clamps overflow to canvas dimensions', () => {
    const result = clampCropBox({ x: 10, y: 10, endX: 150, endY: 200 }, 100, 120)
    expect(result.endX).toBe(100)
    expect(result.endY).toBe(120)
  })

  it('forces a degenerate box to at least 1px', () => {
    const result = clampCropBox({ x: 40, y: 40, endX: 40, endY: 30 }, 100, 100)
    expect(result.endX).toBe(41)
    expect(result.endY).toBe(41)
  })
})

describe('transformCropBoxAfterFlip', () => {
  const box: CropBox = { x: 10, y: 20, endX: 40, endY: 50 }

  it('mirrors horizontally', () => {
    expect(transformCropBoxAfterFlip(box, 100, 100, true, false)).toEqual({
      x: 60, y: 20, endX: 90, endY: 50,
    })
  })

  it('mirrors vertically', () => {
    expect(transformCropBoxAfterFlip(box, 100, 100, false, true)).toEqual({
      x: 10, y: 50, endX: 40, endY: 80,
    })
  })

  it('mirrors both axes', () => {
    expect(transformCropBoxAfterFlip(box, 100, 100, true, true)).toEqual({
      x: 60, y: 50, endX: 90, endY: 80,
    })
  })

  it('is the identity when no axis is flipped', () => {
    expect(transformCropBoxAfterFlip(box, 100, 100, false, false)).toEqual(box)
  })

  it('double horizontal flip restores the original box', () => {
    const once = transformCropBoxAfterFlip(box, 100, 100, true, false)
    expect(transformCropBoxAfterFlip(once, 100, 100, true, false)).toEqual(box)
  })
})

describe('transformCropBoxAfterRotation', () => {
  const box: CropBox = { x: 10, y: 20, endX: 40, endY: 60 }

  it('rotating 90° swaps box dimensions', () => {
    const rotated = transformCropBoxAfterRotation(box, 100, 200, 90)
    expect(rotated.endX - rotated.x).toBe(box.endY - box.y)
    expect(rotated.endY - rotated.y).toBe(box.endX - box.x)
  })

  it('rotating 90° maps corners into the swapped canvas', () => {
    // 100x200 canvas rotates into 200x100; box lands mirrored on the new x axis
    const rotated = transformCropBoxAfterRotation(box, 100, 200, 90)
    expect(rotated).toEqual({ x: 140, y: 10, endX: 180, endY: 40 })
  })

  it('rotating 180° equals flipping both axes', () => {
    const rotated = transformCropBoxAfterRotation(box, 100, 200, 180)
    const flipped = transformCropBoxAfterFlip(box, 100, 200, true, true)
    expect(rotated).toEqual(flipped)
  })

  it('rotating 360° is the identity within rounding', () => {
    const rotated = transformCropBoxAfterRotation(box, 100, 200, 360)
    expect(Math.abs(rotated.x - box.x)).toBeLessThanOrEqual(1)
    expect(Math.abs(rotated.y - box.y)).toBeLessThanOrEqual(1)
    expect(Math.abs(rotated.endX - box.endX)).toBeLessThanOrEqual(1)
    expect(Math.abs(rotated.endY - box.endY)).toBeLessThanOrEqual(1)
  })
})

describe('getDisplayBox', () => {
  it('scales by the min ratio and centers horizontally (letterbox left/right)', () => {
    // Working 100x100 into display 400x200 → scale 2, offsetX 100, offsetY 0
    const box: CropBox = { x: 0, y: 0, endX: 100, endY: 100 }
    const result = getDisplayBox(box, fakeCanvas(100, 100), fakeCanvas(400, 200))
    expect(result.scale).toBe(2)
    expect(result.offsetX).toBe(100)
    expect(result.offsetY).toBe(0)
    expect(result).toMatchObject({ x: 100, y: 0, endX: 300, endY: 200 })
  })

  it('centers vertically when height letterboxes (top/bottom)', () => {
    // Working 100x100 into display 200x400 → scale 2, offsetX 0, offsetY 100
    const box: CropBox = { x: 10, y: 10, endX: 20, endY: 20 }
    const result = getDisplayBox(box, fakeCanvas(100, 100), fakeCanvas(200, 400))
    expect(result.offsetX).toBe(0)
    expect(result.offsetY).toBe(100)
    expect(result).toMatchObject({ x: 20, y: 120, endX: 40, endY: 140 })
  })
})
