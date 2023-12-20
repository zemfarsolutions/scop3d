<template>
   <div class="cardy text-center">
      <div class="title">
         <span class="fa">
            <img src="/assets/images/dollar-sign-circle.svg" alt="">
         </span>
         <h2>{{ package.name }}</h2>
      </div>
      <div class="price">
         <h4><sup>$</sup>{{ package.amount }}</h4>/ Month
      </div>
      <div class="option">
         <ul>
            <!-- Add your package details here -->
            <li>Up to {{ package.generations }} coins</li>
         </ul>
         
      </div>
      <stripe-checkout ref="checkout" :key="package.name" :publishablekey="pk_test_51NF5KEEK3EOQkU5grfscGmwd8bTaNFHftYhz0ixKj2OzKbruOZRyM6G3EwynDS1Vhyxsfkjb8PcyISpAnjXTYJFS00cs3IQ1Pc" :amount="package.amount * 100"
         :currency="'USD'" :name="'Scop3D'" :description="`Purchase ${package.name} Package`"
         :image="'/assets/images/Whie-Logo-scop3d.png'" :locale="'auto'" :billing-address="false" :shipping-address="false"
         :zip-code="false" :closed="onPaymentClosed" @token="onPaymentSuccess">
         <!-- <button @click="onPaymentSuccess">Order Now</button> -->
         <!-- <a href="#" class="stripe-button-el"> -->
         <a ref="button" slot="button" class="stripe-button-el" @click="initiatePurchase">
            Order Now
         </a>
      </stripe-checkout>
   </div>
</template>
 
<script>
// import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
   props: {
      package: {
         type: Object,
         required: true,
      },
   },
   methods: {
      // submit() {
      //    console.log('hi');
      //    // this.$refs.checkoutRef.redirectToCheckout();
      // },
      onPaymentSuccess(token) {
         // Handle payment success, you can send the token to your server
         console.log("Payment successful. Token:", token);
         // You can also emit an event to the parent component
         this.$emit("payment-success", { package: this.package, token });
      },
      onPaymentClosed() {
         // Handle payment closed (user closed the Stripe Checkout modal)
         console.log("Payment closed");
      },
   },
};
</script>
 
<style>
.cardy {
   position: relative;
   max-width: 300px;
   height: auto;
   border-radius: 15px;
   -webkit-border-radius: 15px;
   -moz-border-radius: 15px;
   -ms-border-radius: 15px;
   -o-border-radius: 15px;
   margin: 0 auto;
   padding: 40px 20px;
   box-shadow: 0 10px 15px rgba(0, 0, 0, .2);
   transition: .5s;
   -webkit-transition: .5s;
   -moz-transition: .5s;
   -ms-transition: .5s;
   -o-transition: .5s;
   overflow: hidden;
}

.cardy:hover {
   transform: scale(1.1);
   -webkit-transform: scale(1.1);
   -moz-transform: scale(1.1);
   -ms-transform: scale(1.1);
   -o-transform: scale(1.1);
}

.col-sm-4:nth-child(1) .cardy,
.col-sm-4:nth-child(1) .cardy .title .fa {
   /* background: linear-gradient(-45deg, #f403d1, #64b5f6); */
   background: #fff;
}

.col-sm-4:nth-child(2) .cardy,
.col-sm-4:nth-child(2) .cardy .title .fa {
   /* background: linear-gradient(-45deg, #ffec61, #f321d7); */
   background: #fff;
}

.col-sm-4:nth-child(3) .cardy,
.col-sm-4:nth-child(3) .cardy .title .fa {
   /* background: linear-gradient(-45deg, #24ff72, #9a4eff); */
   background: #fff;
}

.cardy:before {
   content: '';
   position: absolute;
   bottom: 0;
   left: 0;
   width: 100%;
   height: 40%;
   background: rgba(255, 255, 255, .1);
   z-index: 1;
   transform: skewY(-5deg) scale(1.5);
   -webkit-transform: skewY(-5deg) scale(1.5);
   -moz-transform: skewY(-5deg) scale(1.5);
   -ms-transform: skewY(-5deg) scale(1.5);
   -o-transform: skewY(-5deg) scale(1.5);
}

.title .fa {
   color: #077A76;
   font-size: 60px;
   width: 100px;
   height: 100px;
   border-radius: 50%;
   -webkit-border-radius: 50%;
   -moz-border-radius: 50%;
   -ms-border-radius: 50%;
   -o-border-radius: 50%;
   text-align: center;
   line-height: 100px;
   box-shadow: 0 10px 10px rgba(0, 0, 0, .2);
   background: #fff;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: auto;
}

.title h2 {
   position: relative;
   margin: 20px 0 0;
   padding: 0;
   color: #fff;
   font-size: 28px;
   z-index: 2;
}

.price {
   position: relative;
   z-index: 2;
}

.price h4 {
   margin: 0;
   padding: 20px 0;
   color: #fff;
   font-size: 60px;
}

.option {
   position: relative;
   z-index: 2;
}

.option ul {
   margin: 0;
   padding: 0;
}

.option ul li {
   margin: 0 0 10px;
   padding: 0;
   list-style: none;
   color: #fff;
   font-size: 16px;
}

.cardy a {
   position: relative;
   z-index: 2;
   background: #fff;
   color: #262626;
   width: 150px;
   height: 40px;
   line-height: 40px;
   border-radius: 5px !important;
   display: block;
   text-align: center;
   margin: 20px auto 0;
   -webkit-border-radius: 40px;
   -moz-border-radius: 40px;
   -ms-border-radius: 40px;
   -o-border-radius: 40px;
   font-size: 16px;
   cursor: pointer;
   box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
}

.cardy a:hover {
   text-decoration: none;
}
</style>
 