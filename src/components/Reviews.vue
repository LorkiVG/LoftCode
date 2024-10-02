<script setup lang="ts">
    import { ref, Ref } from 'vue';

    import { Carousel, Slide } from 'vue3-carousel'
    import { windowWidth } from '../ts/handlers/WindowWidthHandler';
    import 'vue3-carousel/dist/carousel.css'
    
    const reviewsSlider : any = ref();
    const reviews : Ref<Answer[]> = ref(
    [
        {
            stars: 5,
            text: 'The quality of work is what sets LoftCode apart from other companies. They are experts in their field and always give only helpful advice. I am incredibly glad I went to them.',
            clientName: 'Mark Twin',
            clientCompany: 'Product owner IkPay',
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
    <div class="reviews">
        <p v-animation data-animation-type="onScroll" data-animation-name="slideX" class="reviews__title">Reviews</p>
        <p v-animation data-animation-type="onScroll" data-animation-name="slideX" class="reviews__text">What our clients are saying about us.</p>
        <div class="reviews__content">
            <Carousel v-if="windowWidth > 1400" ref="reviewsSlider" :wrapAround="true" snapAlign="start" :items-to-show="2.5">
                <Slide v-for="(answer, index) in reviews" :key="index">
                    <div v-animation data-animation-type="onScroll" data-animation-name="scale" :data-animation-timeout="200*index" class="reviews__content__answer">
                        <div class="reviews__content__answer__stars">
                            <img v-for="indexStar in answer.stars" :key="indexStar" src="/src/assets/img/components/Reviews/star.png" class="reviews__content__answer__stars__star">
                        </div>
                        <p class="reviews__content__answer__text">{{ answer.text }}</p>
                        <p class="reviews__content__answer__name">{{ answer.clientName }}</p>
                        <p class="reviews__content__answer__company">{{ answer.clientCompany }}</p>
                    </div>
                </Slide>
            </Carousel>
            <Carousel v-else-if="windowWidth > 1050" ref="reviewsSlider" :wrapAround="true" snapAlign="start" :items-to-show="2">
                <Slide v-for="(answer, index) in reviews" :key="index">
                    <div v-animation data-animation-type="onScroll" data-animation-name="scale" :data-animation-timeout="200*index" class="reviews__content__answer">
                        <div class="reviews__content__answer__stars">
                            <img v-for="indexStar in answer.stars" :key="indexStar" src="/src/assets/img/components/Reviews/star.png" class="reviews__content__answer__stars__star">
                        </div>
                        <p class="reviews__content__answer__text">{{ answer.text }}</p>
                        <p class="reviews__content__answer__name">{{ answer.clientName }}</p>
                        <p class="reviews__content__answer__company">{{ answer.clientCompany }}</p>
                    </div>
                </Slide>
            </Carousel>
            <Carousel v-else-if="windowWidth > 900" ref="reviewsSlider" :wrapAround="true" snapAlign="start" :items-to-show="1.5">
                <Slide v-for="(answer, index) in reviews" :key="index">
                    <div v-animation data-animation-type="onScroll" data-animation-name="scale" :data-animation-timeout="200*index" class="reviews__content__answer">
                        <div class="reviews__content__answer__stars">
                            <img v-for="indexStar in answer.stars" :key="indexStar" src="/src/assets/img/components/Reviews/star.png" class="reviews__content__answer__stars__star">
                        </div>
                        <p class="reviews__content__answer__text">{{ answer.text }}</p>
                        <p class="reviews__content__answer__name">{{ answer.clientName }}</p>
                        <p class="reviews__content__answer__company">{{ answer.clientCompany }}</p>
                    </div>
                </Slide>
            </Carousel>
            <Carousel v-else ref="reviewsSlider" :wrapAround="true" snapAlign="start" :items-to-show="1">
                <Slide v-for="(answer, index) in reviews" :key="index">
                    <div v-animation data-animation-type="onScroll" data-animation-name="scale" :data-animation-timeout="200*index" class="reviews__content__answer">
                        <div class="reviews__content__answer__stars">
                            <img v-for="indexStar in answer.stars" :key="indexStar" src="/src/assets/img/components/Reviews/star.png" class="reviews__content__answer__stars__star">
                        </div>
                        <p class="reviews__content__answer__text">{{ answer.text }}</p>
                        <p class="reviews__content__answer__name">{{ answer.clientName }}</p>
                        <p class="reviews__content__answer__company">{{ answer.clientCompany }}</p>
                    </div>
                </Slide>
            </Carousel>
        </div>
    </div>
</template>
<style>
.carousel__slide
{
    align-items: start;
}
</style>
<style lang="scss" scoped src="./scss/Reviews.scss"></style>