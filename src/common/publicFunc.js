import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
const ajaxPost = function(e) {
    e.url = e.url ? e.url : ''
    e.data = e.data ? e.data : {}
    e.cb = e.cb ? e.cb : function () {}
    Vue.http.post(e.url, e.data).then(res => {
        if (res.status === 200 && res.body.code === 1) {
            e.cb()
        } else {
            this.$message({
                showClose: true,
                message: res.data.message,
                type: 'error'
            })
        }
    })
}

export default {
    ajaxPost
}