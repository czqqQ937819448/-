import webSwitchs from './src/web-switch.vue'
webSwitchs.install = function (Vue) {
    Vue.component(webSwitchs.name,webSwitchs)
}

export default webSwitchs