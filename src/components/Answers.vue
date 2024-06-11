<script setup lang="ts">
    import { ref, Ref } from 'vue';

    import { Carousel, Navigation, Slide } from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'
    
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
    <div class="answers">
        <p class="answers__title">Reviews</p>
        <p class="answers__clients__title">What our clients are saying about us.</p>
        <div class="answers__clients">
            <Carousel :wrapAround="true" ref="answersSlider">
                <Slide v-for="(answer, index) in answers" :key="index">
                    <div class="answers__clients__answer">
                        <img v-for="indexStar in answer.stars" :key="indexStar" src="/src/assets/img/star.png" class="answers__our__clients__answer__star">
                        <p class="answers__clients__answer__text">{{ answer.text }}</p>
                        <p class="answers__clients__answer__name">{{ answer.clientName }}</p>
                        <p class="answers__clients__answer__position">{{ answer.clientCompany }}</p>
                    </div>
                </Slide>
            </Carousel>
        </div>
    </div>
</template>