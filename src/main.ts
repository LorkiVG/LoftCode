import { createApp } from 'vue';
import App from './App.vue';
import './scss/default.scss';
import router from './router';

import vAnimate from './ts/directives/v-animate';
import { PerfectScrollbarPlugin }  from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/style.css';

import { incrementTotalResources, incrementLoadedResources, addProcessedEntry, isEntryProcessed } from './ts/handlers/PreloaderHandler'

const app = createApp(App);

app.use(router);
app.use(PerfectScrollbarPlugin);

app.directive('animate', vAnimate);

const observer = new PerformanceObserver((list) => 
{
    const entries = list.getEntriesByType('resource') as PerformanceResourceTiming[];
    
    entries.forEach((entry) => 
    {
        if (!isEntryProcessed(entry.name)) 
        {
            addProcessedEntry(entry.name);
            incrementTotalResources();

            if (entry.responseEnd) {
                incrementLoadedResources();
            }
        }
    });
});

observer.observe({ entryTypes: ['resource'] });

app.mount('body');