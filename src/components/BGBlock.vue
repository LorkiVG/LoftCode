<script setup lang="ts">
    import { ref } from 'vue';

    import { Carousel, Slide } from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'

    const bgSlider : any = ref();
    let bgMaxIndex : number = 3;
    setInterval(() => 
    {
        bgSlider.value.next();
    }, 3000);
</script>
<template>
    <div class="bgblock">
        <div class="bgblock__slider">
            <Carousel :wrapAround="true" ref="bgSlider">
                <Slide v-for="slide in bgMaxIndex" :key="slide">
                    <img :src="`/src/assets/img/bg/${slide}.png`" alt="" class="bg__img">
                </Slide>
            </Carousel>
        </div>
        <div class="bgblock__content">
            <p class="bgblock__content__text">Design. Development. Support</p>
        </div>
    </div>
</template>