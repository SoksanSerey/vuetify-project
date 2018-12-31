import Vue from 'vue'
import Router from 'vue-router'
import Hamburger from './components/Hamburger/Hamburger.vue'
import Drink from './components/Hamburger/Drink.vue'
import Home from './views/Home.vue'
import Profile from './components/User/profile.vue'
import Signin from './components/User/Signin.vue'
import Signup from './components/User/Signup.vue'
import Pizza from './components/Hamburger/Pizza.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/drink',
      name: 'Drink',
      component: Drink
    },
    {
      path: '/hamburger',
      name: 'Hamburger',
      component: Hamburger
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/pizza',
      name: 'Pizza',
      component: Pizza
    }
  ]
})
