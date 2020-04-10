import Toast from './toast';
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function(message, toastOptions) {
            let Constructor = Vue.extend(Toast);
            let toast = new Constructor({
                propsData: {message, ...toastOptions}
            });
            toast.$mount();
            document.body.appendChild(toast.$el);
        }
    }
}