import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClassMenu from '../views/ClassMenu.vue'
import DetailClass from '../views/DetailClass.vue'

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
<<<<<<< HEAD
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/detail-class',
    name: 'Detail Class',
    component: DetailClass
=======
    component: () => import(/* webpackChunkName: "about" */ '../views/ClassPrakerja.vue')
>>>>>>> 51b2954491d1929f29d309c033e4efbd26df1b02
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
