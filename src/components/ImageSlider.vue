<script>

import VueCompareImage from 'vue-compare-image';
 
export default {
  name: 'app',
  components: { VueCompareImage }

};


</script>

<template>
   <section class="image--before--after--result">
      <div class="container">
         <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
               <div class="card card--before--after h-100">
                  <div class="img-comp-container">
                     <VueCompareImage hover leftImage="/assets/images/before-after/thumb_Virtual Staging Before.jpeg" rightImage="/assets/images/before-after/thumb_Virtual Staging After.jpeg" />
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
            <!-- <div class="col">
               <div class="card card--before--after h-100">
                  <div class="img-comp-container">
                     <div class="img-comp-img">
                        <img src="/assets/images/before-after/thumb_Virtual Staging Before.jpeg" width="400px"
                           height="200px">
                     </div>
                     <div class="img-comp-img img-comp-overlay">
                        <img src="/assets/images/before-after/thumb_Virtual Staging After.jpeg" width="400px"
                           height="200px">
                     </div>
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
               <div class="card h-100 card--before--after">
                  <div class="img-comp-container">
                     <div class="img-comp-img">
                        <img src="/assets/images/before-after/thumb_Day to Dusk Before.jpeg" width="400px" height="200px">
                     </div>
                     <div class="img-comp-img img-comp-overlay">
                        <img src="/assets/images/before-after/thumb_Day to Dusk After.jpeg" width="400px" height="200px">
                     </div>
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
                     <div class="img-comp-img">
                        <img src="/assets/images/before-after/thumb_Image Enhancement Before.jpeg" width="400px"
                           height="200px">
                     </div>
                     <div class="img-comp-img img-comp-overlay">
                        <img src="/assets/images/before-after/thumb_Image Enhancement After.jpeg" width="400px"
                           height="200px">
                     </div>
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
                     <div class="img-comp-img">
                        <img src="/assets/images/before-after/thumb_Item Declutter Before.jpeg" width="400px"
                           height="200px">
                     </div>
                     <div class="img-comp-img img-comp-overlay">
                        <img src="/assets/images/before-after/thumb_Item Declutter After.jpeg" width="400px"
                           height="200px">
                     </div>
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
            </div> -->

         </div>
      </div>
   </section>
</template>




