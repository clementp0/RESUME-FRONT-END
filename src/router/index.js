import { createRouter, createWebHistory } from 'vue-router'
import ErrorView from '../views/ErrorView.vue'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import Resume from '../views/Resume.vue'
import Ressources from '../views/Ressources.vue'
import Project from '../views/Project.vue'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: ErrorView,
    meta: {
      title: '404',
    }
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home',
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: {
      title: 'Contact',
    }
  },
  {
    path: '/resume/:lang',
    name: 'resume',
    component: Resume,
    meta: {
      title: 'Resume',
    }
  },
  {
    path: '/resume/:lang',
    name: 'resume',
    component: Resume,
    meta: {
      title: 'Resume',
    }
  },
  {
    path: '/ressources',
    name: 'Ressources',
    component: Ressources,
    meta: {
      title: 'Ressources',
    }
  },
  {
    path: '/project/:project',
    name: 'project',
    component: Project,
    meta: {
      title: 'Project',
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) =>{
  document.title =  process.env.VUE_APP_TITLE + ' | ' + to.meta.title;
  next();
});


export default router
