<template>
    <div class="about">
        <div class="about__content">
            <p v-animation data-animation-type="onScroll" data-animation-name="slideX" class="about__content__title">What do we do?</p>
            <p v-animation data-animation-timeout="300" data-animation-type="onScroll" data-animation-name="slideX" class="about__content__text">We have been designing, building and supporting applications since 2007.<br> We perform the complete product lifecycle <br> from planning and idea evaluation to realisation.</p>
            <button v-animation data-animation-timeout="600" data-animation-type="onScroll" data-animation-name="scale" class="about__content__button">Read more</button>
        </div>
    </div>  
</template>

<style lang="scss" scoped src="./scss/About.scss"></style>