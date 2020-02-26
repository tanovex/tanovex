<template>
    <div class="header">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        props: {
            msg: {
                default: "Title",
                type: String
            }
        }
    };
</script>

<style scoped>
    h1 {
        font-size: 4em;
        margin-bottom: .2em;
    }
</style>