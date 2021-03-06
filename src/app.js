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
import Toast from './toast';
import plugin from './plugin';

import Tabs from './tabs';
import TabsHead from './tabs-head';
import TabsBody from './tabs-body';
import TabsItem  from './tabs-item';
import TabsPane  from './tabs-pane';

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
Vue.component('g-toast', Toast);
Vue.use(plugin);

Vue.component('g-tabs', Tabs);
Vue.component('g-tabs-head', TabsHead);
Vue.component('g-tabs-body', TabsBody);
Vue.component('g-tabs-item', TabsItem);
Vue.component('g-tabs-pane', TabsPane);





new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        message: 'hi',
        selectedTab: 'sports'
    },
    methods: {
        handleChange(e) {
            console.log('handleChange', e.target.value);
        },
        showToast() {
            this.$toast('<strong>我是toast</strong>我是toast我是toast我是toast我是toast我是toast我是toast我是toast我是toast我是toast我是toast我是toast我是toast我是toast我是toast我是toast', {
                closeButton: {
                    text: '知道了',
                    callback(toast) {
                        toast.log();
                        console.log('用户说他知道了');
                    }
                },
                enableHtml: true,
                position: 'top'
            });
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