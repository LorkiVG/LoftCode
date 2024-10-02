<script setup lang="ts">
    import { ref } from 'vue';

    import { Carousel, Slide } from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'

    const bgSlider : any = ref();
    let bgMaxIndex : number = 3;
    setInterval(() => 
    {
        if(bgSlider.value)
        {
            bgSlider.value.next();
        }
    }, 3000);
</script>
<template>
    <div class="bgblock">
        <div class="bgblock__slider">
            <Carousel :wrapAround="true" ref="bgSlider">
                <Slide v-for="slide in bgMaxIndex" :key="slide">
                    <img :src="`/src/assets/img/components/BGBlock/${slide}.png`" alt="" class="bgblock__slider__img">
                </Slide>
            </Carousel>
        </div>
        <div class="bgblock__content">
            <h1 v-animation data-animation-type="onStart" data-animation-name="scale" class="bgblock__content__title">Design Development Support</h1>
        </div>
    </div>
</template>

<style lang="scss" scoped src="./scss/BGBlock.scss"></style>