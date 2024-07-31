import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';
import AboutView from '../views/About.vue';
import ProjectsView from '../views/Project.vue';
import ContactView from '../views/Contact.vue';
import EducationView from '../views/EducationView.vue';
import SkillsView from '../views/SkillsView.vue';


const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/projects', component: ProjectsView },
  { path: '/contact', component: ContactView },
  { path: '/education', component: EducationView },
  { path: '/Skills', component: SkillsView },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
