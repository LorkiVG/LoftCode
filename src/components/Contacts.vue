<template>
    <div class="contacts">
        <p class="contacts__title">Contacts</p>
        <form method="POST" id="form" class="contacts__form">
            <h1 class="contacts__form__title">Send your project idea</h1>
            <div class="contacts__form__content">
                <div class="contacts__form__content__block">
                    <input type="text" name="name" id="name" class="contacts__form__content__block__input" autocomplete="off" placeholder="Your name">
                    <input type="text" name="number" id="number"class="contacts__form__content__block__input" autocomplete="off" placeholder="Your email or phone number">
                    <input type="text" name="services" id="services" class="contacts__form__content__block__input" autocomplete="off" placeholder="Type of service">
                    <input type="text" name="money" id="money" class="contacts__form__content__block__input" autocomplete="off" placeholder="Your budget">
                </div>
                <div class="contacts__form__content__block">
                    <textarea name="text" id="text" class="contacts__form__content__block__textarea" autocomplete="off" placeholder="Your message"></textarea>
                    <button class="contacts__form__content__block__button" type="submit">Send request</button>
                </div>
            </div>
        </form>  
    </div>
</template>

<style lang="scss" scoped src="./scss/Contacts.scss"></style>