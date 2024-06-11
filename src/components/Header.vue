<template>
    <div class="header">
        <img src="/src/assets/img/components/Header/logo/white.svg" class="header__logo">
        <div class="header__content">
            <img src="/src/assets/img/components/Header/logo/white.svg" class="header__content__logo"> 
            <div class="header__content__links">
                <a href="#" class="header__content__links__link">Services</a>
                <a href="#" class="header__content__links__link">Projects</a>
                <a href="#" class="header__content__links__link">Reviews</a>
                <a href="#" class="header__content__links__link">Contacts</a>
            </div>
            <label class="header__content__switch">
                <input type="checkbox" id="theme__switcher" class="header__content__switch__checkbox">
                <span class="header__content__switch__round"></span>
            </label>
            <button class="header__content__button">Propose project</button>
        </div>
        <div class="header__burger">
            <div class="header__burger__lines"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped src="./scss/Header.scss"></style>