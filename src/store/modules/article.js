
import publicFunc from '@/common/publicFunc'
const article = {
  state: {
    articleList: [],
    articleCount: 0
  },
  mutations: {
    CHANGE_ARTICLELIST: (state, list) => {
        state.articleList = list
    },
     CHANGE_ARTICLECOUNT: (state, num) => {
        state.articleCount = num
    }
  },
  actions: {
     changeArticleList: ({ commit }, params) => {
       console.log(params)
       publicFunc.ajaxPost({
         url: '/api/admin/article/index',
         data: {pageNo: params.pageNo, pageSize: params.pageSize, where: params.where},
         success: res => {
            let data = res.body.data
            commit('CHANGE_ARTICLELIST', data.list)
            commit('CHANGE_ARTICLECOUNT', data.count)
         }
       })
    }
  }
}

export default article
