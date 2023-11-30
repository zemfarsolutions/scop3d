<template>
   <section class="image--before--after--result">
      <div class="container">
         <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
               <div class="card card--before--after h-100">
                  <div class="img-comp-container">
                     <ImgComparisonSlider hover="hover">
                        <img slot="first" style="width: 100%"
                           src="/assets/images/before-after/thumb_Interior Design Before.jpeg" />
                        <img slot="second" style="width: 100%"
                           src="/assets/images/before-after/thumb_Interior Design After.jpeg" />
                     </ImgComparisonSlider>
                  </div>
                  <div class="card-body">
                     <h5 class="card-title">
                        <strong>
                           AI Interior Design
                        </strong>
                     </h5>
                     <p class="card-text">
                        Refurnish your room based on your preferred style.
                     </p>
                  </div>
               </div>
            </div>
            <div class="col">
               <div class="card card--before--after h-100">
                  <div class="img-comp-container">
                     <ImgComparisonSlider hover="hover">
                        <img slot="first" style="width: 100%"
                           src="/assets/images/before-after/thumb_Virtual Staging Before.jpeg" />
                        <img slot="second" style="width: 100%"
                           src="/assets/images/before-after/thumb_Virtual Staging After.jpeg" />
                     </ImgComparisonSlider>
                  </div>
                  <div class="card-body">
                     <h5 class="card-title">
                        <strong>
                           AI Virtual Staging
                        </strong>
                     </h5>
                     <p class="card-text">
                        Virtually furnish empty spaces based on your preferred style.
                     </p>
                  </div>
               </div>
            </div>
            <div class="col">
               <div class="card card--before--after h-100">
                  <div class="img-comp-container">
                     <ImgComparisonSlider hover="hover">
                        <img slot="first" style="width: 100%"
                           src="/assets/images/before-after/thumb_Day to Dusk Before.jpeg" />
                        <img slot="second" style="width: 100%"
                           src="/assets/images/before-after/thumb_Day to Dusk After.jpeg" />
                     </ImgComparisonSlider>
                  </div>
                  <div class="card-body">
                     <h5 class="card-title">
                        <strong>
                           AI Day to Dusk
                        </strong>
                     </h5>
                     <p class="card-text">
                        Add the magical touch of twilight to your exterior photos!
                     </p>
                  </div>
               </div>
            </div>
            <div class="col">
               <div class="card card--before--after h-100">
                  <div class="img-comp-container">
                     <ImgComparisonSlider hover="hover">
                        <img slot="first" style="width: 100%"
                           src="/assets/images/before-after/thumb_Image Enhancement Before.jpeg" />
                        <img slot="second" style="width: 100%"
                           src="/assets/images/before-after/thumb_Image Enhancement After.jpeg" />
                     </ImgComparisonSlider>
                  </div>
                  <div class="card-body">
                     <h5 class="card-title">
                        <strong>
                           AI Image Enhancement
                        </strong>
                     </h5>
                     <p class="card-text">
                        Elevate your photos: from lines, to lights and many more!
                     </p>
                  </div>
               </div>
            </div>
            <div class="col">
               <div class="card card--before--after h-100">
                  <div class="img-comp-container">
                     <ImgComparisonSlider hover="hover">
                        <img slot="first" style="width: 100%"
                           src="/assets/images/before-after/thumb_Item Declutter Before.jpeg" />
                        <img slot="second" style="width: 100%"
                           src="/assets/images/before-after/thumb_Item Declutter After.jpeg" />
                     </ImgComparisonSlider>
                  </div>
                  <div class="card-body">
                     <h5 class="card-title">
                        <strong>
                           AI Item Removal
                        </strong>
                     </h5>
                     <p class="card-text">
                        Get rid of clutters in a blink of AI!
                     </p>
                  </div>
               </div>
            </div>
            

         </div>
      </div>
   </section>
</template>




<script>
import { ImgComparisonSlider } from '@img-comparison-slider/vue';

export default {
   components: {
      ImgComparisonSlider
   },
};
</script>