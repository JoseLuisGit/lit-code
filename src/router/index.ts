import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/json-viewer',
    name: 'json-viewer',
    component: () => import('../views/JsonViewerView.vue'),
  },
  {
    path: '/text-compare',
    name: 'text-compare',
    component: () => import('../views/TextCompareView.vue'),
  },
  {
    path: '/base64',
    name: 'base64',
    component: () => import('../views/Base64View.vue'),
  },
  {
    path: '/image-editor',
    name: 'image-editor',
    component: () => import('../views/ImageEditorView.vue'),
  },
  {
    path: '/color-palette',
    name: 'color-palette',
    component: () => import('../views/ColorPaletteView.vue'),
  },
  {
    path: '/regex-tester',
    name: 'regex-tester',
    component: () => import('../views/RegexTesterView.vue'),
  },
  {
    path: '/jwt-decoder',
    name: 'jwt-decoder',
    component: () => import('../views/JwtDecoderView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

function scrollToTop() {
  return { top: 0 }
}

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: scrollToTop,
})
