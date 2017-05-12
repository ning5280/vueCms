import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Welcome from '@/components/Welcome'
import CategoryList from '@/pages/CategoryList'
import MenuList from '@/pages/MenuList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'welcome',
          component: Welcome
        },
        {
          path: '/catelist',
          name: 'catelist',
          component: CategoryList
        },
         {
          path: '/menulist',
          name: 'menulist',
          component: MenuList
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        next()
      }
    }
  ]
})
