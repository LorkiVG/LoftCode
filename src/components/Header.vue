<template>
    <div class="header">
        <img src="../assets/img/white.svg" class="logo__nocontent">
        <div class="header__content">
            <img src="../assets/img/white.svg" class="logo"> 
            <div class="header__links">
                <a href="#" class="header__link services">Services</a>
                <a href="#" class="header__link projects">Projects</a>
                <a href="#" class="header__link reviews">Reviews</a>
                <a href="#" class="header__link contacts">Contacts</a>
                <label class="switch">
                    <input type="checkbox" id="theme__checkbox">
                    <span class="slider round"></span>
                </label>
            </div>
                    
            <button class="header__button contacts">Propose project</button>
        </div>
        <div class="header__burger">
            <div class="header__burger__lines"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped src="./scss/Main.scss"></style>