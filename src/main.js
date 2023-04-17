import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'
import About from './/views/AboutView.vue'
import Home from './/views/HomeView.vue';
import Contact from './/views/LoginView.vue'
import Careers from './/views/CareerView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path: '/careers',
    name: 'Careers',
    component:Careers
  },
  {
    path: '/contact',
    name: 'Contact',
    component:Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

createApp(App).use(router).mount('#app')

export default router