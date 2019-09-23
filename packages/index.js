import badge from './badge'
import tag from './tag'
import webswitch from './web-switch'
import cheng from './cheng'

const components = {
    badge,
    tag,
    webswitch,
    cheng
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
    webswitch,
    cheng
}