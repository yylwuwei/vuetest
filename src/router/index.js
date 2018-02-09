import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import ShowValue from '@/components/ShowValue'
import ShowChart from '@/components/ShowChart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/ShowValue',
          name: 'ShowValue',
          component: ShowValue
        },
        {
          path: '/ShowChart',
          name: 'ShowChart',
          component: ShowChart
        }
      ]
    }
  ]
})
