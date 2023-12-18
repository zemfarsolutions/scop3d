<template>
    <section id="join-us" class="agent-outer">
        <div class="container">
            <h2 class="title-outer" style="color:#fff;">Our Packages</h2>

            <div class="review-slider" style="display:flex">
        
                        <div class="item" style="width:33.33%; margin:10px;">
                            <div class="review-inner review-inner1">
                                <div class="author-content">
                                    <h4>Package 1 </h4>
                                    <ul>
                                        <li><a href="#nowhere" title="Lorum ipsum dolor sit amet">Lorem</a></li>
                                        <li><a href="#nowhere" title="Aliquam tincidunt mauris eu risus">Aliquam</a></li>
                                        <li><a href="#nowhere" title="Morbi in sem quis dui placerat ornare">Morbi</a></li>
                                        <li><a href="#nowhere" title="Praesent dapibus, neque id cursus faucibus">Praesent</a></li>
                                        <li><a href="#nowhere" title="Pellentesque fermentum dolor">Pellentesque</a></li>
                                    </ul><br><br>

                                    <a href="https://buy.stripe.com/test_bIY6qM1tq8rng48002" style="color:white;background:green;padding:10px;border-radius:5px;">Buy Now</a>
                                </div>
                
                            </div>
                        </div>

                        <div class="item" style="width:33.33%; margin:10px;">
                            <div class="review-inner review-inner1">
                                <div class="author-content">
                                    <h4>Package 2 </h4>
                                    <ul>
                                        <li><a href="#nowhere" title="Lorum ipsum dolor sit amet">Lorem</a></li>
                                        <li><a href="#nowhere" title="Aliquam tincidunt mauris eu risus">Aliquam</a></li>
                                        <li><a href="#nowhere" title="Morbi in sem quis dui placerat ornare">Morbi</a></li>
                                        <li><a href="#nowhere" title="Praesent dapibus, neque id cursus faucibus">Praesent</a></li>
                                        <li><a href="#nowhere" title="Pellentesque fermentum dolor">Pellentesque</a></li>
                                    </ul><br><br>

                                    <a href="https://buy.stripe.com/test_5kA02o1tqePL4lq9AD" style="color:white;background:green;padding:10px;border-radius:5px;">Buy Now</a>
                                </div>
                
                            </div>
                        </div>

                        <div class="item" style="width:33.33%; margin:10px;">
                            <div class="review-inner review-inner1">
                                <div class="author-content">
                                    <h4>Package 3 </h4>
                                    <ul>
                                        <li><a href="#nowhere" title="Lorum ipsum dolor sit amet">Lorem</a></li>
                                        <li><a href="#nowhere" title="Aliquam tincidunt mauris eu risus">Aliquam</a></li>
                                        <li><a href="#nowhere" title="Morbi in sem quis dui placerat ornare">Morbi</a></li>
                                        <li><a href="#nowhere" title="Praesent dapibus, neque id cursus faucibus">Praesent</a></li>
                                        <li><a href="#nowhere" title="Pellentesque fermentum dolor">Pellentesque</a></li>
                                    </ul><br><br>

                                    <a href="https://buy.stripe.com/test_eVa9CY1tq7nj8BG148" style="color:white;background:green;padding:10px;border-radius:5px;">Buy Now</a>
                                </div>
                
                            </div>
                        </div>




                        

                        
                    
                     
                        

            </div>
            
        </div>
    </section>
</template>

<script setup>
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const carouselSlides = ['1',
    'S2',
    '3'];

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