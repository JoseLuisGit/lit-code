import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JsonViewerView from '../views/JsonViewerView.vue'
import TextCompareView from '../views/TextCompareView.vue'
import Base64View from '../views/Base64View.vue'
import ColorPaletteView from '../views/ColorPaletteView.vue'
import ImageEditorView from '../views/ImageEditorView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/json-viewer', component: JsonViewerView },
    { path: '/text-compare', component: TextCompareView },
    { path: '/base64', component: Base64View },
    { path: '/color-palette', component: ColorPaletteView },
    { path: '/image-editor', component: ImageEditorView },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

export default router
