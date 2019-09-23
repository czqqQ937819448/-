import webBadge from "./badge.vue";

webBadge.install = function(Vue){
    Vue.component(webBadge.name,webBadge);
}

export default webBadge