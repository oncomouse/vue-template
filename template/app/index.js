import Vue from 'vue';
import createRouter from './router';
import createStore from './store';
import App from './App.vue';

const router = createRouter();
{{#vuex}}
const store = createStore();
{{/vuex}}
const app = new Vue({
  router,
  {{#vuex}}
  store,
  {{/vuex}}
  components: { App },
  template: '<App/>',
});
router.onReady(() => {
  app.$mount('#root');
});
