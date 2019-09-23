import badge from './badge'
import tag from './tag'
import webswitch from './web-switch'

const components = {
    badge,
    tag,
    webswitch
}

const install = function (Vue) {
    if(install.installed) return
    components.map(component => Vue.component(component.name,component))
}

if (typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}

export default {
    install,
    badge,
    tag,
    webswitch
}