import Cookies from 'js-cookie'

const app = {
  state: {
    loadingStatus: false,
    sidebar: {
      opened: !+Cookies.get('sidebarStatus')
    }
  },
  mutations: {
    CHANGE_LOADING_STATUS: (state, status) => {
        state.loadingStatus = status
    }
  },
  actions: {
    changeLoadingStatus: ({ commit }, status) => {
      commit('CHANGE_LOADING_STATUS', status)
    }
  }
}

export default app
