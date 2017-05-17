// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import store from './store'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(ElementUI)
Vue.http.options.emulateJSON = true
// // ajax钩子函数
Vue.http.interceptors.push((request, next) => {
  store.dispatch('changeLoadingStatus', 1)
// ajax开始前
  let token = store.getters.token ? store.getters.token : sessionStorage.getItem('token')
Vue.http.headers.common.token = token
  next((response) => {
    console.log('ajaxjieshu')
    store.dispatch('changeLoadingStatus', 0)
// 请求结束后
    return response
  })
})
// 路由钩子
router.beforeEach((to, from, next) => {
  if (to.fullPath === '/login') {
    next()
  } else {
    let token = sessionStorage.getItem('token')
    if (token) {
      next()
    } else {
      router.replace({path: '/login'})
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
   }
})
