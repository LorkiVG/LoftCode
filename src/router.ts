import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import Main from './views/Main.vue';

const routes: RouteRecordRaw[] = 
[
    {
        path: '/',
        component: Main
    }
];

const router = createRouter(
{
    history: createWebHashHistory(),
    routes,
});

export default router;