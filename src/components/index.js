import Vue from "vue"

const Components = {

}

Object.keys(Components).forEach(name => {
  Vue.components(name, Components[name])
})

export default Components
