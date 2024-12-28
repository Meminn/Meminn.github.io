import { createRouter, createWebHistory } from 'vue-router';

import Contact from '../views/Contact.vue';

// Backend Engineer Views
import BackendAbout from '../views/backend/AboutMe.vue';
import BackendProjects from '../views/backend/Projects.vue';


// Data Scientist Views
import DSAbout from '../views/data-scientist/AboutMe.vue';
import DSProjects from '../views/data-scientist/Projects.vue';

const routes = [
  {
    path: '/b',
    children: [
      { path: '', name: 'backend-about', component: BackendAbout },
      { path: 'projects', name: 'backend-projects', component: BackendProjects },
      { path: 'contact', name: 'backend-contact', component: Contact },
    ],
  },
  {
    path: '/ds',
    children: [
      { path: '', name: 'ds-about', component: DSAbout },
      { path: 'projects', name: 'ds-projects', component: DSProjects },
      { path: 'contact', name: 'ds-contact', component: Contact },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
