<template>
    <section class="banner-outer">
        <div class="container">
            <div class="banner-inner">
                <h1>Virtual Stagging <span>AI With One Click</span><br>
                   </h1>
                
            </div>
        </div>
        <div class="container mb-3">
            <div class="banner-inner">
                <h1>Transform your <span>Real Estate Business</span><br>
                    with AI-Powered Design</h1>
                <p>Sell Faster and Attract More Clients with Scop3D</p>
                <div class="banner-img">
                    <img src="/assets/images/headvid.gif" alt="Close more real estate deals using artificial intelligence">
                </div>
                <a class="upgd-go mt-5" href="#">
                    <img class="strlight" src="/assets/images/light.svg" loading="lazy"
                        alt="button light version upgrade homedesigns">
                    Start Now
                </a>
            </div>
        </div>
    </section>
    <section>
        <!-- <a class="upgd-go mt-5" href="#">
            <img class="strlight" src="/assets/images/light.svg" loading="lazy"
                alt="button light version upgrade homedesigns">
            Start Now
        </a> -->
        <form @submit.prevent="submit">
            <input type="file" name="image" id="image" @input="updateFile">
            
            <button class="btn btn-primary" >Add Image</button>
            
        </form>
        <div v-for="post in posts" :key="post.id">
            <h5>{{ post.title }}</h5>
          </div>
    </section>
    <section id="about-us" class="competitive-outer">
        <div class="container">
            <div class="competitive-inner reverse-con">
                <div class="competitive-inner-left">
                    <div class="video-inner">
                        <img src="/assets/images/banner-img-estate1.png" alt="">
                    </div>
                </div>
                <div class="competitive-inner-right">
                    <h2 class="title-con1">Stand out in the competitive real estate market with our
                        <span>AI-powered</span>
                        design tool
                    </h2>
                    <p>Enhance property photos, visualize home transformations, and attract more potential buyers.
                        Show them
                        not just what is, but what could be.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section id="our-work" class="potential-outer">
        <div class="container">
            <h2 class="title-outer" style="color:#fff;">Show the Potential of Every Property</h2>
            <h3 class="sub-title">From Outdated to Outstanding with a Click</h3>
            <p style="color:#fff; opacity: 0.7;">Don't let outdated interiors put off potential buyers. With Scop3D,
                transform any space into a modern, appealing<br> haven. Show buyers the true potential of every property,
                enhancing its value and appeal.</p>
            <img src="/assets/images/real-estate-text-color-change.jpg" alt="">
        </div>
    </section>
    <section class="streamline-outer">
        <div class="container">
            <div class="competitive-inner">
                <div class="competitive-inner-left">
                    <div class="video-inner video-inner2">
                        <img src="/assets/images/banner-img-estate3.png" alt="">
                    </div>
                </div>
                <div class="competitive-inner-right">
                    <h2 class="title-outer">Streamline Your <span>Real Estate</span> Business</h2>
                    <h3 class="sub-title">Save Time and Resources with AI </h3>
                    <p>With Scop3D, you won't need to spend time and resources on physical staging or extensive
                        remodeling. Generate stunning interiors quickly and focus on what you do best - closing deals.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="estate-outer">
        <div class="container">
            <h2 class="title-outer">Join the Future of <span>Real Estate</span> Marketing</h2>
            <h3 class="sub-title">Elevate Your Listings with Scop3D</h3>
            <p>Join the growing number of real estate professionals leveraging the power of AI to sell properties faster and
                at higher prices. Try Scop3D today and see the difference it can make to your business. </p>
            <ul class="designs">
                <li>
                    <div class="design-icon"> <img src="/assets/images/design-icon01.png" alt=""> </div>
                    <h2>502998+ <br />
                        <span>Designs </span>
                    </h2>
                    <p>Our members are generating thousands of ideas every day with Artificial Intelligence. </p>
                </li>
                <li>
                    <div class="design-icon"> <img src="/assets/images/design-icon02.png" alt=""> </div>
                    <h2>6807+ <br />
                        <span>PRO Members </span>
                    </h2>
                    <p>Thousands of private users and companies are saving money & time. </p>
                </li>
                <li>
                    <div class="design-icon"> <img src="/assets/images/design-icon03.png" alt=""> </div>
                    <h2>502998+ <br />
                        <span>Styles </span>
                    </h2>
                    <p>New styles added every month. You can request any custom design style. </p>
                </li>
                <li>
                    <div class="design-icon"> <img src="/assets/images/design-icon04.png" alt=""> </div>
                    <h2><img src="/assets/images/stars.png" alt=""> <br />
                        <span>Star Rating </span>
                    </h2>
                    <p>Scop3D AI has a 5 star rating from our members that use it everyday. </p>
                </li>
            </ul>
        </div>
    </section>
    <section id="join-us" class="agent-outer">
        <div class="container">
            <h2 class="title-outer" style="color:#fff;">Hear from Successful Real Estate Agents</h2>
            <h3 class="sub-title">Success Stories from Our Users</h3>
            <p style="color:#fff; opacity: 0.7;">Don't just take our word for it. Hear from real estate professionals who
                have used Scop3D to transform their<br> businesses, attract more clients, and sell properties
                faster.</p>
            <div class="review-slider">
                <Carousel :wrap-around="true" v-bind="settings" :wrapAround="true" :autoplay="3000" :breakpoints="breakpoints">
                    <Slide v-for="slide in carouselSlides" :key="slide" class="custom2">
                        <div class="item">
                            <div class="review-inner review-inner1">
                                <div class="author-content">
                                    <p>"Scop3D has completely revolutionized the way I present properties. It allows me
                                        to visualize the potential of each space and present it to my clients. My listings have
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
    <section class="competitive-outer">
        <div class="container">
            <div class="competitive-inner reverse-con">
                <div class="competitive-inner-left">
                    <!-- <video loop muted autoplay playsinline width="100%">
                        <source src="/assets/images/headvid.webm" type="video/webm">
                        <source src="/assets/images/headvid.mp4" type="video/mp4">
                    </video> -->
                    <img src="/assets/images/real-estate-ai-before-after.png" alt="">
                </div>
                <div class="competitive-inner-right">
                    <h2 class="title-outer">Transform <span>Real Estate Listings</span> with
                        AI-Powered Design</h2>
                    <h3 class="sub-title">Sell Faster and Attract More Clients with Scop3D</h3>
                    <p>Stand out in the competitive real estate market with our AI-powered design tool. Enhance
                        property
                        photos, visualize home transformations, and attract more potential buyers. Show them not
                        just what
                        is, but what could be.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import axios from 'axios'
