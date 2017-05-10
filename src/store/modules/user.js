import Cookies from 'js-cookie'

const user = {
  state: {
    user: '',
    token: sessionStorage.getItem('token') ? sessionStorage.getItem('token') : '',
    status: '',
    code: '',
    uid: undefined,
    auth_type: '',
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
    SET_AUTH_TYPE: (state, type) => {
      state.auth_type = type
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    }

  },
  actions: {
     // 获取用户信息
    GetInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          const data = response.data
          commit('SET_ROLES', data.role)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_INTRODUCTION', data.introduction)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          Cookies.remove('X-Ivanka-Token')
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
        // 前端 登出
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        Cookies.remove('X-Ivanka-Token')
        resolve()
      })
    }
  }
}

export default user
