import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'lib-flexible';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import FUNS from '@/services';
import './router/router.interceptor';
import './components/global';
import './icons';
import './services';
import './vendor/vant';

import './assets/style/app.less';

const app = createApp(App);

app.config.globalProperties.$services = FUNS;

// use 插件
app.use(router)

// 挂载
app.mount('#app');
