import { vi } from 'vitest'

// happy-dom returns null from canvas.getContext('2d'); tests that exercise
// canvas-copying code paths stub the prototype with a no-op 2D context.
export function mockCanvas2dContext(): void {
  const fakeContext = {
    drawImage: vi.fn(),
    clearRect: vi.fn(),
    fillRect: vi.fn(),
    strokeRect: vi.fn(),
    translate: vi.fn(),
    scale: vi.fn(),
    rotate: vi.fn(),
    setLineDash: vi.fn(),
    fillStyle: '',
    strokeStyle: '',
    lineWidth: 0,
  }
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
    fakeContext as unknown as ReturnType<HTMLCanvasElement['getContext']>,
  )
}
