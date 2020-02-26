<template>
    <div class="subtitle">
        <span>{{ msg }}</span>
    </div>
</template>

<script>
    export default {
        name: 'Subtitle',
        props: {
            msg: {
                default: "An awesome long subtitle",
                type: String
            }
        }
    };
</script>

<style scoped>
    span {
        font-size: 1.1em;
        font-weight: bold;
        font-family: 'Lato';
        color: #00aaff;
    }
</style>