import Vue from 'vue'
import  Button from './button.vue';
import Icon from './icon.vue';
import ButtonGroup from './button-group.vue';
Vue.component('am-button',Button);
Vue.component('am-icon',Icon);
Vue.component('am-group-button',ButtonGroup)

new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:false
    }

})


