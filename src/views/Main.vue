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

    </div>
    <div class="main">
            <div class="bg">
                <Carousel :wrapAround="true" ref="bgSlider">
                    <Slide v-for="slide in bgMaxIndex" :key="slide">
                        <img :src="`/src/assets/img/bg/${slide}.png`" alt="" class="bg__img">
                    </Slide>
                </Carousel>
            </div>
           
            <div class="bg__black"></div>
            <div class="main__content">
                <p class="main__text">Design. Development. Support</p>
            </div>
        </div>

        <div class="content">
        <div class="about">
            <div class="about__content">
                <p class="about__our__work__question">What do we do?</p>
                <p class="about__our__work__text">We have been designing, building and supporting applications since 2007.<br> We perform the complete product lifecycle <br> from planning and idea evaluation to realisation.</p>
                <button class="about__our__work__more__info">Read more</button>
            </div>
        </div>
        <div class="block services__to__scroll">
            <p class="block__p">01</p>
            <div class="block__content">
            <h1 class="block__title__big">Design</h1>
            <div class="block__block">
                <h1 class="block__title">Establishing the right visual connection with your customers and users by creating eye-catching and The most memorable designs in the visuals as well as meaningful user experiences.</h1>
                <div class="block__blocks">
                <div class="block__blocks__block">
                    <h1 class="block__blocks__title">Websites and Platforms</h1>
                    <p class="block__blocks__p">We develop projects of different complexity and scale. Whether it's a simple one-page website or a complex administration panel with numerous information panels, we make it visually pleasing, consistent and user-friendly.</p>
                </div>
                <div class="block__blocks__block">
                    <h1 class="block__blocks__title">Mobile apps</h1>
                    <p class="block__blocks__p">We don't just design beautiful interfaces, we build them according to each platform's guidelines to make using your app intuitive for users.</p>
                </div>
                <div class="block__blocks__block">
                    <h1 class="block__blocks__title">Identity and Branding</h1>
                    <p class="block__blocks__p">We identify your brand by designing your logo, corporate identity, instruction manuals, any layouts and merchandise.</p>
                </div>
                <div class="block__blocks__block">
                    <h1 class="block__blocks__title">Design Concept</h1>
                    <p class="block__blocks__p">We will develop a design concept for a website or mobile app to engage your audience and make your great product even more appealing.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div class="block">
            <p class="block__p">02</p>
            <div class="block__content">
            <h1 class="block__title__big">Development</h1>
            <div class="block__block">
                <h1 class="block__title">Realise your project with scalable architecture, state-of-the-art technology and excellent data security data.</h1>
                <div class="block__blocks">
                <div class="block__blocks__block">
                    <h1 class="block__blocks__title">Web services</h1>
                    <p class="block__blocks__p">Web services is one of our main specialities, having significant skills in this area we carry out development from simple layout to the most complex architectural solutions, which usually show their effectiveness with the result.</p>
                </div>
                <div class="block__blocks__block">
                    <h1 class="block__blocks__title">Native apps</h1>
                    <p class="block__blocks__p">We create mobile applications by different methods, we implement from single dependent mobile operating systems to cross-platform mobile applications with deployment to Markets.</p>
                </div>
                <div class="block__blocks__block">
                    <h1 class="block__blocks__title">Hybrid apps</h1>
                    <p class="block__blocks__p">We approach the development of WPA systems with a thorough method, realising Service Workers we create products that are user-friendly for all, applying usability to all kinds of gadgets.</p>
                </div>
                <div class="block__blocks__block">
                    <h1 class="block__blocks__title">Quality assurance</h1>
                    <p class="block__blocks__p">We conduct quality code reviews to identify bugs, fix non-functionalities and make your product work. Our experts working in this environment will help you with this.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div class="block">
            <p class="block__p">03</p>
            <div class="block__content">
                <h1 class="block__title__big">Support</h1>
                <div class="block__block">
                    <h1 class="block__title">Realise your project with scalable architecture, state-of-the-art technology and excellent data security.</h1>
                    <div class="block__blocks">
                        <div class="block__blocks__block">
                            <h1 class="block__blocks__title">Post-Release Support</h1>
                            <p class="block__blocks__p">We organise the process in such a way that we take into account the priorities of requests, technical dependencies, leave time to analyse the required changes, from Draft to Closure stage.</p>
                        </div>
                        <div class="block__blocks__block">
                            <h1 class="block__blocks__title">System administration</h1>
                            <p class="block__blocks__p">We provide stable and trouble-free functioning of IT infrastructure, monitoring, inventory, and are also responsible for the security of users.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="our__projects projects__to__scroll">
            <div class="our__projects__info">
                <p class="our__projects__title">Projects</p>
                <p class="our__projects__more__title">Some of our recent work.</p>
            </div>
        
            <div class="our__projects__duo">
                <div class="our__project__left">
                    <div class="our__project__content__div">
                            <div class="our__project__titles">
                                <p class="our__project__title"> API for SberPay online service</p>
                                <p class="our__project__category">Development, Support</p>
                            </div>
                            <div class="project__img">
                                <img src="../assets/img/Group 16.png" class="our__project__img">
                            </div>
                    </div>
                </div>
                <div class="our__project__right">
                    <div class="our__project__content__div">
                        <div class="our__project__titles">
                            <p class="our__project__title">Langing page LaslesVPN app</p>
                            <p class="our__project__category">Design, Development</p>
                        </div>
                
                        <div class="project__img">
                            <img src="../assets/img/Rectangle 328.png" class="our__project__img">
                        </div>
                    </div>
                </div>
            </div>
            <div class="our__project__down">
                <div class="our__project__down__content">
                    <div class="our__project__titles">
                    <h1 class="our__project__title">Landing page of a large cryptocurrency exchanger CRAPPO</h1>
                    <p class="our__project__category" style="margin-top:20px;">Design, Development, Support</p>
                    </div>
                </div>
                <img class="our__project__down__img" src="../assets/img/notebook.png" alt="">
            </div>
        </div>
    </div>
    <div class="answers reviews__to__scroll">
        <p class="answers__title">Reviews</p>
        <p class="answers__our__clients__title">What our clients are saying about us.</p>
        <div class="answers__our__clients">
            <Carousel :wrapAround="true" ref="answersSlider">
                <Slide v-for="(answer, index) in answers" :key="index">
                    <div class="answers__our__clients__answer">
                        <img v-for="indexStar in answer.stars" :key="indexStar" src="/src/assets/img/star.png" class="answers__our__clients__answer__star">
                        <p class="answers__our__clients__answer__text">{{ answer.text }}</p>
                        <p class="answers__our__clients__answer__name">{{ answer.clientName }}</p>
                        <p class="answers__our__clients__answer__position">{{ answer.clientCompany }}</p>
                    </div>
                </Slide>
            </Carousel>
        </div>
    </div>
    <div class="block__form contacts__to__scroll">
        <p class="block__p p__conctacts">Contacts</p>
        <form method="POST" id="form" class="block__form__form">
            <h1 class="block__form__form__h1">Send request</h1>
            <div class="block__form__form__content">
                <div class="block__form__form__content__block block__form__left">
                    <input type="text" name="name" id="name" class="block__form__form__input" autocomplete="off" placeholder="Your name">
                    <input type="text" name="number" id="number"class="block__form__form__input" autocomplete="off" placeholder="Your email or phone number">
                    <input type="text" name="services" id="services" class="block__form__form__input" autocomplete="off" placeholder="Type of service">
                    <input type="text" name="money" id="money" class="block__form__form__input" autocomplete="off" placeholder="Your budget">
                </div>
                <div class="block__form__form__content__block block__form__right">
                    <textarea name="text" id="text" class="block__form__form__textarea" autocomplete="off" placeholder="Your message"></textarea>
                    <button class="block__form__form__button" type="submit">Send request</button>
                </div>
            </div>
        </form>  
    </div>
    
</template>

<style lang="scss" scoped src="./scss/Main.scss"></style>