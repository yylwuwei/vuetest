import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import StationInfo55 from '@/components/StationInfo/StationInfo'
import StationManage55 from '@/components/StationManage/StationManage'
import SystemSet55 from '@/components/SystemSet/SystemSet'

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
          path: 'StationInfo',
          name: 'StationInfo44',
          component: StationInfo55
        },
        {
          path: 'StationManage',
          name: 'StationManage44',
          component: StationManage55
        },
        {
          path: 'SystemSet',
          name: 'SystemSet44',
          component: SystemSet55
        }
      ]
    }
  ]
})
