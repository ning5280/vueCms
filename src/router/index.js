import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Welcome from '@/components/Welcome'
import MenuList from '@/pages/MenuList'
import ArticleList from '@/pages/ArticleList'
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
          path: '/menulist',
          name: 'menulist',
          component: MenuList
        },
        {
          path: '/articlelist',
          name: 'articlelist',
          component: ArticleList
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
