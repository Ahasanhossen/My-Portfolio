<template>
    <div class="container mx-auto py-8 max-lg:px-6">
      <h1 class="text-3xl font-bold mb-6 text-green-400 text-center">Skills</h1>
  
      <div v-for="(skills, category) in skillsData" :key="category" class="mb-6">
        <h2 class="text-2xl font-semibold mb-4 text-green-200">{{ category }}</h2>
        <div class="flex flex-wrap gap-4">
          <div v-for="skill in skills" :key="skill.name" class="bg-blue-300 font-semibold text-white bg-opacity-75 shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300 flex items-center">
            <img :src="getImageUrl(skill.icon)" alt="" class="w-8 h-8 mr-4" />
            <span>{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SkillsView',
    data() {
      return {
        skillsData: {
          'Programming Languages': [
            { name: 'Python', icon: 'python-5.svg' },
            { name: 'PHP', icon: 'PHP.svg' },
            { name: 'JavaScript', icon: 'javascript-1.svg' },
          ],
          'Web Development': [
            { name: 'HTML5', icon: 'html-1.svg' },
            { name: 'CSS3', icon: 'css-3.svg' },
            { name: 'Bootstrap', icon: 'bootstrap-5-1.svg' },
            { name: 'Tailwind CSS', icon: 'tailwind-css-2.svg' },
            { name: 'Laravel', icon: 'laravel-2.svg' },
            { name: 'GIT', icon: 'git.svg' },
            { name: 'jQuery', icon: 'jquery.svg' },
            { name: 'Postman', icon: 'postman.svg' },
          ],
          'Database Development': [
            { name: 'MySQL', icon: 'mysql.svg' },
          ],
          'Devops': [
          { name: 'Amazon AWS', icon: 'aws.svg' },
          { name: 'Netlify', icon: 'netlify.svg' },
        ],
        'AI/ML': [
          { name: 'numpy', icon: 'numpy.svg' },
          { name: 'scikit-learn', icon: 'scikit-learn.svg' },
          { name: 'TensorFlow', icon: 'tensorflow.svg' },
          { name: 'OpenCV', icon: 'opencv.svg' },
        ],
        'Editors': [
          { name: 'Visual Studio Code', icon: 'vscode.svg' },
          { name: 'Notepad++', icon: 'notepadpp.svg' },
          { name: 'Colab', icon: 'colab.svg' },
          { name: 'Apache Netbeans', icon: 'netBeans.svg' },
        ],
          'Game Development': [
          { name: 'Unity', icon: 'unity.svg' },
        ],
        
        'Operating Systems': [
          { name: 'Windows', icon: 'windows.svg' },
          { name: 'Linux', icon: 'linux.svg' },
          { name: 'Ubuntu', icon: 'ubuntu.svg' },
          { name: 'CentOS', icon: 'centos.svg' },
          { name: 'Kali Linux', icon: 'kalilinux.svg' },
        ],
        
        'Other Tools & Technologies': [
          { name: 'MATLAB', icon: 'matlab.png' },
          { name: 'Arduino', icon: 'arduino.svg' },
          { name: 'Canva', icon: 'canva.svg' },
          { name: 'Overleaf', icon: 'overleaf.svg' },
        ],
    
      },
    };
  },

    methods: {
        getImageUrl(image) {
        return require(`@/assets/logo/${image}`);
      }
    },
    
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>
  