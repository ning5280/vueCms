
import publicFunc from '@/common/publicFunc'
const menu = {
  state: {
    ruleList: []
  },
  mutations: {
    CHANGE_RULELIST: (state, list) => {
        state.ruleList = list
    }
  },
  actions: {
     changeRuleList: ({ commit }, list) => {
       publicFunc.ajaxPost({
         url: '/api/admin/rule/tree',
         success: res => {
            let data = res.body.data
            commit('CHANGE_RULELIST', data)
         }
       })
    }
  }
}

export default menu
