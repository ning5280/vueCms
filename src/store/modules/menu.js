
import publicFunc from '@/common/publicFunc'
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
       publicFunc.ajaxPost({
         url: '/api/admin/menu/tree',
         success: res => {
            let data = res.data.data
            commit('CHANGE_MENULIST', data)
         }
       })
    }
  }
}

export default menu
