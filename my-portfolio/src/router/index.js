import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutMe.vue'
import ProjectsView from '../views/Projects.vue'
import ResumeView from '../views/Resume.vue'
import ContactView from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/resume',
      name: 'resume',
      component: ResumeView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
  ],
})

export default router
