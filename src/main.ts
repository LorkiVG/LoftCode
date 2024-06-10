import { createApp } from 'vue';
import App from './App.vue'
import './scss/default.scss';
import router from './router';

import { PerfectScrollbarPlugin }  from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/style.css'

const app = createApp(App)

app.use(router)
app.use(PerfectScrollbarPlugin)
app.mount('#app')