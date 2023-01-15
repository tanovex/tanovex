<script setup lang="ts"> 
 
defineProps<{ 
    msg: string,
    class?: string,
}>();

</script>

<template>
    <div class="subtitle" :class="class">
        <span>{{ msg }}</span>
    </div>
</template>



<style scoped>
     span {
        font-size: 1.1em;
        font-weight: bold;
        font-family: 'Lato';
    }
</style>