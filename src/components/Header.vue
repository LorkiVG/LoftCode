<template>
    <div class="header">
        <div class="header__content">
            <img src="/src/assets/img/components/Header/logo/white.svg" class="header__content__logo">
            <span></span>
            <nav class="header__content__nav">
                <a href="#" class="header__content__nav__link">Services</a>
                <a href="#" class="header__content__nav__link">Projects</a>
                <a href="#" class="header__content__nav__link">Reviews</a>
                <a href="#" class="header__content__nav__link">Contacts</a>
            </nav>
            <label class="header__content__switch">
                <input type="checkbox" id="theme__switcher" class="header__content__switch__checkbox">
                <span class="header__content__switch__round"></span>
             </label>
             <span></span>
            <button class="header__content__button">Propose project</button>
            <div class="header__content__burger">
                <div class="header__content__burger__lines"></div>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped src="./scss/Header.scss"></style>