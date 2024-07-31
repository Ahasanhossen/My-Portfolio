<!-- <template>
    <div class="contact p-8">
      <h1 class="text-4xl font-bold mb-4">Contact Me</h1>
      <div class="ct">
        <p>Mail: <a href="mailto:ahasanhossen@gmail.com">ahasanhossen@gmail.com</a></p>
        <p>Phone: <a href="tel:01842701022">01842701022</a></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactView',
  };
  </script>
  
  <style>
  /* Custom styles can be added here */
  </style> -->

  <template>
    <h1 class="text-3xl text-green-400 font-bold text-center mb-6 ">Contact Me</h1>
    <div class="container mx-auto py-8 space-y-2  md:flex items-center justify-center ">
      
      <div class="ct flex flex-col  space-y-2 mx-6  order-2">
        <div class="flex items-center "><span class=""><font-awesome-icon class="  shadow-lg bg-gray-700 p-1 fa-3x text-green-400" icon=" fa-regular fa-envelope "/></span> <a href="mailto:ahasanhossen@gmail.com" class="text-white ml-3 flex">ahasanhossen@gmail.com</a></div>
        <div class="flex items-center "><span class=""><font-awesome-icon class="  shadow-lg bg-gray-700 p-1 fa-3x text-green-400" icon=" fa-solid fa-phone "/></span> <a href="tel:01842701022" class="text-white flex ml-3">01842701022</a></div>
      </div>
      <form @submit.prevent="handleSubmit" id="myForm" class=" bg-gray-600  mx-6  flex-1 p-8 rounded-md shadow-md  max-w-[600px] flex flex-col justify-center order-1 ">
        <div  v-if="showError" class=" errormsg text-red-600 bg-red-300 py-2 px-2 max-w-[600px]" >Failed to send email: Please fill out all fields.</div>
      <div  v-if="success" class=" successmsg text-green-600 bg-green-200 py-2 px-2 max-w-[600px]" >Email sent successfully</div>
        <div class="fromHeader">
          <h1 class="text-green-400  text-2xl">Let's Work Together</h1>
        </div>
        <div class="mb-4">
          <label for="name" class="block text-white text-sm font-bold mb-2">Name</label>
          <input type="text" id="from_name" v-model="formData.from_name" required class="w-full px-3 py-2 border rounded-md" />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-white text-sm font-bold mb-2">Email</label>
          <input type="email" id="user_email" v-model="formData.user_email" required class="w-full px-3 py-2 border rounded-md" />
        </div>
        <div class="mb-4">
          <label for="message" class="block text-white text-sm font-bold mb-2">Message</label>
          <textarea id="message" v-model="formData.message" required  class="w-full px-3 py-2 border rounded-md"></textarea>
        </div>
        <div class="flex justify-center">
        <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700">Send</button>
      </div>
      </form>
    </div>
  </template>
  
  <script>
  import emailjs from 'emailjs-com';
  
  export default {
    name: 'ContactView',
    data() {
      return {
        formData: {
          from_name: '',
          user_email: '',
          message: '',
        },
        showError: false,
        success:false,
      };
    },
    methods: {
      handleSubmit() {
      if (this.validateForm()) {
        this.sendEmail();
      }
    },
    validateForm() {
      if (this.formData.from_name==="" || this.formData.user_email==="" || this.formData.message==="") {
        
        this.showError = true;
        setTimeout(() => {
            this.showError = false;
          }, 6000);
        return false;
      }
      
      this.showError = false;
      return true;
      
    },
      sendEmail() {
        const serviceID = 'service_1breolk';
        const templateID = 'template_azy40gc';
        const userID = 'taEmzy4UM0Vqd8ai4';
        
        emailjs.send(serviceID, templateID, this.formData, userID)
          .then(() => {
            this.success=true;
            this.resetForm();
            setTimeout(() => {
            this.success = false;
          }, 6000);
          }, (error) => {
            alert('Failed to send email: ' + error.text);
          });
          
      },
      resetForm() {
      this.formData.from_name = '';
      this.formData.user_email = '';
      this.formData.message = '';
    },
      
    },
    
  };
  
  </script>
  
  <style scoped>
  @keyframes fadeInOut {
  0% { opacity: 1; }
  30% { opacity: 1; }
  60% { opacity: .5; }
  90% { opacity: .3; }
  100% { opacity: 0; }
}
.errormsg, .successmsg {
  animation: fadeInOut 6s forwards;
}
 
  </style>
  
  