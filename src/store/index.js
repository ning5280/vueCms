import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// import * as actions from './actions'
import getters from './getters'
import app from './modules/app'
import user from './modules/user'
import menu from './modules/menu'
import article from './modules/article'

const store = new Vuex.Store({
  modules: {
    app,
    user,
    menu,
    article
  },
  getters
})

export default store
