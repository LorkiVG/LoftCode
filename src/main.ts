import { createApp } from 'vue';
import App from './App.vue';
import './scss/default.scss';
import router from './router';
import vAnimate from './ts/directives/v-animate';
import { PerfectScrollbarPlugin }  from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/style.css';
import { store } from './store/index.ts'; 

const app = createApp(App);

app.use(router);
app.use(store);
app.use(PerfectScrollbarPlugin);

app.directive('animate', vAnimate);

app.mount('body');