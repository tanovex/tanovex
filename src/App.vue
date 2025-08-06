<script setup lang="ts">
import Header from './components/Header.vue'
import Subtitle from './components/Subtitle.vue'

// Pages
// - Services
// - Downloads
// - Project Blogs
// - Essays
// - Dev Memes
// - About
</script>

<template>
  <div class="container">
    <div class="content">
      <header >
        <div class="logo">
          <img src="./assets/tv2.png" style="display: inline-block; margin-bottom: -0.7em;" />
          <Header msg="Tanovex" />
        </div>
        <Subtitle msg="Software / Education / Customer Service" class="text-blue" />
      </header>
      <nav>
        <router-link to="/" class="btn">Home</router-link>
        <router-link to="/thechitshow" class="btn">The Chit Show</router-link>

      </nav>
    </div>
    <div class="card">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  display: block;
  width: 100% auto;
}

.content {
  text-align: center;
  display: block;
}
</style>
