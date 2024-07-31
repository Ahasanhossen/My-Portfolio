<template>
  <div id="app" class=" flex flex-col min-h-screen bg-gray-800 min-w-[315px]">
    <HeaderBar  />
    <div class="flex-grow ">
      <router-view />
    </div>
    <FooterBar />
  </div>
</template>

<script>
import HeaderBar from './components/Header.vue';
import FooterBar from './components/Footer.vue';

export default {
  components: {
    HeaderBar,
    FooterBar,
  },
};
</script>

<style>
/* Custom styles can be added here */
</style>