import {reactive,ref} from 'vue';
import FormData from 'form-data';

const fileInput = ref(null);

const updateFile = (event) => {
  fileInput.value = event.target.files[0];
};

const submit = async () => {
  const formData = new FormData();
  formData.append('image', fileInput.value);
  formData.append('serviceName', 'VS');

  try {
    const response = await axios.post('https://api.aihomedesign.com/api/public/v1/ai/image/upload?image', formData);
    console.log(JSON.stringify(response.data));
  } catch (error) {
    console.error(error);
  }
};


// const handleFileSelect = (event) => {
//   const selectedFile = event.target.files[0];
//   console.log("Selected File:", selectedFile);

// };


// // Fetch data using async function
// const fetchData = async () => {
//   try {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//     posts.value = response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };
// onMounted(() => {
//   fetchData();
// });
const carouselSlides = ['Scop3D has completely revolutionized the way I present properties. It allows me\
                            to visualize the potential of each space and present it to my clients. My listings have\
                            never looked better!',
                            'Scop3D has completely revolutionized the way I present properties. It allows me\
                            to visualize the potential of each space and present it to my clients. My listings have\
                            never looked better!',
                            'Scop3D has completely revolutionized the way I present properties. It allows me\
                            to visualize the potential of each space and present it to my clients. My listings have\
                            never looked better!'];

const settings  = {
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



