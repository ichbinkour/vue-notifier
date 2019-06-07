import Vue from 'vue'
import App from './App.vue'

// Mixins
import notifier from "./mixins/notifier"

// Store
import Vuex from "vuex"
import store from "./store"

Vue.mixin(notifier)
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
