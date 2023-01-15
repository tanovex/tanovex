<script setup lang="ts">
import Header from './components/Header.vue'
import Subtitle from './components/Subtitle.vue'
</script>

<template>
  <div>
  <div class="container">
    <div class="content">
      <div class="logo">
        <img src="./assets/tv2.png" style="display: inline-block; margin-bottom: -0.7em;" />
        <Header msg="Tanovex" />
      </div>
      <Subtitle msg="Software / Education / Customer Service" class="text-blue" />
      <div class="card">
        <a href="mailto:contact@tanovex.com" class="btn">Contact Us</a>
      </div>
    </div>
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
