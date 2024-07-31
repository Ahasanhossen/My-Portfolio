
<template>
    <div class="py-2  ">
      <div class="container mx-auto">
        <h1 class="text-4xl font-bold text-center text-green-400 mb-10">My Projects</h1>
        <swiper
          :modules="modules"
          :navigation="true"
          :pagination="true"
          :loop="true"
          :autoplay="{
            delay:3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            }"
          :on-autoplay="true"
          class="mySwiper"
        >
          <swiper-slide v-for="project in projects" :key="project.id" class="p-4 flex flex-wrap md:flex-nowrap items-center" >
            <div class="bg-gray-300 md:ml-5 mb-3 p-6 shadow-md rounded-md w-full order-1  md:w-1/2 md:h-80 animate__animated animate__fadeInLeft">
              <h2 class="text-2xl font-bold mb-4 overflow-clip text-nowrap  ">{{ project.title }}</h2>
              <!-- <p class="text-gray-700 mb-4 h-32 md:h-40 overflow-hidden whitespace-pre-line " v-html="project.description>{{ project.description }}</p> -->
              <div class="text-gray-700 mb-4 h-32 md:h-40 overflow-hidden whitespace-pre-line" v-html="project.description"></div>
              <div class=" flex items-center  mb-2 text-green-500">
                <h3 class="text-lg font-medium ">Technologies:&nbsp; </h3>
                <ul class="flex flex-wrap space-x-2">
                  <li v-for="tool in project.tools" :key="tool.id">
                    {{ tool.title }}
                  </li>
                </ul>
              </div>
              <a :href="project.codeLink" class="text-blue-500 hover:underline  cursor-pointer" target="_blank">View Code</a>
              <a :href="project.liveLink" class="text-blue-500 mx-4 hover:underline  cursor-pointer" target="_blank">Live</a>
              <a  class="text-blue-500 hover:underline cursor-pointer " target="_blank" @click="openModal(project)">View Details</a>
            </div>
            <img :src="getImageUrl(project.image)" alt="Project Image" class="md:order-2 mb-3 w-full mr-5 md:w-1/2 h-80 rounded-md shadow-md animate__animated animate__fadeInRight">
          </swiper-slide>
        </swiper>
      </div>
       <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-gray-800  flex items-center justify-center z-50">
      <!-- <div class="fixed inset-0 bg-gray-900 opacity-50"></div> -->
      <div class="bg-white bg-opacity-75 rounded-lg shadow-lg overflow-auto max-h-screen p-6 w-11/12 md:w-3/4 lg:w-1/2 relative">
        <button @click="closeModal" class="absolute top-4 right-4 text-gray-600 hover:text-gray-900">&times;</button>
        <h2 class="text-2xl font-bold mb-4 ">{{ selectedProject.title }}</h2>
        
        <div class="mb-4 whitespace-pre-line" v-html="selectedProject.description"></div>

        <img :src="getImageUrl(selectedProject.image)" alt="Project Image" class="w-full rounded-md shadow-md">
        <a :href="selectedProject.codeLink" target="_blank" class="text-blue-500 hover:underline mt-4 inline-block">View Code</a>
        <a :href="selectedProject.liveLink" class="text-blue-500 mx-4 hover:underline  cursor-pointer" target="_blank">Live</a>

      </div>
    </div>
      <div class="projrctList  mx-4 space-y-4">
        <h1 class="text-green-400 text-3xl font-bold text-center">Project List</h1>
        <div class="projectCard grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
          <div v-for="project in projects" :key="project.id" class=" bg-gray-600  mb-3 p-6 shadow-md rounded-md w-full     ">
              <h2 class="text-2xl font-bold text-white mb-4">{{ project.title }}</h2>
              
              <div class=" flex items-center  mb-2 text-green-500">
                <h3 class="text-lg font-medium ">Technologies:&nbsp; </h3>
                <ul class="flex flex-wrap space-x-2">
                  
                  <li v-for="tool in project.tools" :key="tool.id">
                    {{ tool.title }}
                  </li>
                </ul>
              </div>
              <a :href="project.codeLink" class="text-blue-500 hover:underline  cursor-pointer" target="_blank">View Code</a>
              <a :href="project.liveLink" class="text-blue-500 mx-4 hover:underline  cursor-pointer" target="_blank">Live</a>
              <a  class="text-blue-500 hover:underline cursor-pointer mx-4" target="_blank" @click="openModal(project)">View Details</a>
            </div>
          </div>
        </div>
    </div>
  </template>
  
  <script >
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation, Pagination,Autoplay } from 'swiper/modules';
  import "swiper/css";
  import "swiper/css/pagination"
  import "swiper/css/navigation";
  
 
  
  export default {
    name: 'ProjectsView',
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        showModal: false,
        selectedProject: {},
        projects: [
          {
            id: 1,
            title: 'Result Manegement Syetem(Back-End)',
            description: `This is my first website, which primarily focuses on a database management system. The key features of this website include:

<strong>User Registration and Login:</strong> Users can register and log in securely, with proper validation mechanisms in place.
<strong>Authentication and Authorization:</strong> Implemented robust authentication and authorization to ensure secure access to different functionalities based on user roles.
<strong>Teacher and Student Interface:</strong> Teachers can add results, and students can view their results through a dedicated interface.
<strong>Enhanced Design with CSS:</strong> Although the design may not be highly sophisticated, necessary CSS enhancements were applied to improve the overall user experience.

This project highlights my foundational skills in database management, user authentication, and role-based authorization, along with basic web design improvements using CSS.
`,
            codeLink: 'https://github.com/Ahasanhossen/university-result-management',
            liveLink:'',
            image: 'RMS.jpeg',  
            tools:[
              {
                id:1,
                title:'HTML',
              },
              {
                id:2,
                title:'CSS',
              },
              {
                id:3,
                title:'PHP',
              },
              {
                id:4,
                title:'MYSQL',
              },
            ]
          },
          {
            id: 2,
            title: 'School Manegement System(Full-Stake)',
            description: `This project, developed during my undergraduate studies, is a full-stack application with a primary focus on backend development using core PHP and MySQL. The key features of this school management system include:

            <strong>Admin Functionality:</strong> Administrators can add, update, and manage teacher, student, and subject information.
 <strong>Teacher Functionality:</strong> Teachers can input results for specific subjects they are assigned to.
  <strong>Student Functionality:</strong> Students can view their results for the subjects they are enrolled in.
<strong>Backend Focus:</strong> While it is a full-stack project, the main emphasis was on backend development, leveraging PHP and MySQL for data management and business logic implementation.

This project demonstrates my proficiency in core PHP and MySQL, as well as my ability to develop comprehensive management systems.
`,
            codeLink: 'https://github.com/Ahasanhossen/School-Management-System',
            liveLink:'',
            image: 'SMS.jpeg', 
            tools:[
              {
                id:1,
                title:'HTML',
              },
              {
                id:2,
                title:'CSS',
              },
              {
                id:3,
                title:'BOOTSTRAP',
              },
              {
                id:4,
                title:'PHP',
              },
              {
                id:5,
                title:'MYSQL',
              },
            ]
          },
          
          {
            id: 3,
            title: 'University Enrollment System(Full-Stake)',
            description: `This project, undertaken as a group during my studies, implements comprehensive procedures for university enrollment. Key features of this system include:

<strong>Credit and Capacity Checks:</strong> During enrollment, if a student exceeds the credit limit or if a section has reached maximum capacity, a message is immediately displayed to notify the student.
<strong>Manual Entry:</strong> An option for teachers (advisors) to manually enroll students in courses, bypassing standard restrictions when necessary.
<strong>Overlap Detection:</strong> After pre-enrollment, the system generates a list of overlapping courses, aiding teachers in creating a class schedule. This project operates under the assumption that the final routine is not yet completed.
<strong>Objective:</strong> The primary aim is to identify courses with no overlapping students to facilitate the creation of an efficient class routine.

This project showcases my ability to work collaboratively in a team, as well as my skills in implementing complex enrollment procedures and ensuring efficient scheduling.
`,
            codeLink: 'https://github.com/Ahasanhossen/University-Enrollment-System',
            liveLink:'',
            image: 'Enrollment.jpeg',  
            tools:[
              {
                id:1,
                title:'HTML',
              },
              {
                id:2,
                title:'CSS',
              },
              {
                id:3,
                title:'BOOTSTRAP',
              },
              {
                id:4,
                title:'LARAVEL',
              },
              {
                id:5,
                title:'MYSQL',
              },
            ]
          },
          {
            id: 4,
            title: 'Handwritten Bangla District Name Recognition with Streamlit',
            description: `This project involves developing a website using the Python framework Streamlit to visualize research work on computer vision. The primary focus is on training a model for handwritten Bangla district name recognition. Key aspects of this project include:

<strong>Streamlit Framework:</strong> Leveraged Streamlit to create an interactive and user-friendly web interface for visualizing the research findings.
<strong>Model Training:</strong> Developed and trained a machine learning model to accurately recognize handwritten Bangla district names.
<strong>Data Visualization:</strong> Implemented various visualization techniques to showcase the performance and accuracy of the trained model.
<strong>Interactive Features:</strong> Included interactive elements to allow users to test the model with their own handwritten inputs and see real-time predictions.

This project demonstrates my ability to use Streamlit for web development and my expertise in computer vision and machine learning.
`,
            codeLink: 'https://github.com/Ahasanhossen/BD-HDR-WEB',
            liveLink:'',
            image: 'streamlit.jpeg',  
            tools:[
              {
                id:1,
                title:'HTML',
              },
              {
                id:2,
                title:'CSS',
              },
              {
                id:3,
                title:'PYTHON',
              },
              {
                id:4,
                title:'STREAMLIT',
              },
             
            ]
          },
          {
            id: 5,
            title: 'Tic Tac Toe(Back-End)',
            description: `This project features a classic Tic Tac Toe game implemented using JavaScript, with a strong focus on DOM manipulation for interactive gameplay. Key aspects of this project include:

<strong>Game Development:</strong> Developed a fully functional Tic Tac Toe game using JavaScript to handle game logic and user interactions.
<strong>DOM Manipulation:</strong> Applied DOM manipulation techniques to dynamically update the game board, handle user moves, and display game status.
<strong>Interactive User Interface:</strong> Created an intuitive user interface where players can interact by clicking on grid cells to make their moves.
<strong>Responsive Design:</strong> Ensured the game interface is responsive and adaptable across different screen sizes, enhancing user experience.
<strong>Skill Showcase:</strong> Demonstrates proficiency in JavaScript programming leveraging DOM manipulation for interactive web applications.

This project highlights my ability to create interactive games and effectively utilize DOM manipulation techniques to enhance user interaction and experience.
`,
            codeLink: 'https://github.com/Ahasanhossen/Tic-Tac-Toe',
            liveLink:'',
            image: 'tic-tac-toe.jpeg',  
            tools:[
              {
                id:1,
                title:'HTML',
              },
              {
                id:2,
                title:'CSS',
              },
              {
                id:3,
                title:'JAVASCRIPT',
              },
              
            ]
          },
          {
            id: 6,
            title: 'Rock Paper Scissors(Back-End)',
            description: `This project involves the development of a Rock Paper Scissors game using JavaScript, emphasizing DOM manipulation for interactive gameplay. Key features of this project include:

<strong>Game Implementation:</strong> Created a functional Rock Paper Scissors game in JavaScript to manage game rules and user interactions.
<strong>DOM Manipulation:</strong> Utilized DOM manipulation techniques to dynamically update game elements, display game results, and handle user inputs.
<strong>User Interaction:</strong> Designed an intuitive interface where players can select their moves (Rock, Paper, or Scissors) and see immediate outcomes against the computer.
<strong>Responsive Design:</strong> Ensured the game interface is responsive across different devices, optimizing usability and accessibility.
<strong>Programming Skills Showcase:</strong> Demonstrates proficiency in JavaScript programming leveraging DOM manipulation for interactive web applications.

This project showcases my ability to develop engaging games and effectively utilize DOM manipulation to create interactive and responsive user interfaces.
`,
            codeLink: 'https://github.com/Ahasanhossen/ROCK-Paper-Scissors',
            liveLink:'',
            image: 'Rock_paper-sissors.jpeg',  
            tools:[
              {
                id:1,
                title:'HTML',
              },
              {
                id:2,
                title:'CSS',
              },
            
              {
                id:3,
                title:'JVASCRIPT',
              },
              
            ]
          },
          {
            id: 7,
            title: 'Weather Forecast(RESTful API)',
            description: `This project implements a weather forecast application using JavaScript with integration of a RESTful API. Key features of this project include:

<strong>RESTful API Integration:</strong> Utilized a RESTful API to fetch current weather data and forecasts from a reliable weather service provider.
<strong>Dynamic Display:</strong> Implemented JavaScript to dynamically display weather conditions, including temperature.
<strong>User Interface:</strong> Developed a user-friendly interface where users can enter location details or use geolocation to fetch local weather information.
<strong>Responsive Design:</strong> Ensured the weather forecast interface is responsive, providing a seamless experience across different devices and screen sizes.
<strong>Skill Showcase:</strong> Demonstrates proficiency in JavaScript programming, API integration, and front-end development, showcasing practical application of RESTful principles in real-time data retrieval.

This project highlights my ability to develop informative web applications that utilize external APIs to deliver accurate weather forecasts and enhance user experience.
`,
            codeLink: 'https://github.com/Ahasanhossen/Weather-Forecast',
            liveLink:'',
            image: 'weather-focast.jpeg',  
            tools:[
              {
                id:1,
                title:'HTML',
              },
              {
                id:2,
                title:'CSS',
              },
              {
                id:3,
                title:'JAVASCRIPT',
              },
              
            ]
          },
{
            id: 8,
            title: 'Amazone Clone(Front-End)',
            description: `This project aims to replicate the Amazon homepage design using only CSS for styling and layout. Key aspects of this project include:

<strong>CSS Styling:</strong> Employing CSS to mimic the visual elements and layout structure of the Amazon homepage, ensuring fidelity to the original design.
<strong>Layout Replication:</strong> Focusing on accurately reproducing the grid layout, navigation bar, product displays, and other prominent features of the Amazon homepage.
<strong>Responsive Design:</strong> Ensuring the replicated homepage is responsive and adaptable across various devices and screen sizes.
<strong>CSS Techniques:</strong> Demonstrating proficiency in CSS techniques such as flexbox, grid layout, media queries, and CSS variables to achieve the desired design.
<strong>Design Accuracy:</strong> Striving for visual accuracy in typography, colors, spacing, and other design details to closely match the original Amazon homepage.

This project serves as a showcase of CSS skills, emphasizing attention to detail and ability to replicate complex web designs using modern CSS practices.
`,
            codeLink: 'https://github.com/Ahasanhossen/Amazone-webpage-Clone',
            liveLink:'',
            image: 'amazone-clone.jpeg',  
            tools:[
            {
                id:1,
                title:'HTML',
              },
              {
                id:2,
                title:'CSS',
              },
            ]
          },
          {
            id: 9,
            title: 'Microsoft Clone(Front-End)',
            description: `This project is a meticulous replication of the Microsoft homepage, emphasizing the exclusive use of Tailwind CSS for styling and layout. Key features of this website include:

<strong>Tailwind CSS Integration:</strong> The entire website design is crafted using Tailwind CSS, showcasing proficiency in utilizing utility-first CSS framework.
<strong>Microsoft Homepage Replication:</strong> Accurately replicates the layout, design elements, and responsiveness of the Microsoft homepage.
<strong>Focused Design Approach:</strong> Emphasis on clean and efficient design practices with Tailwind CSS, ensuring optimal performance and maintainability.
<strong>User Experience Enhancement:</strong> Implementation of Tailwind CSS utilities to enhance user interaction and visual appeal, maintaining consistency with modern web design standards.

This project underscores my expertise in Tailwind CSS and highlights my ability to replicate complex designs while adhering to best practices in web development.
`,
            codeLink: 'https://github.com/Ahasanhossen/Microsoft-Webpage-Clone',
            liveLink:'',
            image: 'microsoft-clone.jpeg',  
            tools:[
            {
                id:1,
                title:'HTML',
              },
              {
                id:2,
                title:'CSS',
              },
              {
                id:3,
                title:'Tailwind',
              },
            ]
          },
        ],
      };
    },
    methods: {
      openModal(project) {
      this.selectedProject = project;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
      getImageUrl(image) {
        return require(`@/assets/${image}`);
      }
    },
    setup() {
      return {
        modules: [Navigation, Pagination,Autoplay],
      };
    },
  };
  </script>
  
  <style scoped>

  .swiper-pagination-bullet {
    width: 16px;
    height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 16px));
    display: inline-block;
    border-radius: var(--swiper-pagination-bullet-border-radius, 50%);
    background: #fafbf9;
    opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);
}
  </style>
  