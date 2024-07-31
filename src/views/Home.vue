<template>
 <div class="c min-h-screen">
  <div class="home max-sm:p-1 p-8 ">
    <HeroSection  />
    <div class="link flex  flex-wrap space-x-4 ">
    <a href="https://drive.google.com/file/d/1cWmVr0tj3OTJ3ASqLVA5-anKXyMMCm63/view?usp=sharing" 
    download="" class="cvBtn hover:opacity-70 px-2 border-2 border-green-200 rounded-xl text-green-500">Download CV <font-awesome-icon class="  text-green-400" icon="fa-solid fa-download" /></a>
    <a href="https://github.com/Ahasanhossen/" class="hover:opacity-70" > <font-awesome-icon class=" border-2 border-green-400 rounded-full p-1 text-green-400" icon="fa-brands fa-github" /></a>
    <a href="https://www.linkedin.com/in/ahasanhossen57/" class="hover:opacity-70"><font-awesome-icon class=" border-2 border-green-400 rounded-full p-1 text-green-400" icon="fa-brands fa-linkedin" /></a>
    <a href="https://www.facebook.com/muhammedahasan.hossen/" class="hover:opacity-70"><font-awesome-icon class=" border-2 border-green-400 rounded-full p-1 text-green-400" icon="fa-brands fa-facebook" /></a>
    <a href="https://wa.me/qr/L3TE5CSU42VGO1" class="hover:opacity-70"><font-awesome-icon class= "border-2 border-green-400 rounded-full p-1 text-green-400" icon="fa-brands fa-whatsapp" /></a>

    </div>
  </div>
    <EducationView />    
    <SkillsView/>
    <ProjectsView/>
    <ContactView/>
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import EducationView from './EducationView.vue';
import SkillsView from './SkillsView.vue';
import ProjectsView from './Project.vue';
import ContactView from './Contact.vue';
export default {
  name: 'HomeView',
  components: {
    HeroSection,
    EducationView,
    SkillsView,
    ProjectsView,
    ContactView,
  },
};
</script>

<style>
/* Custom styles can be added here */
</style>



