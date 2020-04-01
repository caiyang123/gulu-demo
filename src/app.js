import Vue from 'vue';
import Icon from './icon';
import Button from './button';
import ButtonGroup from './button-group';
import Input from './input';

Vue.component('g-icon', Icon);
Vue.component('g-button', Button);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);


new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false
    }
});