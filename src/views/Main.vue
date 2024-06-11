<script setup lang="ts">
    import { ref, Ref } from 'vue';

    import { Carousel, Navigation, Slide } from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'

    const bgSlider : any = ref();
    let bgMaxIndex : number = 3;
    setInterval(() => 
    {
        bgSlider.value.next();
    }, 3000);

    const answersSlider : any = ref();
    const answers : Ref<Answer[]> = ref(
    [
        {
            stars: 5,
            text: 'The quality of work is what sets LoftCode apart from other companies. They are experts in their field and always give only helpful advice. I am incredibly glad I went to them.',
            clientName: 'Mark Twin',
            clientCompany: 'Product owner SberPay',
        },
        {
            stars: 4,
            text: 'The guys suggested improvements for my app that I really appreciated - instead of doing exactly what I asked for, it resulted in a better product.',
            clientName: 'Ilya Kuvshinov',
            clientCompany: 'CRAPPO founder',
        },
        {
            stars: 5,
            text: 'I would like to leave my feedback on the work of this company. I ordered from them a mobile application from scratch, the manager promptly contacted me, we discussed the whole project and my wishes and surprisingly they made it even faster than the deadline, I am satisfied.',
            clientName: 'Oksana Nikitievna',
            clientCompany: 'Our Client',
        },
        {
            stars: 5,
            text: 'I contacted the company with help over the creation of a personal blog about travelling around the world, the guys helped, made the design, coordinated everything with me and even ran quality advertising that we agreed on, I am satisfied.',
            clientName: 'Pavel Dmitriev',
            clientCompany: 'Our Client',
        }
    ]);
</script>
<template>
    
    <div class="main">
        <div class="blockmain">
            <div class="bg">
                <Carousel :wrapAround="true" ref="bgSlider">
                    <Slide v-for="slide in bgMaxIndex" :key="slide">
                        <img :src="`/src/assets/img/bg/${slide}.png`" alt="" class="bg__img">
                    </Slide>
                </Carousel>
            </div>
            <div class="main__content">
                <p class="main__text">Design. Development. Support</p>
            </div>
        </div>
    </div>
        

    <div class="content">
        

        
    </div>
</template>

<style lang="scss" scoped src="./scss/Main.scss"></style>