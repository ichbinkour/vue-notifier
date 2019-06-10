import Vue from "vue"
import {events} from "../events"

const Notification = {
  install(Vue, args = {}) {
    this.params = args
    
    Vue.component('notifications', Notification)
    
    const notify = (params) => {
      if (typeof params === 'string') {
        params = { title: '', text: params}
      }
      
      if (typeof params == 'object') {
        events.$emit('add', params)
      }
      
      const name = args.name || 'notify'
      
      Vue.prototype['$' + name] = notify
      Vue[name] = notify
    }
  }
}

Object.keys(Notification).forEach(name => {
  Vue.components(name, Notification[name])
})

export default Notification
