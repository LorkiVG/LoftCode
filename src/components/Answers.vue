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