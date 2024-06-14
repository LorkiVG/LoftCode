<script setup lang="ts">
    import { burgerActive } from '../ts/handlers/BurgerHandler';
    import { ThemeHandler } from '../ts/handlers/ThemeHandler';

    const emits = defineEmits(['toggleBurger']);

    const onBurgerClick = () => 
    {
        burgerActive.value = !burgerActive.value;
        emits('toggleBurger');
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
            <img src="/src/assets/img/components/Header/logo/white.svg" class="header__content__logo">
            
            <nav class="header__content__nav" :class="burgerActive ? 'active' : ''">
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
            <div @click="onBurgerClick" class="header__content__burger" :class="burgerActive ? 'active' : ''">
                <div class="header__content__burger__lines"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped src="./scss/Header.scss"></style>