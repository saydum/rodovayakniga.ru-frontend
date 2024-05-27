import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import RodovayaKniga from '@/views/RodovayaKniga.vue'
import RodstevennikiView from '@/views/RodstevennikiView.vue'
import GalleryView from '@/views/GalleryView.vue'
import LinksView from '@/views/LinksView.vue'
import SettingsView from '@/views/SettingsView.vue'
import SupportView from '@/views/SupportView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/rodovayakniga', component:  RodovayaKniga },
    { path: '/rodstvenniki', component:  RodstevennikiView },
    { path: '/gallery', component:  GalleryView },
    { path: '/links', component:  LinksView },
    { path: '/settings', component:  SettingsView },
    { path: '/support', component:  SupportView },

    // { path: '/create-human', component:   },
  ]
})

export default router
