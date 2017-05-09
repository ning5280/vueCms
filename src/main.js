// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource)
// ajax钩子函数
Vue.http.interceptors.push((request, next) => {
  console.log('ajaxkaishi')
// ajax开始前
  // request.method = 'POST'
  next((response) => {
    console.log('ajaxjieshu')
// 请求结束后
    return response
  })
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
