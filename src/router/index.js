import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Welcome from '@/components/Welcome'
import MenuList from '@/pages/MenuList'
import ArticleList from '@/pages/ArticleList'
import AddArticle from '@/pages/AddArticle'
import EditArticle from '@/pages/EditArticle'
import RuleList from '@/pages/RuleList'

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
        },
        {
          path: '/addarticle',
          name: 'addarticle',
          component: AddArticle
        },
         {
          path: '/editarticle/:id',
          name: 'editarticle',
          component: EditArticle
        },
        {
          path: '/rulelist',
          name: 'rulelist',
          component: RuleList
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
