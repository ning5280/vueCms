import Vue from 'vue'
import VueRreource from 'vue-resource'
Vue.use(VueRreource)
const menu = {
  state: {
    menuList: []
  },
  mutations: {
    CHANGE_MENULIST: (state, list) => {
        state.menuList = list
    }
  },
  actions: {
     changeMenuList: ({ commit }, list) => {
      Vue.http.post('/api/admin/menu/tree').then(res => {
        if (res.status === 200 && res.body.code === 1) {
          commit('CHANGE_MENULIST', res.data.data)
        } else {
           this.$message({
              showClose: true,
              message: '获取菜单失败',
              type: 'error'
            })
        }
       })
    }
  }
}

export default menu
