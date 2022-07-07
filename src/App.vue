<template>
	<div id="app">
		<Nav></Nav>
		<!--nav-->
		<router-view/>
		<!--router-->
		<Footer></Footer>
		<!--footer-->
	</div>
</template>

<script>
import Footer from './components/comment/footer.vue'
import Nav from './components/comment/nav.vue';
const axios = require('axios')
export default {
    name: "App",
    data() {
        return {
            
        };
    },
    created() {
    },
    mounted() {
    },
    methods: {
        
    },
    components: { Footer, Nav }
}
</script>

<style lang="scss" scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
// @import "./assets/sass/nav.scss";
// @import "./assets/sass/footer.scss";
// @import "./assets/sass/index.scss";
</style>
