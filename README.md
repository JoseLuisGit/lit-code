# JSON Visualizer

Proyecto para visualizar JSON de forma visual e interactiva con vista de árbol tradicional y visualización 3D.

## Características

- Validación de JSON en tiempo real con mensajes de error
- Vista de árbol expandible/colapsable con tipos coloreados
- Formateo automático de JSON
- Visualización 3D interactiva con Three.js
  - Nodos arrastrables
  - Zoom y paneo con controles de órbita
  - Expandir/colapsar nodos con clic
  - Panel de información al pasar sobre nodos

## Comandos

```bash
npm install      # Instalar dependencias
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Vista previa del build
```

## Tecnologías

- Vue 3 con Composition API y `<script setup>`
- TypeScript
- Vite
- Tailwind CSS
- Three.js con OrbitControls
