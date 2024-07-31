<template>
    <div class="container mx-auto py-8 max-lg:px-6">
      <h1 class="text-3xl font-bold mb-6 text-center text-green-400">Education</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="education in educationList"
          :key="education.id"
          class="bg-gray-600 bg-opacity-75 text-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
        >
          <h2 class="text-xl font-semibold mb-2">{{ education.degree }}</h2>
          <p class=" mb-1">{{ education.institution }}</p>
          <p class=" mb-1">{{ education.year }}</p>
          <p class=" mb-1">{{ education.GPA }}</p>
          <p class="">{{ education.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EducationView',
    data() {
      return {
        educationList: [
          {
            id: 1,
            degree: 'Bachelor of Science in Computer Science & Engineering',
            institution: 'Premier University',
            GPA:'GPA: 3.72 out 4.0',
            description: ' Recent graduated, focusing on software development.',
          },
          {
            id: 2,
            degree: 'Higher Secondary School Certificate',
            institution: 'Kuaish Burishchar Sheikh City Corporation College',
            year: 'Passing Year: 2017',
            GPA:'GPA: 4.17 out of 5.0',
            
          },
          {
            id: 3,
            degree: 'Secondary School Certificate',
            institution: 'Mern Sun School & College',
            year: 'Passing Year: 2014',
            GPA:'GPA: 4.50 out of 5.0',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>
  