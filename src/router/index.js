import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Courses',
    component: () => import('../components/home/Courses.vue')

  },
  {
    path: '/addcourses',
    name: 'AddCourses',
    component: () => import('../components/layout/AddCourses.vue')

  },
  {
    path: '/editcourse',
    name: 'EditCourse',
    component: () => import('../components/layout/EditCourse.vue')

  },
  {
    path: '/gotocourse',
    name: 'GoToCourse',
    component: () => import('../components/layout/GoToCourse.vue')

  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
