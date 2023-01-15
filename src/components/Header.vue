<script setup lang="ts"> 
 
defineProps<{ 
    msg: string,
    class?: string, 
}>();

</script>

<template>
    <div class="header" :class="class">
        <h1>{{ msg }}</h1>
    </div>
</template>


<style scoped>
    .header {
        display: inline-block;
        padding-left: .5em;
    }
    h1 {
        font-size: 4em;
        margin-bottom: .2em;
    }
</style>