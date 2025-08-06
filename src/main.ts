import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import './style.css'
import Home from './components/pages/Home.vue'
import TheChitShow from './components/pages/TheChitShow.md'
import About from './components/pages/About.vue'
import Contact from './components/pages/Contact.vue'
import Blog from './components/pages/Blog.vue'
import App from './App.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/thechitshow', component: TheChitShow },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/blog', component: Blog },
  ]

  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
  })

createApp(App).use(router).mount('#app')
