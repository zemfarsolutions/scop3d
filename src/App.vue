<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Index from './components/Index.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

</script>

<template>
  <main id="hmn-main">
    <Header />
    <Index />
    <Footer />
  </main>

  <RouterView />
</template>


