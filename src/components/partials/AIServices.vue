<template>
    <!-- 
    <section id="our-work" class="potential-outer">
        <div class="container">
            <h2 class="title-outer" style="color:#fff;">Show the Potential of Every Property</h2>
            <h3 class="sub-title">From Outdated to Outstanding with a Click</h3>
            <p style="color:#fff; opacity: 0.7;">Don't let outdated interiors put off potential buyers. With Scop3D,
                transform any space into a modern, appealing<br> haven. Show buyers the true potential of every property,
                enhancing its value and appeal.</p>
            <img src="/assets/images/real-estate-text-color-change.jpg" alt="">
            <div id="uploader_section" class="uploader_section">
                <form class="w-80 mx-auto p-4 lg:p-8 uploader_section">
                    <div>
                        <file-pond name="test" ref="pond" label-idle=" Drop files here..."
                            accepted-file-types="image/jpeg, image/png" v-bind:files="myFiles" v-bind:server="MyServer"
                            @addfile="onAddFile" maxFiles="1" />
                    </div>
                    <div class="container" v-if="selectedImage !== ''">

                        <div class="radio-tile-group">
                            <div class="input-container" v-for="(type, index) in types" :key="index">
                                <input id="walk" class="radio-button" type="radio" v-model="room_type" :value="type.name"
                                    name="radio">
                                <div class="radio-tile">
                                    <div class="icon walk-icon">
                                        <img src="/public/assets/images/output-onlinepngtools.png" alt="" srcset="">
                                    </div>
                                    <label for="walk" class="radio-tile-label">{{ type.name }}</label>
                                </div>
                            </div>
                        </div>

                        <div class="text-white mt-3">
                            <h6>Select Room Style</h6>
                        </div>

                        <div class="radio-tile-group">
                            <div v-for="(style, index) in styles" :key="index">
                                <input type="radio" v-model="room_style" :value="style.name" name="room_style"
                                    class="btn-check" :id="`btn-check` + index" autocomplete="off">
                                <label class="btn btn-outline-light fw-bold mx-1 btn-sm f-2 room_style"
                                    :for="`btn-check` + index">{{ style.name }}</label>
                            </div>
                        </div>
                    </div>

                    <div class="mt-2" v-if="show">

                        <div v-if="countDown > 0" class="d-flex justify-content-center">
                            <p>Please Wait... {{ countDown }}</p>
                        </div>

                        <Suspense>
                            <template #default>
                                <ViewImages />
                            </template>
                            <template #fallback>
                                <div class="skeleton-loader">
                                    <div class="wrapper">
                                        <div class="card">
                                            <div class="card__img skeleton"></div>
                                        </div>

                                        <div class="card">
                                            <div class="card__img skeleton"></div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </Suspense>
                    </div>
                </form>
            </div>
        </div>
    </section> -->



    <section id="our-work" class="potential-outer">
        <div class="container">
            <h2 class="title-outer" style="color:#fff;">Show the Potential of Every Property</h2>
            <h3 class="sub-title">From Outdated to Outstanding with a Click</h3>
            <p style="color:#fff; opacity: 0.7;">Don't let outdated interiors put off potential buyers. With Scop3D,
                transform any space into a modern, appealing<br> haven. Show buyers the true potential of every property,
                enhancing its value and appeal.</p>
            <div id="uploader_section" class="uploader_section bg_cube">
                <div class="nw-forminner">
                    <div class="container">
                        <div class="row">
                            <div class="nwfrm-tabs">
                                <ul class="nav nav-pills" id="ai-category-pills" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link nwai-tab active" id="pills-interior-tab"
                                            data-bs-toggle="pill" data-bs-target="#pills-interior" type="button" role="tab"
                                            aria-controls="pills-interior" aria-selected="true"
                                            onclick="if (!window.__cfRLUnblockHandlers) return false; loadRenders(0)">
                                            <img class="ai-icon" src="/assets/images/interior-icon.svg" alt=""
                                                loading="lazy">
                                            <span class="nwtb-title">Virtual Staging</span>
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link nwai-tab" id="pills-exterior-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-exterior" type="button" role="tab"
                                            aria-controls="pills-exterior" aria-selected="false"
                                            onclick="if (!window.__cfRLUnblockHandlers) return false; loadRenders(1)">
                                            <img class="ai-icon" src="/assets/images/exterior-icon.svg" alt=""
                                                loading="lazy">
                                            <span class="nwtb-title">Interior Design</span>
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link nwai-tab" id="pills-garden-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-garden" type="button" role="tab"
                                            aria-controls="pills-garden" aria-selected="false"
                                            onclick="if (!window.__cfRLUnblockHandlers) return false; loadRenders(2)">
                                            <img class="ai-icon" src="/assets/images/interior-icon.svg" alt=""
                                                loading="lazy">
                                            <span class="nwtb-title">Day to Dusk</span>
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link nwai-tab" id="pills-garden-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-garden" type="button" role="tab"
                                            aria-controls="pills-garden" aria-selected="false"
                                            onclick="if (!window.__cfRLUnblockHandlers) return false; loadRenders(3)">
                                            <img class="ai-icon" src="/assets/images/garden-icon.svg" alt="" loading="lazy">
                                            <span class="nwtb-title">Image Enhancement</span>
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link nwai-tab" id="pills-garden-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-garden" type="button" role="tab"
                                            aria-controls="pills-garden" aria-selected="false"
                                            onclick="if (!window.__cfRLUnblockHandlers) return false; loadRenders(4)">
                                            <img class="ai-icon" src="/assets/images/garden-icon.svg" alt="" loading="lazy">
                                            <span class="nwtb-title">Item Removal</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-interior" role="tabpanel"
                                    aria-labelledby="pills-interior-tab">
                                    <VirtualStaging />
                                </div>
                                <div class="tab-pane fade" id="pills-exterior" role="tabpanel"
                                    aria-labelledby="pills-exterior-tab">
                                    <InteriorDesign />
                                </div>
                                <div class="tab-pane fade" id="pills-garden" role="tabpanel"
                                    aria-labelledby="pills-garden-tab">
                                    Coming Soon...
                                </div>
                                <div class="tab-pane fade" id="pills-garden" role="tabpanel"
                                    aria-labelledby="pills-garden-tab">
                                    Coming Soon...
                                </div>
                                <div class="tab-pane fade" id="pills-garden" role="tabpanel"
                                    aria-labelledby="pills-garden-tab">
                                    Coming Soon...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

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

