import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/homeView.vue'
import myGroupView from '../views/myGroupView.vue'
import EnterView from '../views/enterView.vue'
import AuthView from '../views/authView.vue'
import CheckView from '../views/checkView.vue'
import prep from '../views/prepodsView.vue'
import store from '../store/index.js'
import dev from '../views/inDevelop.vue'

Vue.use(VueRouter)

const routes = [
  { path: "/", redirect: { name: "home" } },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/myGroup',
    name: 'myGroup',
    component: myGroupView
  },
  {
    path: '/myTeachers',
    name: 'myTeachers',
    component: prep
  },
  {
    path: '/enter',
    name: 'enter',
    component: EnterView
  },
  {
    path: '/checkList',
    name: 'check',
    component: CheckView
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
  {
    path: "*",
    name: "404",
    component:  dev
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  console.log(store.state.User.id)
  if (to.name !== 'enter' && to.name !== 'auth' && to.name !== 'registr' && store.state.User.id === null) {
    next({ name: 'enter' })
  }
  next()
})
export default router
