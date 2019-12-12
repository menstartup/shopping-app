import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Menu from '../components/Menu.vue'
import Add from '../components/Addnewitem.vue'
import Admin from '../components/Admin.vue'
import Login from '../components/Login.vue'

import firebase from 'firebase'
Vue.use(VueRouter)
const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu
  },
  {
    path: '/add',
    name: 'add',
    component: Add,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition)
    return { x: 500, y: 700 }
  }
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requireAuth = to.matched.some(record => record.meta.requireAuth)
  if(requireAuth && !currentUser) next('/login')
  else next()
})

export default router
