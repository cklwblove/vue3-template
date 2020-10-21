import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'lib-flexible';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'lib-flexible';
import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter} from './router';
import './router/router.interceptor';
import { setGlobalProperties } from '@/services';
import setupSvgIcon from './icons';
import setupVant from './vendor/vant';

import './assets/style/app.less';

const app = createApp(App);

setGlobalProperties(app);
setupVant(app);
setupSvgIcon(app);
setupRouter(app);

// 挂载
app.mount('#app');