const selectedImage = ref('');

export default {
    name: "app",
    data: function () {
        return {
            myFiles: [],
            selectedImage: '',
            getImages: [],
            MyServer: {
                url: 'https://api.aihomedesign.com/api/public',
                timeout: 7000,
                process: {
                    url: '/v1/ai/image/upload',
                    method: 'POST',
                    withCredentials: false,
                    onload: (response) => {
                        const obj = JSON.parse(response)
                        obj['selected'] = false
                        console.log(obj.id)
                        console.log(obj.src)
                        selectedImage.value = obj.id

                    },
                    onerror: (response) => console.log(response.src),
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
        FilePond
    }
};
</script>

<script setup>
import VirtualStaging from './Services/VirtualStaging.vue'
import InteriorDesign from './Services/InteriorDesign.vue'
import axios from 'axios';
import { ref } from 'vue';
import { defineAsyncComponent } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const ViewImages = defineAsyncComponent({
    loader: () => import('./GeneratedImages.vue')
})

const show = ref(false);
const room_type = ref(null);
const room_style = ref(null);
const countDown = ref();
const interior_type = ref("Bedroom");
const interior_color = ref("SnowWhite");

const virtual_styles = [
    {
        name: 'Modern'
    },
    {
        name: 'Hampton'
    },
    {
        name: 'Contemporary'
    },
    {
        name: 'Scandinavian'
    },
    {
        name: 'Farmhouse'
    },
    {
        name: 'Urban Industrial'
    },
    {
        name: 'Traditional'
    }
];

const virtual_types = [
    {
        name: 'Bedroom',
        image: '/assets/images/bedroom_1.svg'
    },
    {
        name: 'Livingroom',
        image: '/assets/images/livingroom.svg'
    },
    {
        name: 'Dining Room',
        image: '/assets/images/dining-set.svg'
    },
    {
        name: 'Home Office',
        image: '/assets/images/office-business.svg'
    },
    {
        name: 'Single Room',
        image: '/assets/images/bedroom_2.svg'
    }
];

const interior_types = [{
    name: "Bedroom"
}, {
    name: "LivingRoom"
}, {
    name: "DiningRoom"
}, {
    name: "Office"
}, {
    name: "Outdoor"
}, {
    name: "Bathroom"
}, {
    name: "Kitchen"
}, {
    name: "KidsRoom"
}, {
    name: "GuestRoom"
}, {
    name: "GameRoom"
}, {
    name: "LaundryRoom"
}, {
    name: "Basement"
}, {
    name: "HotelRoom"
}, {
    name: "HotelLobby"
}, {
    name: "CarGarage"
}, {
    name: "OutdoorPatio"
}, {
    name: "OutdoorGarden"
}, {
    name: "HomeGym"
}, {
    name: "WineCellar"
}, {
    name: "OutdoorPoolArea"
}, {
    name: "Walk-inCloset"
}, {
    name: "ExhibitionSpace"
}, {
    name: "ClothingStore"
}, {
    name: "CoffeeShop"
}];

const interior_styles = [{
    name: "Modern"
}, {
    name: "Hampton"
}, {
    name: "Contemporary"
}, {
    name: "Scandinavian"
}, {
    name: "Farmhouse"
}, {
    name: "UrbanIndustrial"
}, {
    name: "Traditional"
}, {
    name: "Diwali"
}, {
    name: "Christmas"
}];

const interior_colors = ["SnowWhite", "SoftNeutrals", "CoastalCalm", "CrispWinter", "SeaBreeze", "RocketPop", "CottonCandy", "70sRetro", "ForestGetaway", "CandyShop", "NaturalGreen", "DeepBlues", "MinimalistMonochrome", "EarthyNeutrals", "PastelCalm", "CoolGreys", "PeachFuzz2024"];

function countDownTimer() {
    console.log('Timer...')
    if (countDown.value > 0) {
        setTimeout(() => {
            countDown.value -= 1
            countDownTimer()
        }, 1000)
    }
}

function generate() {

    console.log(selectedImage.value)
    console.log(room_style.value)
    console.log(room_type.value)

    if (room_style.value == null || room_type.value == null) {
        toast("Please, Room Style and Type.", {
            autoClose: 1000,
        });
    } else {

        window.sessionStorage.clear()
        let order_id = "9a02b05e-d8f5-4ac7-bc44-8be258e3a18c";
        let eta = 10;
        window.sessionStorage.setItem('order_id', order_id)
        window.sessionStorage.setItem('eta', eta)
        countDown.value = eta;
        show.value = true;

        countDownTimer();

        // let data = {
        //     "imageId": selectedImage.value,
        //     "type": room_type.value,
        //     "style": room_style.value,
        //     "serviceName": "VS",
        //     "regenerate": false
        // }

        // axios.post('https://api.aihomedesign.com/api/v1/ai/order/submit',
        //     data, {
        //     headers: {
        //         'x-api-key': '507bf032a1592c29968f2309812886b21a090639b13ca2a6b349de7f260c8e41'
        //     }
        // })
        //     .then((response) => {

        //         window.sessionStorage.clear()

        //         console.log("Order Id: " + response.data.orderId)
        //         console.log("Time From Order: " + response.data.eta)

        //         let eta = response.data.eta + 5;

        //         countDown.value = eta;

        //         console.log("Estimated Time: " + eta)

        //         window.sessionStorage.setItem('order_id', response.data.orderId)
        //         window.sessionStorage.setItem('eta', eta)

        //         show.value = true;
        //         countDownTimer();
        //     })
    }
}
</script>

<style scoped>
.nwchoosebx_radio-tile-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex-direction: row;
    align-content: center;
    align-items: center;
    gap: 5px;
}

.nwchoosebx_radio-tile-group .input-container {
    position: relative;
    /* height: 80px; */
    width: 49%;
    /* width: 120px; */
    /* margin: 0.5rem; */
}

.nwchoosebx_radio-tile-group .input-container .radio-button {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    margin: 0;
    cursor: pointer;
}

.nwchoosebx_radio-tile-group .input-container .radio-tile {
    display: flex;
    /* flex-direction: column; */
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    align-content: center;
    gap: 5px;
    width: 100%;
    /* height: 100%; */
    border: 1px solid #ffffff;
    border-radius: 5px;
    padding: 0.375rem 0.75rem;
    transition: transform 300ms ease;
}

.nwchoosebx_radio-tile-group .input-container .walk-icon {
    width: 1rem;
    /* height: 1rem; */
}

.nwchoosebx_radio-tile-group .input-container .icon img {
    filter: invert(1);
    width: 100%;
    height: 100%;

}

.nwchoosebx_radio-tile-group .input-container .radio-tile-label {
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    text-transform: capitalize;
    color: #ffffff;
    /* line-height: 1.6em; */
    /* margin-top: 5px; */
}

.nwchoosebx_radio-tile-group .input-container .radio-button:checked+.radio-tile {
    background-color: #01413E;
    border: 2px solid #01413E;
    color: white;
    /* transform: scale(1.1, 1.1); */
}

.nwchoosebx_radio-tile-group .input-container .radio-button:checked+.radio-tile .icon svg {
    fill: white;
    background-color: #097a78;
}

.nwchoosebx_radio-tile-group .input-container .radio-button:checked+.radio-tile .radio-tile-label {
    color: white;
    background-color: #01413E;
}

/* .chosen--images {
    visibility: hidden;
    height: 0;
    max-height: 0;
    opacity: 0;
} */

.skeleton {
    --bg: #e1e1e1;
    --glare-bg: linear-gradient(90deg, transparent, hsla(0, 0%, 100%, 0.4), transparent);
    position: relative;
    background-color: var(--bg);
    overflow: hidden;
}

.wrapper {
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center
}

.skeleton-loader {
    max-width: 1140px;
    width: 100%;
    margin: auto;
}

.skeleton::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: var(--glare-bg);
    transform: translateX(-100%);
    animation: skeleton-glare 1.75s infinite ease-out;
    z-index: 1;
}

@keyframes skeleton-glare {
    to {
        transform: translateX(100%)
    }
}


/**
 * ==============================================
 * Dot Spin
 * ==============================================
 */
.dot-spin {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: transparent;
    color: transparent;
    box-shadow: 0 -18px 0 0 #01413E, 12.727926px -12.727926px 0 0 #01413E, 18px 0 0 0 #01413E, 12.727926px 12.727926px 0 0 rgba(152, 128, 255, 0), 0 18px 0 0 rgba(152, 128, 255, 0), -12.727926px 12.727926px 0 0 rgba(152, 128, 255, 0), -18px 0 0 0 rgba(152, 128, 255, 0), -12.727926px -12.727926px 0 0 rgba(152, 128, 255, 0);
    animation: dot-spin 1.5s infinite linear;
}

@keyframes dot-spin {

    0%,
    100% {
        box-shadow: 0 -18px 0 0 #01413E, 12.727926px -12.727926px 0 0 #01413E, 18px 0 0 0 #01413E, 12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
    }

    12.5% {
        box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0), 12.727926px -12.727926px 0 0 #01413E, 18px 0 0 0 #01413E, 12.727926px 12.727926px 0 0 #01413E, 0 18px 0 -5px rgba(152, 128, 255, 0), -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
    }

    25% {
        box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0), 12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 0 #01413E, 12.727926px 12.727926px 0 0 #01413E, 0 18px 0 0 #01413E, -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
    }

    37.5% {
        box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0), 12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0), 12.727926px 12.727926px 0 0 #01413E, 0 18px 0 0 #01413E, -12.727926px 12.727926px 0 0 #01413E, -18px 0 0 -5px rgba(152, 128, 255, 0), -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
    }

    50% {
        box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0), 12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0), 12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 0 #01413E, -12.727926px 12.727926px 0 0 #01413E, -18px 0 0 0 #01413E, -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
    }

    62.5% {
        box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0), 12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0), 12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.727926px 12.727926px 0 0 #01413E, -18px 0 0 0 #01413E, -12.727926px -12.727926px 0 0 #01413E;
    }

    75% {
        box-shadow: 0 -18px 0 0 #01413E, 12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0), 12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 0 #01413E, -12.727926px -12.727926px 0 0 #01413E;
    }

    87.5% {
        box-shadow: 0 -18px 0 0 #01413E, 12.727926px -12.727926px 0 0 #01413E, 18px 0 0 -5px rgba(152, 128, 255, 0), 12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.727926px -12.727926px 0 0 #01413E;
    }
}


.card {
    --card-radius: 6px;
    min-width: 300px;
    height: auto;
    box-shadow:
        0 0 32px 2px rgba(0, 0, 0, 0.05),
        0 0 16px 2px rgba(0, 0, 0, 0.2),
        0 0 8px 2px rgba(0, 0, 0, 0.1);
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
}

.card__img {
    width: 100%;
    height: 200px;
}

.card__body {
    padding: 16px 16px 48px;
}

.card__text {
    font-size: 1rem;
    height: 1em;
    border-radius: 20px;
}

.card__body>.card__text {
    margin: 0.5em 0;
}

.card__body>.card__text:first-child {
    margin-top: 0.25rem;
}

.card__body>.card__text:last-child {
    margin-bottom: 0.25rem;
    width: 66%;
}
</style>