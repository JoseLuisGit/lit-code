export interface CropBox { x: number; y: number; endX: number; endY: number }

export interface DisplayBox {
  x: number
  y: number
  endX: number
  endY: number
  scale: number
  offsetX: number
  offsetY: number
}

export type HandleZone =
  | 'nw' | 'ne' | 'sw' | 'se'
  | 'n'  | 's'  | 'e'  | 'w'
  | 'move'
  | null

export type ImageActionType = 'load' | 'flip' | 'rotate' | 'crop'
export type ImageActionStatus = 'applied' | 'pending'

export interface ImageAction {
  id: string
  type: ImageActionType
  params: Record<string, unknown>
  status: ImageActionStatus
  timestamp: string
}

export interface HandleDragState {
  zone: Exclude<HandleZone, null>
  startMouseX: number
  startMouseY: number
  startBox: CropBox
}
