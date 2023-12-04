<template>
    <section id="our-work" class="potential-outer">
        <div class="container">
            <h2 class="title-outer" style="color:#fff;">Show the Potential of Every Property</h2>
            <h3 class="sub-title">From Outdated to Outstanding with a Click</h3>
            <p style="color:#fff; opacity: 0.7;">Don't let outdated interiors put off potential buyers. With Scop3D,
                transform any space into a modern, appealing<br> haven. Show buyers the true potential of every property,
                enhancing its value and appeal.</p>
            <!-- <img src="/assets/images/real-estate-text-color-change.jpg" alt=""> -->
            <div id="uploader_section" class="uploader_section">
                <form class="w-full mx-auto p-4 lg:p-8 uploader_section">
                    <div>
                        <file-pond name="test" ref="pond" label-idle=" Drop files here..." v-bind:allow-multiple="true"
                            accepted-file-types="image/jpeg, image/png" v-bind:files="myFiles" v-bind:server="MyServer"
                            @addfile="onAddFile" maxFiles="4" />
                    </div>
                    <div class="row d-flex">
                        <div v-for="(image, index) in images" :key="index" class="col-md-3">
                            <div class="custom-control custom-checkbox image-checkbox filepond--image--preview--area">
                                <input type="radio" v-model="selectedImage" :value="image.id"
                                    class="form-check-input radio-button__input-image_select" name="selectImg">
                                <label class="custom-control-label" for="ck1a">
                                    <img :src="image.src" alt="#" class="filepond--image--preview">
                                </label>
                            </div>
                        </div>

                        <div class="container">

                            <div class="text-white">
                                <h6>Select Room Type</h6>
                            </div>

                            <div class="radio-tile-group">
                                <div class="input-container">
                                    <input id="walk" class="radio-button" type="radio" v-model="room_type" value="Bedroom"
                                        name="radio">
                                    <div class="radio-tile">
                                        <div class="icon walk-icon">
                                            <img src="assets/images/output-onlinepngtools.png" alt="" srcset="">
                                        </div>
                                        <label for="walk" class="radio-tile-label">Bedroom</label>
                                    </div>
                                </div>

                                <div class="input-container">
                                    <input id="bike" class="radio-button" type="radio" v-model="room_type"
                                        value="LivingRoom" name="radio">
                                    <div class="radio-tile">
                                        <div class="icon bike-icon">
                                            <img src="assets/images/output-onlinepngtools.png" alt="" srcset="">
                                        </div>
                                        <label for="bike" class="radio-tile-label">LivingRoom</label>
                                    </div>
                                </div>

                                <div class="input-container">
                                    <input id="drive" class="radio-button" type="radio" v-model="room_type"
                                        value="DiningRoom" name="radio">
                                    <div class="radio-tile">
                                        <div class="icon car-icon">
                                            <img src="assets/images/output-onlinepngtools.png" alt="" srcset="">
                                        </div>
                                        <label for="drive" class="radio-tile-label">DiningRoom</label>
                                    </div>
                                </div>

                                <div class="input-container">
                                    <input id="drive" class="radio-button" type="radio" v-model="room_type"
                                        value="HomeOffice" name="radio">
                                    <div class="radio-tile">
                                        <div class="icon car-icon">
                                            <img src="assets/images/output-onlinepngtools.png" alt="" srcset="">
                                        </div>
                                        <label for="drive" class="radio-tile-label">HomeOffice</label>
                                    </div>
                                </div>

                                <div class="input-container">
                                    <input id="drive" class="radio-button" type="radio" v-model="room_type"
                                        value="SingleBedroom" name="radio">
                                    <div class="radio-tile">
                                        <div class="icon car-icon">
                                            <img src="assets/images/output-onlinepngtools.png" alt="" srcset="">
                                        </div>
                                        <label for="drive" class="radio-tile-label">SingleBedroom</label>
                                    </div>
                                </div>
                            </div>

                            <div class="text-white mt-3">
                                <h6>Select Room Style</h6>
                            </div>

                            <div class="radio-tile-group">
                                <div>
                                    <input type="radio" v-model="room_style" value="Modern" name="room_style"
                                        class="btn-check" id="btn-check" autocomplete="off">
                                    <label class="btn btn-outline-light fw-bold mx-1 btn-sm f-2 room_style"
                                        for="btn-check">Modern</label>
                                </div>
                                <div>
                                    <input type="radio" v-model="room_style" value="Hampton" name="room_style"
                                        class="btn-check" id="btn-check1" autocomplete="off">
                                    <label class="btn btn-outline-light fw-bold mx-1 btn-sm f-2 room_style"
                                        for="btn-check1">Hampton</label>
                                </div>
                                <div>
                                    <input type="radio" v-model="room_style" value="Contemporary" name="room_style"
                                        class="btn-check" id="btn-check2" autocomplete="off">
                                    <label class="btn btn-outline-light fw-bold mx-1 btn-sm f-2 room_style"
                                        for="btn-check2">Contemporary</label>
                                </div>
                                <div>
                                    <input type="radio" v-model="room_style" value="Scandinavian" name="room_style"
                                        class="btn-check" id="btn-check3" autocomplete="off">
                                    <label class="btn btn-outline-light fw-bold mx-1 btn-sm f-2 room_style"
                                        for="btn-check3">Scandinavian</label>
                                </div>
                                <div>
                                    <input type="radio" v-model="room_style" value="Farmhouse" name="room_style"
                                        class="btn-check" id="btn-check4" autocomplete="off">
                                    <label class="btn btn-outline-light fw-bold mx-1 btn-sm f-2 room_style"
                                        for="btn-check4">Farmhouse</label>
                                </div>
                                <div>
                                    <input type="radio" v-model="room_style" value="UrbanIndustrial" name="room_style"
                                        class="btn-check" id="btn-check5" autocomplete="off">
                                    <label class="btn btn-outline-light fw-bold mx-1 btn-sm f-2 room_style"
                                        for="btn-check5">UrbanIndustrial</label>
                                </div>
                                <div>
                                    <input type="radio" v-model="room_style" value="Traditional" name="room_style"
                                        class="btn-check" id="btn-check6" autocomplete="off">
                                    <label class="btn btn-outline-light fw-bold mx-1 btn-sm f-2 room_style"
                                        for="btn-check6">Traditional</label>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div v-if="images.length > 0" class="mt-4">
                        <button class="btn upgd-go" type="button" @click="generate">Generate</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue';

