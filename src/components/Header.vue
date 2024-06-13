<script setup lang="ts">
    import { ref, Ref } from 'vue';

    const emits = defineEmits(['toggleBurger']);

    const burgerActive : Ref<boolean> = ref(false);

    const onBurgerActivate = () => 
    {
        burgerActive.value = !burgerActive.value;
        emits('toggleBurger');
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
                    <input type="checkbox" id="theme__switcher" class="header__content__nav__switch__checkbox">
                    <span class="header__content__nav__switch__round"></span>
                </label>
                <button class="header__content__nav__button">Propose project</button>
            </nav>
            <button class="header__content__button">Propose project</button>
            <div @click="onBurgerActivate" class="header__content__burger" :class="burgerActive ? 'active' : ''">
                <div class="header__content__burger__lines"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped src="./scss/Header.scss"></style>