<script>

function initComparisons() {
   var x, i;
   /* find all elements with an "img-comp-overlay" class: */
   x = document.getElementsByClassName("img-comp-overlay");
   for (i = 0; i < x.length; i++) {
      /* once for each "img-comp-overlay" element,
      pass the "img-comp-overlay" element as a parameter when executing the compareImages function: */
      compareImages(x[i]);
   }

   function compareImages(img) {
      var slider, w, h;
      /* get the width and height of the img element */
      w = img.offsetWidth;
      h = img.offsetHeight;
      /* set the width of the img element to 50%: */
      img.style.width = (w / 2) + "px";
      /* create slider: */
      slider = document.createElement("DIV");
      slider.setAttribute("class", "img-comp-slider");
      /* insert slider */
      img.parentElement.insertBefore(slider, img);
      /* position the slider in the middle: */
      slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
      slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
      /* execute a function when the mouse is over the slider: */
      slider.addEventListener("mouseover", slideReady);
      /* or touched (for touch screens: */
      slider.addEventListener("touchstart", slideReady);

      function slideReady(e) {
         /* prevent any other actions that may occur when moving over the image: */
         e.preventDefault();
         /* execute a function when the slider is moved: */
         window.addEventListener("mousemove", slideMove);
         window.addEventListener("touchmove", slideMove);
      }

      function slideMove(e) {
         var pos;
         /* get the cursor's x position: */
         pos = getCursorPos(e);
         /* prevent the slider from being positioned outside the image: */
         if (pos < 0) pos = 0;
         if (pos > w) pos = w;
         /* execute a function that will resize the overlay image according to the cursor: */
         slide(pos);
      }

      function getCursorPos(e) {
         var a, x = 0;
         e = (e.changedTouches) ? e.changedTouches[0] : e;
         /* get the x positions of the image: */
         a = img.getBoundingClientRect();
         /* calculate the cursor's x coordinate, relative to the image: */
         x = e.pageX - a.left;
         /* consider any page scrolling: */
         x = x - window.pageXOffset;
         return x;
      }

      function slide(x) {
         /* resize the image: */
         img.style.width = x + "px";
         /* position the slider: */
         slider.style.left = x - (slider.offsetWidth / 2) + "px";
      }
   }
}

export default {
   mounted() {
      initComparisons();
   }
}
</script>

<template>
   <section class="image--before--after--result">
      <div class="container">
         <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
               <div class="card card--before--after h-100">
                  <div class="img-comp-container">
                     <div class="img-comp-img">
                        <img src="/assets/images/before-after/thumb_Interior Design Before.jpeg" width="400px"
                           height="200px">
                     </div>
                     <div class="img-comp-img img-comp-overlay">
                        <img src="/assets/images/before-after/thumb_Interior Design After.jpeg" width="400px"
                           height="200px">
                     </div>
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
            </div>

         </div>
      </div>
   </section>
</template>




