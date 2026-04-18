import { ref, type Ref } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import type { TreeNode } from '../types/tree-visualization'
import { NODE_COLORS } from '../types/tree-visualization'

interface VisualizerState {
  isInitialized: boolean
  hoveredNode: TreeNode | null
  zoomLevel: number
  isDragging: boolean
  isAutoRotating: boolean
}

interface NodeVisual {
  group: THREE.Group
  mesh: THREE.Mesh
  node: TreeNode
  label: THREE.Sprite
  expandIcon: THREE.Sprite | null
  glow: THREE.PointLight
  edges: THREE.Mesh[] // Changed from Line[] to Mesh[] for Tubes
  worldX: number
  worldY: number
}

const NODE_RADIUS = 0.5
const HORIZONTAL_SPACING = 8
const VERTICAL_SPACING = 3

export function useTreeVisualizer(containerRef: Ref<HTMLElement | null>) {
  const state = ref<VisualizerState>({
    isInitialized: false,
    hoveredNode: null,
    zoomLevel: 1,
    isDragging: false,
    isAutoRotating: true
  })

  // Three.js core
  let scene: THREE.Scene | null = null
  let camera: THREE.PerspectiveCamera | null = null
  let renderer: THREE.WebGLRenderer | null = null
  let composer: EffectComposer | null = null
  let controls: OrbitControls | null = null

  // State
  let animationFrameId: number | null = null
  let nodeVisuals: Map<string, NodeVisual> = new Map()
  let edgesGroup: THREE.Group | null = null
  let particlesGroup: THREE.Group | null = null
  let raycaster: THREE.Raycaster | null = null
  let mouse: THREE.Vector2 | null = null
  let rootTreeNode: TreeNode | null = null

  // Dragging
  let isDraggingNode = false
  let draggedNodeVisual: NodeVisual | null = null
  let dragPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
  let dragOffset = new THREE.Vector3()

  // Resources
  const disposables: { dispose: () => void }[] = []

  function createTextSprite(text: string, fontSize: number = 26, color: string = '#ffffff'): THREE.Sprite {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')!

    canvas.width = 512
    canvas.height = 72

    context.clearRect(0, 0, canvas.width, canvas.height)

    // Glass backdrop for text - Manual rounded rect
    context.fillStyle = 'rgba(15, 23, 42, 0.9)'

    // Helper for rounded rect
    const drawRoundedRect = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) => {
      ctx.beginPath()
      ctx.moveTo(x + r, y)
      ctx.lineTo(x + w - r, y)
      ctx.quadraticCurveTo(x + w, y, x + w, y + r)
      ctx.lineTo(x + w, y + h - r)
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
      ctx.lineTo(x + r, y + h)
      ctx.quadraticCurveTo(x, y + h, x, y + h - r)
      ctx.lineTo(x, y + r)
      ctx.quadraticCurveTo(x, y, x + r, y)
      ctx.closePath()
    }

    drawRoundedRect(context, 0, 4, canvas.width, canvas.height - 8, 16)
    context.fill()

    // Border
    context.strokeStyle = color
    context.lineWidth = 4
    drawRoundedRect(context, 2, 6, canvas.width - 4, canvas.height - 12, 14)
    context.stroke()

    // Text
    context.font = `bold ${fontSize}px Arial, sans-serif`
    context.fillStyle = '#ffffff'
    context.textAlign = 'left'
    context.textBaseline = 'middle'
    // Disable shadow to ensure sharpness
    // context.shadowColor = color
    // context.shadowBlur = 10

    // Truncate long text
    const maxChars = 30
    const displayText = text.length > maxChars ? text.slice(0, maxChars) + '...' : text
    context.fillText(displayText, 24, canvas.height / 2)

    const texture = new THREE.CanvasTexture(canvas)
    texture.colorSpace = THREE.SRGBColorSpace
    texture.minFilter = THREE.LinearFilter
    texture.magFilter = THREE.LinearFilter
    texture.needsUpdate = true

    const material = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      depthWrite: false,
      depthTest: false // FORCE VISIBILITY ON TOP
    })
    disposables.push(material, texture)

    const sprite = new THREE.Sprite(material)
    sprite.scale.set(6, 0.85, 1)
    sprite.renderOrder = 100 // Ensure it renders late

    return sprite
  }

  function createExpandIcon(isExpanded: boolean, color: string): THREE.Sprite {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')!

    canvas.width = 64
    canvas.height = 64

    context.shadowColor = color
    context.shadowBlur = 15
    context.fillStyle = color
    context.beginPath()
    context.arc(32, 32, 24, 0, Math.PI * 2)
    context.fill()

    context.shadowBlur = 0
    context.fillStyle = '#ffffff'
    context.font = 'bold 40px Arial'
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.fillText(isExpanded ? '−' : '+', 32, 31)

    const texture = new THREE.CanvasTexture(canvas)
    const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false })
    disposables.push(material, texture)

    const sprite = new THREE.Sprite(material)
    sprite.scale.set(0.6, 0.6, 1)

    return sprite
  }

  function createNodeVisual(node: TreeNode, x: number, y: number): NodeVisual {
    const colorHex = NODE_COLORS[node.type] || NODE_COLORS.null
    const color = new THREE.Color(colorHex)

    const group = new THREE.Group()
    group.position.set(x, y, 0)

    // Main Sphere (Node)
    const geometry = new THREE.SphereGeometry(NODE_RADIUS, 32, 32)
    const material = new THREE.MeshPhysicalMaterial({
      color: color,
      metalness: 0.1,
      roughness: 0.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      emissive: color,
      emissiveIntensity: 0.2
    })
    disposables.push(geometry, material)

    const mesh = new THREE.Mesh(geometry, material)
    mesh.castShadow = true
    mesh.receiveShadow = true
    group.add(mesh)

    // Local Light (Glow)
    const light = new THREE.PointLight(color, 0, 8)
    light.position.set(0, 0, 1)
    group.add(light)

    // Label
    const labelText = `${node.name}: ${node.value}`
    const label = createTextSprite(labelText, 24, colorHex)
    label.position.set(4, 0, 0) // Offset to right
    group.add(label)

    // Expand Icon
    let expandIcon: THREE.Sprite | null = null
    if (node.children.length > 0) {
      expandIcon = createExpandIcon(node.isExpanded, colorHex)
      expandIcon.position.set(0, -0.8, 0.5)
      group.add(expandIcon)
    }

    scene?.add(group)

    const nodeVisual: NodeVisual = {
      group,
      mesh,
      node,
      label,
      expandIcon,
      glow: light,
      edges: [],
      worldX: x,
      worldY: y
    }

    nodeVisuals.set(node.id, nodeVisual)
    return nodeVisual
  }

  function createEdge(fromVisual: NodeVisual, toVisual: NodeVisual): THREE.Mesh {
    const x1 = fromVisual.worldX
    const y1 = fromVisual.worldY
    const x2 = toVisual.worldX
    const y2 = toVisual.worldY

    const colorHex = NODE_COLORS[fromVisual.node.type] || NODE_COLORS.null
    const color = new THREE.Color(colorHex)

    const midX = x1 + (x2 - x1) * 0.5

    // Bezier Curve
    const curve = new THREE.CubicBezierCurve3(
      new THREE.Vector3(x1, y1, 0),
      new THREE.Vector3(midX, y1, 0),
      new THREE.Vector3(midX, y2, 0),
      new THREE.Vector3(x2, y2, 0)
    )

    // Tube Geometry for 3D lines
    const geometry = new THREE.TubeGeometry(curve, 20, 0.05, 8, false)
    const material = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide
    })
    disposables.push(geometry, material)

    const mesh = new THREE.Mesh(geometry, material)
    edgesGroup?.add(mesh)

    fromVisual.edges.push(mesh)

    return mesh
  }

  function layoutTree(node: TreeNode, x: number, startY: number): { height: number, positions: Map<string, { x: number, y: number }> } {
    const positions = new Map<string, { x: number, y: number }>()

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

      const childHeights = n.children.map(child => calculateSubtreeHeight(child))
      const totalHeight = childHeights.reduce((a, b) => a + b, 0)

      let currentY = py + (totalHeight - VERTICAL_SPACING) / 2

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
      // Clear existing edges safely
      while (edgesGroup.children.length > 0) {
        const child = edgesGroup.children[0]
        if (child) {
          edgesGroup.remove(child)
          const mesh = child as THREE.Mesh
          if (mesh.geometry) mesh.geometry.dispose()
        }
      }
    }

    // Recalculate layout
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

  function createParticels() {
    const particleCount = 1000
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    const color = new THREE.Color()

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 200
      const y = (Math.random() - 0.5) * 200
      const z = (Math.random() - 0.5) * 100 - 50 // Push back

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      // Random subtle colors
      if (Math.random() > 0.5) {
        color.setHex(0x6366f1) // Indigo
      } else {
        color.setHex(0x10b981) // Emerald
      }

      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true
    })
    disposables.push(geometry, material)

    particlesGroup = new THREE.Group()
    particlesGroup.add(new THREE.Points(geometry, material))
    scene?.add(particlesGroup)
  }

  function initialize(treeData: TreeNode): void {
    if (!containerRef.value) return

    rootTreeNode = treeData
    const container = containerRef.value
    const width = container.clientWidth
    const height = container.clientHeight

    // CAMERA
    camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
    camera.position.set(20, 0, 40)

    // SCENE
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0x020617) // Dark Slate 950
    scene.fog = new THREE.FogExp2(0x020617, 0.008)

    // LIGHTS
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(10, 10, 10)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    const blueSpot = new THREE.SpotLight(0x6366f1, 2)
    blueSpot.position.set(-20, 20, 20)
    scene.add(blueSpot)

    // RENDERER
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap

    // COMPOSER (BLOOM)
    const renderScene = new RenderPass(scene, camera)
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), 1.5, 0.4, 0.85)
    bloomPass.threshold = 0.2
    bloomPass.strength = 0.8
    bloomPass.radius = 0.5

    composer = new EffectComposer(renderer)
    composer.addPass(renderScene)
    composer.addPass(bloomPass)

    container.appendChild(renderer.domElement)

    // CONTROLS
    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.screenSpacePanning = true
    controls.minDistance = 5
    controls.maxDistance = 200
    controls.maxPolarAngle = Math.PI / 1.2

    raycaster = new THREE.Raycaster()
    mouse = new THREE.Vector2()

    edgesGroup = new THREE.Group()
    scene.add(edgesGroup)

    createParticels()
    buildVisualization()

    // Events
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

    // Intersect with node meshes
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

      // Drag Logic remains largely same but in 3D
      // Intersect with a plane facing Camera at node's depth? 
      // Simplified: Drag on Z=0 plane for now
      dragPlane.setFromNormalAndCoplanarPoint(new THREE.Vector3(0, 0, 1), nodeVisual.group.position)

      const intersectPoint = new THREE.Vector3()
      if (raycaster.ray.intersectPlane(dragPlane, intersectPoint)) {
        dragOffset.copy(intersectPoint).sub(nodeVisual.group.position)
      } else {
        // Fallback
        dragOffset.set(0, 0, 0)
      }

      if (containerRef.value) {
        containerRef.value.style.cursor = 'grabbing'
      }

      event.preventDefault()
      event.stopPropagation()
    }
  }

  function onMouseMove(event: MouseEvent): void {
    updateMousePosition(event)

    // Dragging
    if (isDraggingNode && draggedNodeVisual && raycaster && camera) {
      const intersectPoint = new THREE.Vector3()
      raycaster.setFromCamera(mouse!, camera)

      if (raycaster.ray.intersectPlane(dragPlane, intersectPoint)) {
        const newPos = intersectPoint.sub(dragOffset)
        draggedNodeVisual.group.position.copy(newPos)
        // Keep Z at 0 usually, but let's allow slight movement? No, keep logic 2D plane in 3D world for simplicity
        draggedNodeVisual.group.position.z = 0
        draggedNodeVisual.worldX = newPos.x
        draggedNodeVisual.worldY = newPos.y
        rebuildAllEdges()
      }
      return
    }

    // Hover
    const nodeVisual = getIntersectedNode()

    // Reset loop
    nodeVisuals.forEach(nv => {
      const mat = nv.mesh.material as THREE.MeshPhysicalMaterial
      if (nv.node !== state.value.hoveredNode) {
        nv.glow.intensity = 0
        mat.emissiveIntensity = 0.2
        nv.label.scale.set(6, 0.85, 1) // Reset scale
        nv.group.scale.setScalar(1)
      }
    })

    if (nodeVisual) {
      const mat = nodeVisual.mesh.material as THREE.MeshPhysicalMaterial
      mat.emissiveIntensity = 1.0 // Bright glow
      nodeVisual.glow.intensity = 2 // Point light on

      // Pop effect
      nodeVisual.group.scale.setScalar(1.1)
      nodeVisual.label.scale.set(7.5, 1.05, 1) // Slight text zoom

      state.value.hoveredNode = nodeVisual.node

      if (containerRef.value) {
        containerRef.value.style.cursor = 'pointer'
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

    // Remove all children
    while (edgesGroup.children.length > 0) {
      const child = edgesGroup.children[0]
      if (child) {
        edgesGroup.remove(child)
        if (child instanceof THREE.Mesh) {
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
    if (!containerRef.value || !camera || !renderer || !composer) return

    const width = containerRef.value.clientWidth
    const height = containerRef.value.clientHeight

    camera.aspect = width / height
    camera.updateProjectionMatrix()

    renderer.setSize(width, height)
    composer.setSize(width, height)
  }

  function animate(): void {
    if (!renderer || !scene || !camera || !controls || !composer) return

    animationFrameId = requestAnimationFrame(animate)

    if (!isDraggingNode) {
      controls.update()
    }

    if (particlesGroup) {
      particlesGroup.rotation.y += 0.0005
    }

    // Replace renderer.render with composer.render
    composer.render()
  }

  function zoomIn(): void {
    if (camera && controls) {
      const distance = camera.position.distanceTo(controls.target)
      const newDistance = Math.max(distance * 0.8, controls.minDistance)
      const direction = new THREE.Vector3().subVectors(camera.position, controls.target).normalize()
      camera.position.copy(controls.target).add(direction.multiplyScalar(newDistance))
      controls.update()
    }
  }

  function zoomOut(): void {
    if (camera && controls) {
      const distance = camera.position.distanceTo(controls.target)
      const newDistance = Math.min(distance * 1.25, controls.maxDistance)
      const direction = new THREE.Vector3().subVectors(camera.position, controls.target).normalize()
      camera.position.copy(controls.target).add(direction.multiplyScalar(newDistance))
      controls.update()
    }
  }

  function resetView(): void {
    if (controls && camera) {
      camera.position.set(20, 0, 40)
      controls.target.set(0, 0, 0)
      controls.update()
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

  function toggleAutoRotate(): void {
    if (controls) {
      controls.autoRotate = !controls.autoRotate
      state.value.isAutoRotating = controls.autoRotate
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
    composer = null
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
    collapseAll,
    toggleAutoRotate
  }
}
