<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <header>
        <div class="hmd-outer">
            <div class="container">
                <div class="hmd-inner">
                    <div class="hmd-logo">
                        <RouterLink to="/"><img src="/assets/images/Bryan_logo.png" alt="Scop3D AI logo"
                                style="width: 70%;">
                        </RouterLink>
                    </div>
                    <div class="hmd-navflx">
                        <!-- <div class="hmd-nav">
                    <ul>
                        <li class="hmd-navlist"><a href="#about-us">About Us</a></li>
                        <li class="hmd-navlist"><a href="#our-work">Our Work</a></li>
                        <li class="hmd-navlist"><a href="#join-us">Join Us</a></li>
                        <li class="hmd-navlist"><a href="#footer">Contact us</a></li>
                    </ul>
                </div> -->
                        <div class="upgrade-subtn">
                            <a class="upgd-go" href="#">
                                <img class="strlight" src="/assets/images/light.svg" loading="lazy"
                                    alt="button light version upgrade homedesigns">
                                Start Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>