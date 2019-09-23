import webButtons from './src/web-button.vue'
webButtons.install = function (Vue) {
    Vue.component(webButtons.name,webButtons)
}

export default webButtons