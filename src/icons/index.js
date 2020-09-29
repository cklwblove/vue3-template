import { createApp } from 'vue';
import SvgIcon from 'vue-svgicon';
import './svg-icon.less';
import './components';

const app = createApp({});

app.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em'
});
