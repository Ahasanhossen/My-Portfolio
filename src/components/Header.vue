<template>
    <header class=" p-4  ">
      <nav class=" " >
        <ul class="flex justify-center space-x-3 ">
          <li><router-link to="/" class="text-green-500 hover:text-green-600 hover:underline visited:underline">Home</router-link></li>
          <li><router-link to="/Education"  class="text-green-500 hover:text-green-600 hover:underline active:underline">Education</router-link></li>
          <li><router-link to="/Skills" class="text-green-500 hover:text-green-600 hover:underline active:underline">Skills</router-link></li>
          <!-- <li><router-link to="/about" class="text-green-500 hover:text-green-600 hover:underline active:underline">About</router-link></li> -->
          <li><router-link to="/projects" class="text-green-500 hover:text-green-600 hover:underline active:underline">Projects</router-link></li>
          <li><router-link to="/contact" class="text-green-500 hover:text-green-600 hover:underline active:underline">Contact</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderBar',
  };
  </script>
  
  <style>
  /* Custom styles can be added here */
  </style>
  