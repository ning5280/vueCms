
import publicFunc from '@/common/publicFunc'
const role = {
  state: {
    roleList: []
  },
  mutations: {
    CHANGE_ROLELIST: (state, list) => {
        state.roleList = list
    }
  },
  actions: {
     changeRoleList: ({ commit }, list) => {
       publicFunc.ajaxPost({
         url: '/api/admin/role/index',
         success: res => {
            let data = res.body.data
            commit('CHANGE_ROLELIST', data)
         }
       })
    }
  }
}

export default role
