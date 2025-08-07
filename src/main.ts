import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as VueRouter from 'vue-router'
import './style.css'
import Home from './components/pages/Home.vue'
import TheChitShow from './components/pages/TheChitShow.md'
import Demo from './components/pages/Demo.vue'
import About from './components/pages/About.vue'
import Contact from './components/pages/Contact.vue'
import Blog from './components/pages/Blog.vue'
import App from './App.vue'

const pinia = createPinia()

const routes = [
    { path: '/', component: Home },
    { path: '/demo', component: Demo },
    { path: '/thechitshow', component: TheChitShow },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/blog', component: Blog },
  ]

  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
  })

createApp(App).use(pinia).use(router).mount('#app')
