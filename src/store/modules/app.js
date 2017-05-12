import Cookies from 'js-cookie'

const app = {
  state: {
    loadingStatus: false,
    menuList: [],
    sidebar: {
      opened: !+Cookies.get('sidebarStatus')
    }
  },
  mutations: {
    CHANGE_LOADING_STATUS: (state, status) => {
        state.loadingStatus = status
    },
    CHANGE_MENULIST: (state, list) => {
        state.menuList = list
    }
  },
  actions: {
    changeLoadingStatus: ({ commit }, status) => {
      commit('CHANGE_LOADING_STATUS', status)
    },
     changeMenuList: ({ commit }, list) => {
      commit('CHANGE_MENULIST', list)
    }
  }
}

export default app
