import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClassMenu from '../views/ClassMenu.vue'
import DetailClass from '../views/DetailClass.vue'
import LoginVue from '@/views/Login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/class-menu',
    name: 'Class Menu',
    component: ClassMenu
  },
  {
    path: '/class-prakerja',
    name: 'ClassPrakerja',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component : () => import(/* webpackChunkName: "about" */ '../views/ClassPrakerja.vue')
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('../views/Privacy.vue')
  },
  {
    path: '/detail-class',
    name: 'Detail Class',
    component: DetailClass
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginVue
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
