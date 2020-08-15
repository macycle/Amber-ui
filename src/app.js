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


import chai, { expect } from 'chai'
import spies from 'chai-spies'
chai.use(spies)


{
    const expect=chai.expect
    const Constructor=Vue.extend(Button);
    const vm=new Constructor({
        propsData:{
            icon:'settings',
        }
    })
    vm.$mount()
    let useElement=vm.$el.querySelector('use')
    let href=useElement.getAttribute('xlink:href')

    expect(href).to.eq('#am-settings')
    vm.$el.remove()
    vm.$destroy()

}
{

    const expect=chai.expect
    const Constructor=Vue.extend(Button);
    const vm=new Constructor({
        propsData:{
            icon:'settings',
            loading:true
        }
    })
    vm.$mount()
    let useElement=vm.$el.querySelector('use')
    let href=useElement.getAttribute('xlink:href')

    expect(href).to.eq('#am-loading')

    vm.$el.remove()
    vm.$destroy()

}

{
    const div=document.createElement('div');
    document.body.appendChild(div)
    const expect=chai.expect
    const Constructor=Vue.extend(Button);
    const vm=new Constructor({
        propsData:{
            icon:'settings',
            loading:true,
            order:1
        }
    })
    vm.$mount(div)
    let svg=vm.$el.querySelector('svg')
    let {order}=window.getComputedStyle(svg)
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
}


{
    const Constructor=Vue.extend(Button);
    const vm=new Constructor({
        propsData:{
            icon: 'settings',
        }
    })

     vm.$mount()
     let spy=chai.spy(function(){})

     vm.$on('click',spy)

     let button=vm.$el
     button.click()
     expect(spy).to.have.been.called()
}


