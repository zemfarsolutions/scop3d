<template>
    <div class="generation--result">
        <div v-for="(img, index) in Images.generated_images" :key="index" class="generation--result--img--block">
            <a :href="img.after_src" target="_blank" class="generation--result--img--link" download>
                <div class="download--btns">
                    <img src="/assets/images/download-minimalistic.svg" alt="download-btn">
                </div>
                <img :src="img.after_src" alt="" class="generation--result--img">
            </a>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'


const loadImages = async () => {

    let estimated_time = window.sessionStorage.getItem('eta') * 1000;
    let order_id = window.sessionStorage.getItem('order_id');

    return new Promise((resolve) => {
        setTimeout(() => {
            axios.get('https://api.scop3d.com/api/get-generated-image/' + order_id)
                .then(function (response) {

                    console.log('Generated Images Here..')
                    // let obj = {
                    //     "generated_images": [
                    //         {
                    //             "after_src": "https://foyr.com/learn/wp-content/uploads/2021/09/desk-for-master-bedroom-1024x683.jpg",
                    //         },
                    //         {
                    //             "after_src": "https://foyr.com/learn/wp-content/uploads/2021/09/desk-for-master-bedroom-1024x683.jpg",
                    //         },
                    //         {
                    //             "after_src": "https://foyr.com/learn/wp-content/uploads/2021/09/desk-for-master-bedroom-1024x683.jpg",
                    //         }
                    //     ]
                    // };

                    resolve(
                        response.data
                    )
                })

        }, estimated_time)
    })
}
export default {
    async setup() {
        const Images = ref(await loadImages());

        return { Images }
    },
    data() {
        return {
            sample: [
                {
                    src: 'https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png'
                },
                {
                    src: 'https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png'
                }
            ]
        }
    }
}
</script>

<style scoped>
.w-300 {
    width: 250px;
}
</style>