import { createRouter, createWebHistory } from 'vue-router';

import Contact from '../views/Contact.vue';
import About from '../views/AboutMe.vue';
import Projects from '../views/Projects.vue';


const routes = [
  {
    path: '/ds',
    children: [
      { path: '', name: 'ds-about', component: About },
      { path: 'projects', name: 'ds-projects', component: Projects },
      { path: 'contact', name: 'ds-contact', component: Contact },
    ],
  },
  {
    path: '/b',
    children: [
      { path: '', name: 'backend-about', component: About },
      { path: 'projects', name: 'backend-projects', component: Projects },
      { path: 'contact', name: 'backend-contact', component: Contact },
    ],
  },
  
  {
    path: '/de',
    children: [
      { path: '', name: 'de-about', component: About },
      { path: 'projects', name: 'de-projects', component: Projects },
      { path: 'contact', name: 'de-contact', component: Contact },
    ],
  },
  {
    path: '/fs',
    children: [
      { path: '', name: 'fs-about', component: About },
      { path: 'projects', name: 'fs-projects', component: Projects },
      { path: 'contact', name: 'fs-contact', component: Contact },
    ],
  },
  {
    path: '/fe',
    children: [
      { path: '', name: 'fe-about', component: About },
      { path: 'projects', name: 'fe-projects', component: Projects },
      { path: 'contact', name: 'fe-contact', component: Contact },
    ],
  },
  {
    path: '/a',
    children: [
      { path: '', name: 'a-about', component: About },
      { path: 'projects', name: 'a-projects', component: Projects },
      { path: 'contact', name: 'a-contact', component: Contact },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
