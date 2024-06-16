<script setup lang="ts">
    import { onMounted, ref, Ref } from 'vue';
    import { ThemeHandler } from '../ts/handlers/ThemeHandler';
    import { timeout } from '../ts/helpers/TimeOutHelper';

    const isHide : Ref<boolean> = ref(false);

    const progressBar : Ref<HTMLElement | null> = ref(null);

    const progressBarScale = (percent : number) => 
    {
        if(progressBar.value)
        {
            progressBar.value.style.width = `${percent}%`;
        }
    }

    onMounted(async () => 
    {
        progressBarScale(0);
        await timeout(500);
        progressBarScale(30);
        await timeout(400);
        progressBarScale(60);
        await timeout(300);
        progressBarScale(80);
        await timeout(500); 
        progressBarScale(100);
        await timeout(1000);
        isHide.value = true
    });
    
</script>

<template>
    <div class="preloader" :class="isHide ? 'hide' : ''">
        <div class="preloader__content">
            <img v-if="ThemeHandler.currentTheme.value == 'dark'" v-animate data-animate-type="scale" data-animate-alwaysshow src="/src/assets/img/components/Header/logo/light.svg" alt="LoftCode" class="preloader__content__logo">
            <img v-else-if="ThemeHandler.currentTheme.value == 'white'" v-animate data-animate-type="scale" data-animate-alwaysshow src="/src/assets/img/components/Header/logo/dark.svg" alt="LoftCode" class="preloader__content__logo">
            <img v-else v-animate data-animate-alwaysshow src="/src/assets/img/components/Header/logo/dark.svg" data-animate-type="scale"  alt="LoftCode" class="preloader__content__logo">
            <div v-animate data-animate-alwaysshow data-animate-type="scale" class="preloader__content__loader">
                <span ref="progressBar" class="preloader__content__loader__bar"></span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped src="./scss/Preloader.scss"></style>