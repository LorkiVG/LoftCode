<script setup lang="ts">
import { ref, watch, Ref, onMounted, onUnmounted } from 'vue';
import { useRoute, RouteLocationNormalizedLoaded } from 'vue-router';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';

import { container } from "jenesius-vue-modal";

import { windowWidth } from './ts/handlers/WindowWidthHandler';
import { ThemeHandler } from './ts/handlers/ThemeHandler';

import Preloader from './components/Preloader.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

import './scss/themes/light.scss';
import './scss/themes/dark.scss';
import { scrollHidden } from './ts/handlers/ScrollHandler';
import { isPreloaded } from './ts/handlers/PreloaderHandler';

const isBurgerActive : Ref<boolean> = ref(false);

const toggleBurger = () => 
{
    isBurgerActive.value = !isBurgerActive.value;
}

const route : RouteLocationNormalizedLoaded = useRoute();

const scroll : Ref<HTMLElement | null> = ref(null);

watch(() => route.path, () => 
{
	setTimeout(() => 
	{
		if(scroll.value)
		{
			(scroll.value as any).ps.element.scrollTop = 0;
		}
	}, 400);
});

const onResize = () => 
{
    windowWidth.value = window.innerWidth;  
}

const applyTheme = (theme: string) => 
{
    document.documentElement.className = `${theme}-theme`;
};

onMounted(() => 
{
    isPreloaded.value = false;
    applyTheme(ThemeHandler.currentTheme.value);
    window.addEventListener('resize', onResize);
});

onUnmounted(() =>
{
    window.removeEventListener('resize', onResize);
});

watch(ThemeHandler.currentTheme, (newTheme) => 
{
    applyTheme(newTheme);
});



watch(scrollHidden, () => 
{
    const body : HTMLBodyElement | null = document.querySelector('body');
    const ps : HTMLElement | null = document.querySelector('ps');
    if(scrollHidden.value)
    {
        body?.classList.add('scrollHidden');
        ps?.classList.add('scrollHidden');
    }
    else
    {
        body?.classList.remove('scrollHidden');
        ps?.classList.remove('scrollHidden');
    }
});
</script>

<template>
    <div id="app">
        <Header @toggleBurger="toggleBurger"/>
        <perfect-scrollbar v-if="windowWidth > 1050" ref="scroll">
            <router-view v-slot="{ Component }">
                <transition name="pageOpacity" mode="out-in">
                    <component  :is="Component" />
                </transition>
            </router-view>
        </perfect-scrollbar>
        <router-view v-else v-slot="{ Component }">
            <transition name="pageOpacity" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
        <container />
        <Footer/>
        <Preloader/>
    </div>
</template>