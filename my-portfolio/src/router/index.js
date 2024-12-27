import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutView.vue,
    },
    {
      path: '/projects',
      name: 'projects',
      component: AboutView.vue,
    },
    {
      path: '/resume',
      name: 'resume',
      component: ResumeView.vue,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView.vue,
    },
  ],
})

export default router
