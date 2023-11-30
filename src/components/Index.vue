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
        <!-- <form @submit.prevent="submit">
            <input type="file" name="image" id="image" @input="updateFile">

            <button class="btn btn-primary">Add Image</button>

        </form> -->
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
            <!-- <img src="/assets/images/real-estate-text-color-change.jpg" alt=""> -->
            <div id="uploader_section" class="uploader_section">
                <form class="w-full mx-auto p-4 lg:p-8 bg-brand_500 bg-opacity-20 rounded-3xl space-y-4">
                    <div>
                        <div class="file-pond-dashboard rounded-lg dashed-border relative cursor-pointer overflow-hidden"
                            id="browse-HP">
                            <div class="relative">
                                <div class="filepond--wrapper">
                                    <div class="filepond--root filepond--hopper" data-style-panel-aspect-ratio="2:1"
                                        data-style-button-remove-item-position="left"
                                        data-style-button-process-item-position="right"
                                        data-style-load-indicator-position="right"
                                        data-style-progress-indicator-position="right"
                                        data-style-button-remove-item-align="false" style="height: 446px;">
                                        <input class="filepond--browser filepond" type="file"
                                            id="filepond--browser-2otqr6ayx" name="filepond"
                                            aria-controls="filepond--assistant-2otqr6ayx" @change="submit"
                                            @input="updateFile">
                                        <div class="filepond--drop-label"
                                            style="transform: translate3d(0px, 0px, 0px); opacity: 1;">
                                            <label for="filepond--browser-2otqr6ayx" id="filepond--drop-label-2otqr6ayx"
                                                aria-hidden="true">
                                                <div class="flex flex-col items-center lg:max-w-[100%] !cursor-pointer  ">
                                                    <img src="/assets/images/uploader-icon.svg" width="50%" class="mb-4">

                                                    <span
                                                        class="  text-body-sm leading-5 tracking-wide text-brand_300 mb-4 ">
                                                        Supported
                                                        formats: JPG, JPEG, PNG, WEBP
                                                        Max size 50 MB
                                                    </span>
                                                    <div
                                                        class="border flex justify-center items-center !rounded-full bg-brand_500  text-gray_100 border-none outline-none py-2 pr-6 ps-4 mb-2">
                                                        <img src="/assets/images/upload-icon.svg">
                                                        <span>Upload</span>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <div class="filepond--list-scroller" style="transform: translate3d(0px, 0px, 0px);">
                                            <ul class="filepond--list" role="list"></ul>
                                        </div>
                                        <div class="filepond--panel filepond--panel-root" data-scalable="false">
                                            <div class="filepond--panel-top filepond--panel-root"></div>
                                            <div class="filepond--panel-center filepond--panel-root"
                                                style="transform: translate3d(0px, 260px, 0px) scale3d(1, 0, 1);"></div>
                                            <div class="filepond--panel-bottom filepond--panel-root"
                                                style="transform: translate3d(0px, 260px, 0px);"></div>
                                        </div>
                                        <div class="filepond--drip"></div><span class="filepond--assistant"
                                            id="filepond--assistant-2otqr6ayx" role="status" aria-live="polite"
                                            aria-relevant="additions"></span>
                                        <fieldset class="filepond--data"></fieldset>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-between lg:space-x-4 space-x-2 overflow-x-auto pb-1">
                        <div><a class="flex flex-col rounded-2xl relative text-center px-4 lg:py-4 py-2 cursor-pointer transition-all hover:bg-opacity-100 bg-[#0000001A] min-w-[165px] opacity-40 pointer-events-auto !cursor-default"
                                id="HP-IDservice-selection">
                                <div class="mb-2"><img
                                        src="https://revi.rvstatic.com/aihomedesign/header-icons/inactive-ID.svg"
                                        loading="lazy" width="24" class="mx-auto"></div>
                                <p class="text-body-md text-brand_300">Interior Design</p>
                            </a></div>
                        <div>
                            <a class="flex flex-col rounded-2xl relative text-center px-4 lg:py-4 py-2 cursor-pointer transition-all hover:bg-opacity-100 bg-[#0000001A] min-w-[165px] opacity-40 pointer-events-auto !cursor-default"
                                id="HP-VSservice-selection">
                                <div class="mb-2"><img
                                        src="https://revi.rvstatic.com/aihomedesign/header-icons/inactive-VS.svg"
                                        loading="lazy" width="24" class="mx-auto"></div>
                                <p class="text-body-md text-brand_300">Virtual Staging</p>
                            </a>
                        </div>
                        <div><a class="flex flex-col rounded-2xl relative text-center px-4 lg:py-4 py-2 cursor-pointer transition-all hover:bg-opacity-100 bg-[#0000001A] min-w-[165px] opacity-40 pointer-events-auto !cursor-default"
                                id="HP-IEservice-selection">
                                <div class="mb-2"><img
                                        src="https://revi.rvstatic.com/aihomedesign/header-icons/inactive-IE.svg"
                                        loading="lazy" width="24" class="mx-auto"></div>
                                <p class="text-body-md text-brand_300">Image Enhancement</p>
                            </a></div>
                        <div><a class="flex flex-col rounded-2xl relative text-center px-4 lg:py-4 py-2 cursor-pointer transition-all hover:bg-opacity-100 bg-[#0000001A] min-w-[165px] opacity-40 pointer-events-auto !cursor-default"
                                id="HP-DDservice-selection">
                                <div class="mb-2"><img
                                        src="https://revi.rvstatic.com/aihomedesign/header-icons/inactive-D2D.svg"
                                        loading="lazy" width="24" class="mx-auto"></div>
                                <p class="text-body-md text-brand_300">Day to Dusk</p>
                            </a></div>
                        <div><a class="flex flex-col rounded-2xl relative text-center px-4 lg:py-4 py-2 cursor-pointer transition-all hover:bg-opacity-100 bg-[#0000001A] min-w-[165px] opacity-40 pointer-events-auto !cursor-default"
                                id="HP-IRservice-selection">
                                <div class="mb-2"><img
                                        src="https://revi.rvstatic.com/aihomedesign/header-icons/inactive-IR.svg"
                                        loading="lazy" width="24" class="mx-auto"></div>
                                <p class="text-body-md text-brand_300">Item Removal</p>
                            </a></div>
                    </div>
                </form>
            </div>
        </div>

        <!-- <div class="container">
            <div>
                <file-pond name="test" ref="pond" label-idle="Drop files here..." v-bind:allow-multiple="false"
                    accepted-file-types="image/jpeg, image/png" v-bind:files="myFiles" v-bind:server="MyServer"
                    @addfile="onAddFile" />
            </div>
            <div class="row d-flex">
                <div v-for="(image, index) in images" :key="index" class="col-md-3">
                    <div class="custom-control custom-checkbox image-checkbox">
                        <input type="radio" @change="selectedImage = image.id" class="form-check-input"
                            style="position: absolute; z-index: 9999;background-color: #198754;
                                                                                                        border-color: #198754;" name="selectImg">
                        <label class="custom-control-label" for="ck1a">
                            <img :src="image.src" alt="#" class="img-fluid" style="width: 200px;position: relative;">
                        </label>
                    </div>
                </div>
            </div>
            <div v-if="images.length > 0">
                <button class="btn btn-sm btn-success" @click="generate" style="font-size: 15px">Generate AI</button>
            </div>

            SINGLE SELECTION
            <vue-select-image :dataImages="images" @onselectimage="onSelectImage">
            </vue-select-image>
        </div> -->

    </section>
    <!-- <file-pond name="test" ref="pond" label-idle="Drop files here..." v-bind:allow-multiple="true"
        accepted-file-types="image/jpeg, image/png" v-bind:files="myFiles" v-bind:server="MyServer" @addfile="onAddFile" /> -->

    <ImageSlider/>

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
                    <h2><img src="/assets/images/stars.png" alt="">
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
import { ref } from 'vue';
import FormData from 'form-data';
import ImageSlider from './ImageSlider.vue'

