import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'lib-flexible';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import FUNS from '@/services';
import './router/router.interceptor';
import './pwa/register-service-worker';
import './vendor/vant';
import { VueSvgIconPlugin } from '@yzfe/vue3-svgicon';
import '@yzfe/svgicon/lib/svgicon.css';

import './assets/style/app.less';

const app = createApp(App);

app.config.globalProperties.$services = FUNS;

// use 插件
app
  .use(router)
  .use(VueSvgIconPlugin, {
    tagName: 'svg-icon'
  });

// 挂载
app.mount('#app');

