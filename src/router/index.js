import Vue from 'vue'
import VueRouter from 'vue-router'
import welcome from '@/components/welcome.vue'
import Chat from '@/components/Chat'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: welcome
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    props: true,
    beforeEnter: (to, from, next) => {
      console.log(to.params)
      if (to.params.name) {
        next()
      } else {
        next({ name: 'welcome' })
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