const fileInput = ref(null);
const selectedImage = ref();

function generate() {
    console.log(selectedImage.value)
}
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

<!-- <script>
import axios from 'axios';
// Import Vue FilePond
import vueFilePond from "vue-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import FilePond plugins
// Please note that you need to install these plugins separately

// Import image preview plugin styles
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

// Create component
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
);

export default {
  name: "app",
  data: function () {
    return { 
        apiEndpoint: '',
        myFiles: [] 
    };
  },
  methods: {
    handleFilePondInit: function () {
      console.log("FilePond has initialized");
      this.submit()
      // FilePond instance methods are available on `this.$refs.pond`
    },
    async submit() {
        const formData = new FormData();
        const fileInput = this.$refs.pond.getFiles(); // Get the first file

        console.log(fileInput);

        formData.append('image', fileInput);
        formData.append('serviceName', 'VS');

        if (fileInput && fileInput.file) {
            const formData = new FormData();
            formData.append('image', fileInput.file);
            formData.append('serviceName', 'VS');

            try {
            this.apiEndpoint = 'https://api.aihomedesign.com/api/public/v1/ai/image/upload?image'

            const response = await axios.post('https://api.aihomedesign.com/api/public/v1/ai/image/upload?image', formData);
            console.log(response);
            } catch (error) {
            console.error(error);
            }
        } else {
            console.error('No file selected');
        }

    },
  
  },
  components: {
    FilePond,
  },
};
</script> -->

<script>
// Import Vue FilePond
import vueFilePond from "vue-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import FilePond plugins
// Please note that you need to install these plugins separately

// Import image preview plugin styles
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

// Create component
const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview
);

export default {
    name: "app",
    data: function () {
        return {
            myFiles: [],
            images: [],
            MyServer: {
                url: 'https://api.aihomedesign.com/api/public',
                timeout: 7000,
                process: {
                    url: '/v1/ai/image/upload',
                    method: 'POST',
                    withCredentials: false,
                    onload: (response) => {
                        const obj = JSON.parse(response)
                        this.images.push(obj)

                        console.log()
                    },
                    onerror: (response) => console.log(response),
                    ondata: (formData) => {
                        formData.append('image', this.$refs.pond.getFiles()[0].file);
                        formData.append('serviceName', 'VS');
                        return formData;
                    },
                },
            }
        };
    },
    components: {
        FilePond,
    },
};


</script>