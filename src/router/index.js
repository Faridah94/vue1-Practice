import Vue from 'vue'
import VueRouter from 'vue-router'
import Courses from '@/components/home/courses'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Courses',
      component: Courses
    },
  ]
})

export default router
