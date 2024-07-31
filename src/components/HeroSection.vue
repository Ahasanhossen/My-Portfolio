<template>
    <section class="hero py-20 ">
      <div class="container mx-auto flex flex-col items-center md:flex-row">
        <div class="md:w-1/2">
          <img src="@/assets/profile.jpg" alt="Profile Picture" class="rounded-full w-80 h-80 md:w-96 md:h-96 mx-auto md:mx-0 md:mr-8 shadow-lg" />
        </div>
        <div class="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 class="text-4xl md:text-5xl font-bold text-green-500">Hello, I'm Md Ahasan Hossen</h1>
          <p class="text-xl text-white mt-4">
             I'm a passionate software developer. Welcome to my portfolio where you can see my latest projects and learn more about my work.
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HeroSection',
  };
  </script>
  
  <style scoped>
  /* .hero {
    background-image:  url('@/assets/hero-bg.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    background-color: transparent;
  } */
  </style>
  