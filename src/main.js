import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'lib-flexible';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './router/router.interceptor';
import './components/global';
import './icons';
import './services';
import './vendor/vant';

import './assets/style/app.less';

createApp(App).use(router).mount('#app');
