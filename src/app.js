import Vue from 'vue';
import Icon from './icon';
import Button from './button';
import ButtonGroup from './button-group';
import Input from './input';
import Row from './row';
import Col from './col';

import Layout from './layout';
import Header from './header';
import Sider from './sider';
import Content from './content';
import Footer from './footer';

Vue.component('g-icon', Icon);
Vue.component('g-button', Button);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);

Vue.component('g-layout', Layout);
Vue.component('g-header', Header);
Vue.component('g-sider', Sider);
Vue.component('g-content', Content);
Vue.component('g-footer', Footer);



new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        message: 'hi'
    },
    methods: {
        handleChange(e) {
            console.log('handleChange', e.target.value);
        }
    }
});

import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies);

const expect = chai.expect;
{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'set'
        }
    });
    vm.$mount();
    const useElement = vm.$el.querySelector('use');
    const href = useElement.getAttribute('xlink:href');
    expect(href).to.equal('#icon-set');
    vm.$el.remove();
    vm.$destroy();
}

{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'set',
            loading: true
        }
    });
    vm.$mount();
    const useElement = vm.$el.querySelector('use');
    const href = useElement.getAttribute('xlink:href');
    expect(href).to.equal('#icon-loading');
    vm.$el.remove();
    vm.$destroy();
}

{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'set',
            iconPosition: 'right'
        }
    });
    vm.$mount(div);
    const svg = vm.$el.querySelector('svg');
    const { order } = window.getComputedStyle(svg);
    expect(order).to.equal('2');
    vm.$el.remove();
    vm.$destroy();
}

{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'set'
        }
    });
    vm.$mount();

    const spyFn = chai.spy(function(){});
    vm.$on('click', spyFn);
    vm.$el.click();
    expect(spyFn).to.have.been.called();
    vm.$el.remove();
    vm.$destroy();
}