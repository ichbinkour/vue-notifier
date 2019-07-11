import VueNotifier from "./VueNotifier"
import Vue from "vue"

export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('VueNotifier', VueNotifier)
}

const plugin =  {
  install
}

let GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export default VueNotifier;

