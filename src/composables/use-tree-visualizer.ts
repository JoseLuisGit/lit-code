import { ref, type Ref } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import type { TreeNode } from '../types/tree-visualization'
import { NODE_COLORS } from '../types/tree-visualization'

interface VisualizerState {
  isInitialized: boolean
  hoveredNode: TreeNode | null
  zoomLevel: number
  isDragging: boolean
}

interface NodeVisual {
  group: THREE.Group
  mesh: THREE.Mesh
  node: TreeNode
  label: THREE.Sprite
  expandIcon: THREE.Sprite | null
  glow: THREE.Mesh
  edges: THREE.Line[]
  worldX: number
  worldY: number
}

const NODE_RADIUS = 0.5
const HORIZONTAL_SPACING = 6
const VERTICAL_SPACING = 1.6

export function useTreeVisualizer(containerRef: Ref<HTMLElement | null>) {
  const state = ref<VisualizerState>({
    isInitialized: false,
    hoveredNode: null,
    zoomLevel: 1,
    isDragging: false
  })

  let scene: THREE.Scene | null = null
  let camera: THREE.OrthographicCamera | null = null
  let renderer: THREE.WebGLRenderer | null = null
  let controls: OrbitControls | null = null
  let animationFrameId: number | null = null
  let nodeVisuals: Map<string, NodeVisual> = new Map()
  let edgesGroup: THREE.Group | null = null
  let raycaster: THREE.Raycaster | null = null
  let mouse: THREE.Vector2 | null = null
  let rootTreeNode: TreeNode | null = null

  let isDraggingNode = false
  let draggedNodeVisual: NodeVisual | null = null
  let dragPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
  let dragOffset = new THREE.Vector3()

  const disposables: { dispose: () => void }[] = []

  function createTextSprite(text: string, fontSize: number = 26, color: string = '#ffffff'): THREE.Sprite {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')!

    canvas.width = 512
    canvas.height = 72

    context.clearRect(0, 0, canvas.width, canvas.height)

    context.fillStyle = 'rgba(15, 23, 42, 0.9)'
    context.beginPath()
    context.roundRect(0, 0, canvas.width, canvas.height, 12)
    context.fill()

    context.strokeStyle = color
    context.lineWidth = 3
    context.beginPath()
    context.roundRect(2, 2, canvas.width - 4, canvas.height - 4, 10)
    context.stroke()

    context.font = `bold ${fontSize}px "Segoe UI", system-ui, sans-serif`
    context.fillStyle = '#ffffff'
    context.textAlign = 'left'
    context.textBaseline = 'middle'

    const displayText = text.length > 22 ? text.slice(0, 22) + '...' : text
    context.fillText(displayText, 16, canvas.height / 2)

    const texture = new THREE.CanvasTexture(canvas)
    texture.minFilter = THREE.LinearFilter
    texture.magFilter = THREE.LinearFilter
    const material = new THREE.SpriteMaterial({ map: texture, transparent: true })
    disposables.push(material, texture)

    const sprite = new THREE.Sprite(material)
    sprite.scale.set(5, 0.7, 1)

    return sprite
  }

  function createExpandIcon(isExpanded: boolean, color: string): THREE.Sprite {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')!

    canvas.width = 64
    canvas.height = 64

    context.fillStyle = color
    context.beginPath()
    context.arc(32, 32, 28, 0, Math.PI * 2)
    context.fill()

    context.fillStyle = '#ffffff'
    context.font = 'bold 40px Arial'
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.fillText(isExpanded ? '−' : '+', 32, 30)

    const texture = new THREE.CanvasTexture(canvas)
    const material = new THREE.SpriteMaterial({ map: texture, transparent: true })
    disposables.push(material, texture)

    const sprite = new THREE.Sprite(material)
    sprite.scale.set(0.7, 0.7, 1)

    return sprite
  }

  function createNodeVisual(node: TreeNode, x: number, y: number): NodeVisual {
    const color = NODE_COLORS[node.type] || NODE_COLORS.null
    const group = new THREE.Group()
    group.position.set(x, y, 0)

    const geometry = new THREE.CircleGeometry(NODE_RADIUS, 48)
    const material = new THREE.MeshBasicMaterial({ color: new THREE.Color(color) })
    disposables.push(geometry, material)

    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(0, 0, 0.1)
    group.add(mesh)

    const glowGeometry = new THREE.RingGeometry(NODE_RADIUS, NODE_RADIUS + 0.2, 48)
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.5
    })
    disposables.push(glowGeometry, glowMaterial)

    const glow = new THREE.Mesh(glowGeometry, glowMaterial)
    glow.position.set(0, 0, 0)
    group.add(glow)

    const labelText = `${node.name}: ${node.value}`
    const label = createTextSprite(labelText, 24, color)
    label.position.set(3.5, 0, 0.1)
    group.add(label)

    let expandIcon: THREE.Sprite | null = null
    if (node.children.length > 0) {
      expandIcon = createExpandIcon(node.isExpanded, color)
      expandIcon.position.set(NODE_RADIUS + 0.5, NODE_RADIUS + 0.3, 0.2)
      group.add(expandIcon)
    }

    scene?.add(group)

    const nodeVisual: NodeVisual = {
      group,
      mesh,
      node,
      label,
      expandIcon,
      glow,
      edges: [],
      worldX: x,
      worldY: y
    }

    nodeVisuals.set(node.id, nodeVisual)
    return nodeVisual
  }

  function createEdge(fromVisual: NodeVisual, toVisual: NodeVisual): THREE.Line {
    const x1 = fromVisual.worldX
    const y1 = fromVisual.worldY
    const x2 = toVisual.worldX
    const y2 = toVisual.worldY

    const color = NODE_COLORS[fromVisual.node.type] || NODE_COLORS.null

    const midX = x1 + (x2 - x1) * 0.5

    const curve = new THREE.CubicBezierCurve3(
      new THREE.Vector3(x1 + NODE_RADIUS, y1, 0),
      new THREE.Vector3(midX, y1, 0),
      new THREE.Vector3(midX, y2, 0),
      new THREE.Vector3(x2 - NODE_RADIUS, y2, 0)
    )

    const points = curve.getPoints(40)
    const geometry = new THREE.BufferGeometry().setFromPoints(points)

    const material = new THREE.LineBasicMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.7,
      linewidth: 2
    })
    disposables.push(geometry, material)

    const line = new THREE.Line(geometry, material)
    edgesGroup?.add(line)

    fromVisual.edges.push(line)

    return line
  }


  function layoutTree(node: TreeNode, x: number, startY: number): { height: number, positions: Map<string, {x: number, y: number}> } {
    const positions = new Map<string, {x: number, y: number}>()

    function calculateSubtreeHeight(n: TreeNode): number {
      if (!n.isExpanded || n.children.length === 0) {
        return VERTICAL_SPACING
      }
      let total = 0
      n.children.forEach(child => {
        total += calculateSubtreeHeight(child)
      })
      return Math.max(VERTICAL_SPACING, total)
    }

    function layoutSubtree(n: TreeNode, px: number, py: number): number {
      positions.set(n.id, { x: px, y: py })

      if (!n.isExpanded || n.children.length === 0) {
        return VERTICAL_SPACING
      }

      const childX = px + HORIZONTAL_SPACING
      let currentY = py

      const childHeights = n.children.map(child => calculateSubtreeHeight(child))
      const totalHeight = childHeights.reduce((a, b) => a + b, 0)

      currentY = py + (totalHeight - VERTICAL_SPACING) / 2

      n.children.forEach((child, index) => {
        const childHeight = childHeights[index] ?? VERTICAL_SPACING
        layoutSubtree(child, childX, currentY - childHeight / 2 + VERTICAL_SPACING / 2)
        currentY -= childHeight
      })

      return totalHeight
    }

    const height = layoutSubtree(node, x, startY)
    return { height, positions }
  }

  function buildVisualization(): void {
    if (!scene || !rootTreeNode) return

    nodeVisuals.forEach(visual => {
      scene?.remove(visual.group)
    })
    nodeVisuals.clear()

    if (edgesGroup) {
      scene.remove(edgesGroup)
    }
    edgesGroup = new THREE.Group()
    scene.add(edgesGroup)

    const { positions } = layoutTree(rootTreeNode, 0, 0)

    function createNodesRecursive(node: TreeNode): void {
      const pos = positions.get(node.id)
      if (pos) {
        createNodeVisual(node, pos.x, pos.y)
      }
      if (node.isExpanded) {
        node.children.forEach(child => createNodesRecursive(child))
      }
    }

    createNodesRecursive(rootTreeNode)

    function createEdgesRecursive(node: TreeNode): void {
      const parentVisual = nodeVisuals.get(node.id)
      if (!parentVisual || !node.isExpanded) return

      node.children.forEach(child => {
        const childVisual = nodeVisuals.get(child.id)
        if (childVisual) {
          createEdge(parentVisual, childVisual)
          createEdgesRecursive(child)
        }
      })
    }

    createEdgesRecursive(rootTreeNode)
  }

  function initialize(treeData: TreeNode): void {
    if (!containerRef.value) return

    rootTreeNode = treeData
    const container = containerRef.value
    const width = container.clientWidth
    const height = container.clientHeight

    const aspect = width / height
    const frustumSize = 12
    camera = new THREE.OrthographicCamera(
      -frustumSize * aspect,
      frustumSize * aspect,
      frustumSize,
      -frustumSize,
      0.1,
      1000
    )
    camera.position.set(6, 0, 50)

    scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0f172a)

    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableRotate = false
    controls.enablePan = true
    controls.enableZoom = true
    controls.enableDamping = true
    controls.dampingFactor = 0.1
    controls.minZoom = 0.2
    controls.maxZoom = 5
    controls.mouseButtons = {
      LEFT: THREE.MOUSE.PAN,
      MIDDLE: THREE.MOUSE.DOLLY,
      RIGHT: THREE.MOUSE.PAN
    }
    controls.touches = {
      ONE: THREE.TOUCH.PAN,
      TWO: THREE.TOUCH.DOLLY_PAN
    }
    controls.panSpeed = 1.2
    controls.zoomSpeed = 1.0

    raycaster = new THREE.Raycaster()
    mouse = new THREE.Vector2()

    edgesGroup = new THREE.Group()
    scene.add(edgesGroup)

    buildVisualization()

    container.addEventListener('mousedown', onMouseDown)
    container.addEventListener('mousemove', onMouseMove)
    container.addEventListener('mouseup', onMouseUp)
    container.addEventListener('click', onClick)
    window.addEventListener('resize', onResize)

    state.value.isInitialized = true
    animate()
  }

  function getIntersectedNode(): NodeVisual | null {
    if (!raycaster || !camera || !mouse) return null

    raycaster.setFromCamera(mouse, camera)

    const meshes = Array.from(nodeVisuals.values()).map(nv => nv.mesh)
    const intersects = raycaster.intersectObjects(meshes)

    if (intersects.length > 0) {
      const mesh = intersects[0]?.object as THREE.Mesh
      for (const [, visual] of nodeVisuals) {
        if (visual.mesh === mesh) {
          return visual
        }
      }
    }
    return null
  }

  function updateMousePosition(event: MouseEvent): void {
    if (!containerRef.value || !mouse) return
    const rect = containerRef.value.getBoundingClientRect()
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
  }

  function onMouseDown(event: MouseEvent): void {
    if (event.button !== 0) return

    updateMousePosition(event)
    const nodeVisual = getIntersectedNode()

    if (nodeVisual && raycaster && camera) {
      isDraggingNode = true
      draggedNodeVisual = nodeVisual
      state.value.isDragging = true

      if (controls) {
        controls.enabled = false
      }

      const intersectPoint = new THREE.Vector3()
      raycaster.ray.intersectPlane(dragPlane, intersectPoint)
      dragOffset.copy(intersectPoint).sub(nodeVisual.group.position)

      if (containerRef.value) {
        containerRef.value.style.cursor = 'grabbing'
      }

      event.preventDefault()
      event.stopPropagation()
    }
  }

  function onMouseMove(event: MouseEvent): void {
    updateMousePosition(event)

    if (isDraggingNode && draggedNodeVisual && raycaster && camera) {
      const intersectPoint = new THREE.Vector3()
      raycaster.setFromCamera(mouse!, camera)
      raycaster.ray.intersectPlane(dragPlane, intersectPoint)

      const newPos = intersectPoint.sub(dragOffset)
      draggedNodeVisual.group.position.set(newPos.x, newPos.y, 0)
      draggedNodeVisual.worldX = newPos.x
      draggedNodeVisual.worldY = newPos.y

      rebuildAllEdges()
      return
    }

    const nodeVisual = getIntersectedNode()

    nodeVisuals.forEach(nv => {
      const material = nv.mesh.material as THREE.MeshBasicMaterial
      const color = NODE_COLORS[nv.node.type] || NODE_COLORS.null
      material.color.setStyle(color)
      const glowMaterial = nv.glow.material as THREE.MeshBasicMaterial
      glowMaterial.opacity = 0.5
    })

    if (nodeVisual) {
      const material = nodeVisual.mesh.material as THREE.MeshBasicMaterial
      material.color.setHex(0xffffff)
      const glowMaterial = nodeVisual.glow.material as THREE.MeshBasicMaterial
      glowMaterial.opacity = 0.9
      state.value.hoveredNode = nodeVisual.node

      if (containerRef.value) {
        containerRef.value.style.cursor = 'grab'
      }
    } else {
      state.value.hoveredNode = null
      if (containerRef.value) {
        containerRef.value.style.cursor = 'default'
      }
    }
  }

  function onMouseUp(): void {
    if (isDraggingNode) {
      isDraggingNode = false
      draggedNodeVisual = null
      state.value.isDragging = false

      if (controls) {
        controls.enabled = true
      }

      if (containerRef.value) {
        containerRef.value.style.cursor = 'default'
      }
    }
  }

  function rebuildAllEdges(): void {
    if (!edgesGroup) return

    while (edgesGroup.children.length > 0) {
      const child = edgesGroup.children[0]
      if (child) {
        edgesGroup.remove(child)
        if (child instanceof THREE.Line) {
          child.geometry.dispose()
        }
      }
    }

    nodeVisuals.forEach(nv => {
      nv.edges = []
    })

    function createEdgesRecursive(node: TreeNode): void {
      const parentVisual = nodeVisuals.get(node.id)
      if (!parentVisual || !node.isExpanded) return

      node.children.forEach(child => {
        const childVisual = nodeVisuals.get(child.id)
        if (childVisual) {
          createEdge(parentVisual, childVisual)
          createEdgesRecursive(child)
        }
      })
    }

    if (rootTreeNode) {
      createEdgesRecursive(rootTreeNode)
    }
  }

  function onClick(event: MouseEvent): void {
    if (state.value.isDragging) return

    updateMousePosition(event)
    const nodeVisual = getIntersectedNode()

    if (nodeVisual && nodeVisual.node.children.length > 0) {
      nodeVisual.node.isExpanded = !nodeVisual.node.isExpanded
      buildVisualization()
    }
  }

  function onResize(): void {
    if (!containerRef.value || !camera || !renderer) return

    const width = containerRef.value.clientWidth
    const height = containerRef.value.clientHeight
    const aspect = width / height
    const frustumSize = 12

    camera.left = -frustumSize * aspect
    camera.right = frustumSize * aspect
    camera.top = frustumSize
    camera.bottom = -frustumSize
    camera.updateProjectionMatrix()

    renderer.setSize(width, height)
  }

  function animate(): void {
    if (!renderer || !scene || !camera || !controls) return

    animationFrameId = requestAnimationFrame(animate)

    if (!isDraggingNode) {
      controls.update()
    }

    if (camera) {
      state.value.zoomLevel = camera.zoom
    }

    renderer.render(scene, camera)
  }

  function zoomIn(): void {
    if (camera) {
      camera.zoom = Math.min(camera.zoom * 1.3, 5)
      camera.updateProjectionMatrix()
    }
  }

  function zoomOut(): void {
    if (camera) {
      camera.zoom = Math.max(camera.zoom / 1.3, 0.2)
      camera.updateProjectionMatrix()
    }
  }

  function resetView(): void {
    if (controls && camera) {
      camera.position.set(6, 0, 50)
      camera.zoom = 1
      camera.updateProjectionMatrix()
      controls.target.set(0, 0, 0)
      controls.update()
      buildVisualization()
    }
  }

  function expandAllNodes(node: TreeNode): void {
    node.isExpanded = true
    node.children.forEach(expandAllNodes)
  }

  function collapseAllNodes(node: TreeNode): void {
    node.isExpanded = false
    node.children.forEach(collapseAllNodes)
  }

  function expandAll(): void {
    if (rootTreeNode) {
      expandAllNodes(rootTreeNode)
      buildVisualization()
    }
  }

  function collapseAll(): void {
    if (rootTreeNode) {
      collapseAllNodes(rootTreeNode)
      rootTreeNode.isExpanded = true
      buildVisualization()
    }
  }

  function dispose(): void {
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId)
    }

    if (containerRef.value) {
      containerRef.value.removeEventListener('mousedown', onMouseDown)
      containerRef.value.removeEventListener('mousemove', onMouseMove)
      containerRef.value.removeEventListener('mouseup', onMouseUp)
      containerRef.value.removeEventListener('click', onClick)
    }
    window.removeEventListener('resize', onResize)

    disposables.forEach(d => d.dispose())
    disposables.length = 0

    if (renderer) {
      renderer.dispose()
      if (containerRef.value && renderer.domElement.parentNode === containerRef.value) {
        containerRef.value.removeChild(renderer.domElement)
      }
    }

    if (controls) {
      controls.dispose()
    }

    scene = null
    camera = null
    renderer = null
    controls = null
    nodeVisuals.clear()
    edgesGroup = null
    raycaster = null
    mouse = null
    rootTreeNode = null
    isDraggingNode = false
    draggedNodeVisual = null

    state.value.isInitialized = false
    state.value.hoveredNode = null
    state.value.isDragging = false
  }

  return {
    state,
    initialize,
    dispose,
    zoomIn,
    zoomOut,
    resetView,
    expandAll,
    collapseAll
  }
}
