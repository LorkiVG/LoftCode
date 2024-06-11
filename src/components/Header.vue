<template>
    <div class="header">
        <img src="../assets/img/white.svg" class="logo__nocontent">
        <div class="header__content">
            <img src="../assets/img/white.svg" class="logo"> 
            <div class="header__content__links">
                <a href="#" class="header__content__links__link">Services</a>
                <a href="#" class="header__content__links__link">Projects</a>
                <a href="#" class="header__content__links__link">Reviews</a>
                <a href="#" class="header__content__links__link">Contacts</a>
                <label class="header__content__switch">
                    <input type="checkbox" id="theme__checkbox" class="header__content__switch__checkbox">
                    <span class="header__content__switch__round"></span>
                </label>
            </div>
                    
            <button class="header__content__button">Propose project</button>
        </div>
        <div class="header__burger">
            <div class="header__burger__lines"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped src="./scss/Main.scss"></style>