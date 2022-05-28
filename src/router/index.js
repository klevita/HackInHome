import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/homeView.vue'
import EnterView from '../views/enterView.vue'
import AuthView from '../views/authView.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/enter',
    name: 'enter',
    component: EnterView
  },
  {
    path: '/registr',
    name: 'reistr',
    component: EnterView
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next) => {
  if (to.name !== 'enter' && to.name !== 'auth' && to.name !== 'registr' && store.state.User.id===null){
    next({name:'enter'})
  }
  next()
})
export default router
