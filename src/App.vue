<script setup lang="ts">
import { ref, watch, Ref, onMounted, onUnmounted } from 'vue';
import { RouteLocationNormalizedLoaded } from 'vue-router';

import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import { useRoute } from 'vue-router';
import { container } from "jenesius-vue-modal";
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { windowWidth } from './ts/handlers/WindowWidthHandler';

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

onMounted(() => 
{
    window.addEventListener('resize', onResize);
});

onUnmounted(() =>
{
    window.removeEventListener('resize', onResize);
});

</script>

<template>
    <Header @toggleBurger="toggleBurger"/>
    <perfect-scrollbar v-if="windowWidth > 1050" ref="scroll">
        <router-view v-slot="{ Component }">
            <transition name="pageOpacity" mode="out-in">
                <component :is="Component" />
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
</template>