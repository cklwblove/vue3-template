import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'lib-flexible';
import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from './router';
import './router/router.interceptor';
import { setGlobalProperties } from '@/services';
import setupSvgIcon from './icons';
import './pwa/register-service-worker';
import setupVendor from './vendor/vant';
import { setApp } from './useApp';

import './assets/style/app.less';

const app = createApp(App);

setGlobalProperties(app);
setupVendor(app);
setupSvgIcon(app);
setupRouter(app);

// 挂载
app.mount('#app');

setApp(app);

