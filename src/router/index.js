import { createRouter, createWebHistory } from 'vue-router'
import ErrorView from '../views/ErrorView.vue'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import ArchiveView from '../views/ArchiveView.vue'
import StatusView from '../views/StatusView.vue'
import ResumeEn from '../views/Resume/ResumeEn.vue'
import ResumeFr from '../views/Resume/ResumeFr.vue'
import ResumePl from '../views/Resume/ResumePl.vue'


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
    path: '/archives',
    name: 'archive',
    component: ArchiveView,
    meta: {
      title: 'Archive',
    }
  },
  {
    path: '/status',
    name: 'status',
    component: StatusView,
    meta: {
      title: 'Status',
    }
  },
  {
    path: '/resume/en',
    name: 'resumeEn',
    component: ResumeEn,
    meta: {
      title: '(EN) Resume',
    }
  },
  {
    path: '/resume/fr',
    name: 'resumeFr',
    component: ResumeFr,
    meta: {
      title: '(FR) Resume',
    }
  },
  {
    path: '/resume/pl',
    name: 'resumePl',
    component: ResumePl,
    meta: {
      title: '(PL) Resume',
    }
  }
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
