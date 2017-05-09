import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.config.productionTip = false
const ajaxPost = (e) => {
  let url = e.url
  let data = e.data ? e.data : {}
  let cb = e.success ? e.success : function () {}
  Vue.http.post(url, data).then(res => {
    cb(res)
  })
}

export default{
  ajaxPost
}
