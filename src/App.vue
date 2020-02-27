<template>
    <div id="app" class="container">
        <!-- move navigation to vue componenet -->
        <div class="navigation">
            <ul style="list-style:none;">
                <li>Home</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </div>
        <div class="container">
            <div class="content">
                <img :src="require('./assets/tv2.png')" style="display: inline-block; margin-bottom: -0.7em;" />
                <Header msg="Tanovex" />
                <Subtitle msg="Software / Education / Customer Service" />
            </div>
        </div>
        <div class="Portfolio"></div>
        <div class="Contact"></div>
        <div class="Footer"></div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import Subtitle from './components/Subtitle.vue';

    export default {
        name: 'app',
        components: {
            Header,
            Subtitle
        }
    };
</script>

<style>
    html, body {
        height: 100%;
    }

    body {
        border-top: #00aaff 20px solid;
        margin: 0;
        padding: 0;
        width: 100%;
        color: #00aaff;
        display: block;
        font-weight: bold;
        font-family: 'Lato';
    }

    .navigation {
        display: block;
        width: 100%;
    }

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

