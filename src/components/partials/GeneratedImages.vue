<template>
    <div class="d-flex justify-content-center">
        <div v-for="(img, index) in Images.generated_images" :key="index" class="mx-2">
            <a :href="img.after_src" download>
                <img :src="img.after_src" alt="" class="w-300">
            </a>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'

let estimated_time = window.sessionStorage.getItem('eta') * 1000;
let order_id = window.sessionStorage.getItem('order_id');

const loadImages = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            axios.get('https://api.scop3d.com/api/get-generated-image/' + order_id)
                .then(function (response) {

                    console.log('aaaaaaaaaaa')
                    let obj = {
                        "generated_images": [
                            {
                                "after_src": "https://foyr.com/learn/wp-content/uploads/2021/09/desk-for-master-bedroom-1024x683.jpg",
                            },
                            {
                                "after_src": "https://foyr.com/learn/wp-content/uploads/2021/09/desk-for-master-bedroom-1024x683.jpg",
                            },
                            {
                                "after_src": "https://foyr.com/learn/wp-content/uploads/2021/09/desk-for-master-bedroom-1024x683.jpg",
                            }
                        ]
                    };

                    resolve(
                        obj
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