<script setup lang="ts">
    import { computed, onMounted, onUnmounted } from 'vue';
    import { useStore } from 'vuex';
    import { ThemeHandler } from '../ts/handlers/ThemeHandler';
    import { timeout } from '../ts/helpers/TimeOutHelper';

    const store = useStore();

    const isPreloaded = computed(() => 
    {
        return store.getters['preloader/isPreloaded'];
    });
    const togglePreloaded = () => 
    {
        
        store.dispatch('preloader/togglePreloaded', !isPreloaded.value);
    };

    const isScrollHidden = computed(() => 
    {
        return store.getters['scroll/isScrollHidden'];
    });
    const toggleScrollHidden = () => 
    {
        console.log(isScrollHidden.value);
        
        store.dispatch('scroll/toggleScrollHidden', !isScrollHidden.value);
    };

    const onLoad = async () => 
    {
        await timeout(2000);
        toggleScrollHidden();
        togglePreloaded();
    };

    onMounted(() => 
    {
        toggleScrollHidden();
        window.addEventListener('load', onLoad);
    });

    onUnmounted(() => 
    {
        window.removeEventListener('load', onLoad);
    });
</script>

<template>
    <div class="preloader" :class="isPreloaded ? 'hide' : ''">
        <div class="preloader__content">
            <img v-if="ThemeHandler.currentTheme.value == 'dark'" v-animate data-animate-type="scale" data-animate-alwaysshow src="/src/assets/img/components/Header/logo/light.svg" alt="LoftCode" class="preloader__content__logo">
            <img v-else-if="ThemeHandler.currentTheme.value == 'white'" v-animate data-animate-type="scale" data-animate-alwaysshow src="/src/assets/img/components/Header/logo/dark.svg" alt="LoftCode" class="preloader__content__logo">
            <img v-else v-animate data-animate-alwaysshow src="/src/assets/img/components/Header/logo/dark.svg" data-animate-type="scale"  alt="LoftCode" class="preloader__content__logo">
            <img v-animate data-animate-alwaysshow data-animate-type="scale" src="/src/assets/img/components/Preloader/loader.apng" alt="Loading..." class="preloader__loader">
        </div>
    </div>
</template>

<style lang="scss" scoped src="./scss/Preloader.scss"></style>