const selectedImage = ref();
const room_type = ref();
const room_style = ref();

function generate() {

    console.log(selectedImage.value, room_type.value, room_style.value)

    // let json_request = {
    //     "imageId": "83d1a6d2-a430-4a6e-acfb-84c4d4f83ab4",
    //     "type": "Bedroom",
    //     "style": "Modern",
    //     "serviceName": "VS",
    //     "regenerate": false
    // }

    // console.log(json_request)

    // axios.post('https://api.aihomedesign.com/api/v1/ai/order/submit', {
    //     "imageId": "83d1a6d2-a430-4a6e-acfb-84c4d4f83ab4",
    //     "type": "Bedroom",
    //     "style": "Modern",
    //     "serviceName": "VS",
    //     "regenerate": false
    // }, {
    //     headers: {
    //         'x-api-key': '507bf032a1592c29968f2309812886b21a090639b13ca2a6b349de7f260c8e41'
    //     }
    // })
    //     .then((response) => console.log(response))
}
</script>

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
            images: [
                {

                    id: "8623a249-7b79-4a84-b57b-95cf3a542723",
                    selected: false,
                    src: "https://storage.aihomedesign.com/vs-before/8623a249-7b79-4a84-b57b-95cf3a542723.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=backend_user_ksyepalf%2F20231201%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231201T233528Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=1dcad08509f48d287cf5c84fe52678b536f0635a3135fd6e832fa6205e1db96b"
                }
            ],
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
                        console.log(obj)
                        this.images.push(obj)

                        // let newObj = {
                        //     'id': obj.id,
                        //     'src': obj.src
                        // };

                        // console.log(newObj)

                        // window.sessionStorage.setItem('images', newObj);

                        // this.getImages.push(window.sessionStorage.getItem('images'));

                        // console.log(response, window.sessionStorage.getItem('images'))
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
        FilePond
    },
    watch: {
        images: {
            deep: true,
            handler: function (newValue, oldValue) {
                console.log(newValue, oldValue)
                // window.sessionStorage.removeItem('images');

                // let parsed = JSON.parse(newValue[0]);
                // console.log(parsed)
                // window.sessionStorage.setItem('images', parsed);

                // this.getImages.push(window.sessionStorage.getItem('images'));

                // console.log(this.getImages, newValue[0], window.sessionStorage.getItem('images'))
            }
        }
    }
};


</script>

<style>
.radio-tile-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.f-2 {
    font-size: 0.45rem
}

.radio-tile-group .input-container {
    position: relative;
    height: 80px;
    width: 80px;
    margin: 0.5rem;
}

.radio-tile-group .input-container .radio-button {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    margin: 0;
    cursor: pointer;
}

.radio-tile-group .input-container .radio-tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: 2px solid #ffffff;
    border-radius: 5px;
    padding: 1rem;
    transition: transform 300ms ease;
}

.radio-tile-group .input-container .icon img {
    fill: #ffffff;
    width: 2rem;
    height: 2rem;
}

.radio-tile-group .input-container .radio-tile-label {
    text-align: center;
    font-size: 0.30rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #ffffff;
}

.radio-tile-group .input-container .radio-button:checked+.radio-tile {
    background-color: #097a78;
    border: 2px solid #097a78;
    color: white;
    transform: scale(1.1, 1.1);
}

.radio-tile-group .input-container .radio-button:checked+.radio-tile .icon svg {
    fill: white;
    background-color: #097a78;
}

.radio-tile-group .input-container .radio-button:checked+.radio-tile .radio-tile-label {
    color: white;
    background-color: #097a78;
}
</style>