<template>
  <div class="ads-widget">
    <h3 v-if="showTitle">{{ title }}</h3>
    <AdsCard />
    <p v-if="showDescription" class="widget-description">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import AdsCard from './AdsCard.vue'

interface Props {
  title?: string
  description?: string
  showTitle?: boolean
  showDescription?: boolean
}

withDefaults(defineProps<Props>(), {
  title: 'Featured Sponsor',
  description: 'Click refresh to see more offers',
  showTitle: true,
  showDescription: false
})
</script>

<style scoped lang="scss">
.ads-widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  
  h3 {
    color: #00aaff;
    font-size: 1.2rem;
    margin: 0;
    text-align: center;
  }
  
  .widget-description {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    text-align: center;
    margin: 0;
    max-width: 300px;
  }
}
</style>
