<script setup lang="ts">
    import { computed } from 'vue';
    import { useStore } from 'vuex';
    import { ThemeHandler } from '../ts/handlers/ThemeHandler';

    const store = useStore(); 

    const emits = defineEmits(['toggleBurgerMenuActive']);

    const isBurgerMenuActive = computed(() => 
    {
        return store.getters['burgerMenu/isBurgerMenuActive'];
    });
    
    const toggleBurgerMenuActive = () => 
    {
        store.dispatch('burgerMenu/toggleBurgerMenuActive', !isBurgerMenuActive.value);
    };

    const onBurgerClick = () => 
    {
        toggleBurgerMenuActive();
        emits('toggleBurgerMenuActive');
    }

    const onThemeSwitchClick = () => 
    {
        if(ThemeHandler.currentTheme.value == 'light')
        {
            ThemeHandler.changeTheme('dark');
        }
        else
        {
            ThemeHandler.changeTheme('light');
        }
    }
</script>
<template>
    <div class="header">
        <div class="header__content">
            <img v-if="ThemeHandler.currentTheme.value == 'dark'" src="/src/assets/img/components/Header/logo/light.svg" alt="LoftCode" class="header__content__logo">
            <img v-else-if="ThemeHandler.currentTheme.value == 'white'" src="/src/assets/img/components/Header/logo/dark.svg" alt="LoftCode" class="header__content__logo">
            <img v-else src="/src/assets/img/components/Header/logo/dark.svg" alt="LoftCode" class="header__content__logo">
            <nav class="header__content__nav" :class="isBurgerMenuActive ? 'active' : ''">
                <nav class="header__content__nav__links">
                    <a href="#" class="header__content__nav__links__link">Services</a>
                    <a href="#" class="header__content__nav__links__link">Projects</a>
                    <a href="#" class="header__content__nav__links__link">Reviews</a>
                    <a href="#" class="header__content__nav__links__link">Contacts</a>
                </nav>
                <label class="header__content__nav__switch">
                    <input type="checkbox" @change="onThemeSwitchClick" :checked="ThemeHandler.currentTheme.value == 'light' ? false : true" id="theme__switcher" class="header__content__nav__switch__checkbox">
                    <span class="header__content__nav__switch__round"></span>
                </label>
                <button class="header__content__nav__button">Propose project</button>
            </nav>
            <button class="header__content__button">Propose project</button>
            <div @click="onBurgerClick" class="header__content__burger" :class="isBurgerMenuActive ? 'active' : ''">
                <div class="header__content__burger__lines"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped src="./scss/Header.scss"></style>