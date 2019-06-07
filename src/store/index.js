import Vuex from 'vuex'
import Vue from 'vue'
import notifier from "./notifier"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notifier
  }
})
