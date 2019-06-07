const state = {
  notifications: []
}

const actions = {
  sendToast(context, opts) {
    context.commit('pushToast', opts)
  },
  removeToast(context) {
    context.commit('removeToast')
  }
}

const mutations = {
  pushToast(state, toast) {
    state.notifications.push(toast)
  },
  removeToast(state) {
    state.notifications.shift()
  }
}

const getters = {
  all(state) {
    return state.notifications
  },
  currentToast(state) {
    if (state.notifications.length === 0)
      return null
    return state.notifications[0]
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}

