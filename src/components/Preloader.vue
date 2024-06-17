<script setup lang="ts">
    import { onMounted, onUnmounted, computed } from 'vue';
    import { ThemeHandler } from '../ts/handlers/ThemeHandler';
    import { scrollHidden } from '../ts/handlers/ScrollHandler';
    
    import { totalResources, loadedResources, isPreloaded } from '../ts/handlers/PreloaderHandler';
    import { timeout } from '../ts/helpers/TimeOutHelper';

    const progress = computed(() => 
    {
        if (totalResources.value === 0) return 0;
        return (loadedResources.value / totalResources.value) * 100;
    });

    const onLoad = async () => 
    {
        if (totalResources.value > 0) 
        {
            
            loadedResources.value = totalResources.value;
            scrollHidden.value = false;

            await timeout(2000);
            isPreloaded.value = true;
        }
    };

    onMounted(() => 
    {
        scrollHidden.value = true;
        window.addEventListener('load', onLoad);
    });

    onUnmounted(() => 
    {
        scrollHidden.value = false;
        window.removeEventListener('load', onLoad);
    });
</script>

<template>
    <div class="preloader" :class="isPreloaded ? 'hide' : ''">
        <div class="preloader__content">
            <img v-if="ThemeHandler.currentTheme.value == 'dark'" v-animate data-animate-type="scale" data-animate-alwaysshow src="/src/assets/img/components/Header/logo/light.svg" alt="LoftCode" class="preloader__content__logo">
            <img v-else-if="ThemeHandler.currentTheme.value == 'white'" v-animate data-animate-type="scale" data-animate-alwaysshow src="/src/assets/img/components/Header/logo/dark.svg" alt="LoftCode" class="preloader__content__logo">
            <img v-else v-animate data-animate-alwaysshow src="/src/assets/img/components/Header/logo/dark.svg" data-animate-type="scale"  alt="LoftCode" class="preloader__content__logo">
            <div v-animate data-animate-alwaysshow data-animate-type="scale" class="preloader__content__loader">
                <span :style="{ width: progress + '%' }" class="preloader__content__loader__bar"></span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped src="./scss/Preloader.scss"></style>