<template>
    <div class="projects">
        <div class="projects__info">
            <p v-animation data-animation-type="onScroll" data-animation-name="slideX" class="projects__info__title">Projects</p>
            <p v-animation data-animation-type="onScroll" data-animation-name="slideX" class="projects__info__text">Some of our recent works</p>
        </div>
        <div class="projects__content">
            <div class="projects__content__projects top">
                <div v-animation data-animation-type="onScroll" data-animation-name="scale" class="projects__content__projects__project left">
                    <div class="projects__content__projects__project__info">
                        <h1 v-animation data-animation-type="onScroll" data-animation-name="slideY" data-animation-timeout="700" class="projects__content__projects__project__info__title"> API for IkPay online service</h1>
                        <p v-animation data-animation-type="onScroll" data-animation-name="slideY" data-animation-timeout="900" class="projects__content__projects__project__info__text">Development, Support</p>
                    </div>
                    <img src="/src/assets/img/components/Projects/ikpay.png" class="projects__content__projects__project__img">
                </div>
                <div v-animation data-animation-type="onScroll" data-animation-name="scale" class="projects__content__projects__project right">
                    <div class="projects__content__projects__project__info">
                        <h1 v-animation data-animation-type="onScroll" data-animation-name="slideY" data-animation-timeout="700" class="projects__content__projects__project__info__title">Langing page LaslesVPN app</h1>
                        <p v-animation data-animation-type="onScroll" data-animation-name="slideY" data-animation-timeout="900" class="projects__content__projects__project__info__text">Design, Development</p>
                    </div>
                    <img src="/src/assets/img/components/Projects/laslesvpn.png" class="projects__content__projects__project__img">
                </div>
            </div>
            <div class="projects__content__projects down">
                <div v-animation data-animation-type="onScroll" data-animation-name="scale" class="projects__content__projects__project">
                    <div class="projects__content__projects__project__info">
                        <h1 v-animation data-animation-type="onScroll" data-animation-name="slideY" data-animation-timeout="700" class="projects__content__projects__project__info__title">Landing page of a large cryptocurrency exchanger CRAPPO</h1>
                        <p v-animation data-animation-type="onScroll" data-animation-name="slideY" data-animation-timeout="900" class="projects__content__projects__project__info__text">Design, Development, Support</p>
                    </div>
                    <img class="projects__content__projects__project__img" src="/src/assets/img/components/Projects/crappo.png" alt="">
                </div>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped src="./scss/Projects.scss"></style>