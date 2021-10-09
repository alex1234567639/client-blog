import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue'),
  },
  {
    path: '*',
    redirect: '/',
  },
  // 上位卡表
  {
    path: '/metaDeck',
    name: 'metaDeck',
    component: () => import('../views/MetaDeck/articleList'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
