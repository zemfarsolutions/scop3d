<template>
    <section id="join-us" class="agent-outer">
        <div class="container">
            <h2 class="title-outer" style="color:#fff;">Hear from Successful Real Estate Agents</h2>
            <h3 class="sub-title">Success Stories from Our Users</h3>
            <p style="color:#fff; opacity: 0.7;">Don't just take our word for it. Hear from real estate professionals who
                have used Scop3D to transform their<br> businesses, attract more clients, and sell properties
                faster.</p>
            <div class="review-slider">
                <Carousel :wrap-around="true" v-bind="settings" :wrapAround="true" :autoplay="3000"
                    :breakpoints="breakpoints">
                    <Slide v-for="slide in carouselSlides" :key="slide" class="custom2">
                        <div class="item">
                            <div class="review-inner review-inner1">
                                <div class="author-content">
                                    <p>"Scop3D has completely revolutionized the way I present properties. It allows me
                                        to visualize the potential of each space and present it to my clients. My listings
                                        have
                                        never looked better!" </p>
                                </div>
                                <div class="author-name">
                                    <h2>James M</h2>
                                    <p>Realtor, New York, USA </p>
                                </div>
                            </div>
                        </div>
                    </Slide>

                </Carousel>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const carouselSlides = ['Scop3D has completely revolutionized the way I present properties. It allows me\
                            to visualize the potential of each space and present it to my clients. My listings have\
                            never looked better!',
    'Scop3D has completely revolutionized the way I present properties. It allows me\
                            to visualize the potential of each space and present it to my clients. My listings have\
                            never looked better!',
    'Scop3D has completely revolutionized the way I present properties. It allows me\
                            to visualize the potential of each space and present it to my clients. My listings have\
                            never looked better!'];

const settings = {
    itemsToShow: 3,
    snapAlign: 'center',
}

const breakpoints = {
    // 700px and up
    0: {
        itemsToShow: 1,
        snapAlign: 'center',
        nav: false
    },
    //
    600: {
        itemsToShow: 2,
        snapAlign: 'start',
        nav: false
    },
    // 1024 and up
    1022: {
        itemsToShow: 3,
        snapAlign: 'start',
        nav: false
    }
}
</script>