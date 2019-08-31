import Vue from 'vue';
import App from './App.vue';
import VuerdCore from 'vuerd-core';
import 'vuerd-core/dist/vuerd-core.css';
import TuiEditor from '@/components';

Vue.config.productionTip = false;

VuerdCore.use(TuiEditor);
Vue.use(VuerdCore);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
