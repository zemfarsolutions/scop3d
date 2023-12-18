<template>
    <div class="nwfrm-contentouter" id="forminterior0">
        <div class="row">
            <!-- Virtual Staging -->
            <div class="col-xl-8 col-lg-6 col-md-6 order-mobile-top">
                <div class="step_1_video">
                    <input type="hidden" name="image_type">
                    <input type="hidden" name="image">
                    <div class="ribon-bx">
                        <img class="nwribon" src="/assets/images/ribon.png" alt="" loading="lazy">
                        <div class="ribon-overlay">
                            <img class="nwstepimg" src="/assets/images/fillvector.svg" loading="lazy">
                            <span class="ribon-text"><strong>Step 1:</strong>
                                Upload Image
                            </span>
                        </div>
                    </div>
                </div>

                <file-pond name="test" ref="pond"
                    label-idle='<img src="/assets/images/uploader-icon.svg" width="64" class="mb-4 file--pond--placeholder--img"> 
                                                Drag & Drop your files or <span class="filepond--label-action"> Browse </span> 
                                                <span class="placeholder--notice--filepond">Supported formats: JPG, JPEG, PNG, WEBP</span>'
                    accepted-file-types="image/jpeg, image/png" v-bind:files="myFiles" v-bind:server="MyServer"
                    @addfile="onAddFile" maxFiles="1" />

                <!-- <div v-if="selectedImage !== ''" class="mt-4">
                                                    <button class="btn upgd-go" type="button"
                                                        @click="generate()">Generate</button>
                                                </div> -->

                <div class="mt-4" v-if="show">

                    <Suspense>
                        <template #default>
                            <ViewImages />
                        </template>
                        <template #fallback>
                            <div class="skeleton-loader">
                                <div v-if="countDown > 0" class="d-flex justify-content-center lazy--load--spin">
                                    <span class="ribon-text">
                                        <div class="dot-spin"></div> <span class="d-none"> {{ countDown
                                        }}</span>
                                    </span>
                                </div>
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

            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 order-mobile-btm">
                <div class="nwfile-uploadside">
                    <form style="background: transparent; box-shadow: none; backdrop-filter: none; border-radius: 0;">
                        <div class="nwupload-b0x">
                            <div class="ribon-bx">
                                <img class="nwribon" src="/assets/images/ribon.png" loading="lazy">
                                <div class="ribon-overlay">
                                    <img class="nwstepimg" src="/assets/images/generatevector.svg" loading="lazy">
                                    <span class="ribon-text"><strong>Step 2:</strong>
                                        Generate</span>
                                </div>
                            </div>
                        </div>
                    </form>
                    <!-- <button class="nwfrm-submit _btn_gndeisgn" >Generate </button> -->
                    <button :disabled="isDisabled" class="btn generate-go" type="button"
                        @click="generate()">Generate</button>
                </div>
            </div>
        </div>
    </div>
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

const selectedImage = ref(null);

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
                        formData.append('serviceName', 'D2D');
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
import axios from 'axios';
import { ref } from 'vue';
import { defineAsyncComponent } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const ViewImages = defineAsyncComponent({
    loader: () => import('./../GeneratedImages.vue')
})

const show = ref(false);
const countDown = ref();
const isDisabled = ref(false);

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

    if (selectedImage.value == null) {
        toast("Please, Upload an Image.", {
            autoClose: 1000,
        });
    } else {

        window.sessionStorage.clear()
        // let order_id = "9a02b05e-d8f5-4ac7-bc44-8be258e3a18c";
        // let eta = 10;
        // window.sessionStorage.setItem('order_id', order_id)
        // window.sessionStorage.setItem('eta', eta)
        // countDown.value = eta;
        // show.value = true;

        // countDownTimer();

        let data = {
            "imageId": selectedImage.value,
            "serviceName": "D2D"
        }

        axios.post('https://api.aihomedesign.com/api/v1/ai/order/submit',
            data, {
            headers: {
                'x-api-key': '507bf032a1592c29968f2309812886b21a090639b13ca2a6b349de7f260c8e41'
            }
        })
            .then((response) => {

                window.sessionStorage.clear()

                isDisabled.value = true;

                console.log("Order Id: " + response.data.orderId)
                console.log("Time From Order: " + response.data.eta)

                let eta = response.data.eta + 5;

                countDown.value = eta;

                console.log("Estimated Time: " + eta)

                window.sessionStorage.setItem('order_id', response.data.orderId)
                window.sessionStorage.setItem('eta', eta)

                show.value = true;
                countDownTimer();
            })
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
    --bg: #01413E;
    --glare-bg: linear-gradient(90deg, transparent, #01413E, transparent);
    position: relative;
    background-color: var(--bg);
    overflow: hidden;
}

.wrapper {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center
}

.skeleton-loader {
    max-width: 1140px;
    width: 100%;
    margin: auto;
    position: relative;
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

.lazy--load--spin {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    z-index: 99;
    width: 100%;
    height: 100%;
}

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
    width: 50%;
    min-width: 300px;
    height: auto;
    box-shadow:
        0 0 32px 2px rgba(0, 0, 0, 0.05),
        0 0 16px 2px rgba(0, 0, 0, 0.2),
        0 0 8px 2px rgba(0, 0, 0, 0.1);
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    opacity: 0.2;
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