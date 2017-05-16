
import publicFunc from '@/common/publicFunc'
const admin = {
  state: {
    adminList: []
  },
  mutations: {
    CHANGE_ADMINLIST: (state, list) => {
        state.adminList = list
    }
  },
  actions: {
     changeAdminList: ({ commit }, list) => {
       publicFunc.ajaxPost({
         url: '/api/admin/admin/index',
         success: res => {
            let data = res.body.data
            commit('CHANGE_ADMINLIST', data)
         }
       })
    }
  }
}

export default admin
