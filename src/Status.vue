<template>
salut
  <Contact/>
  <Footer/>
  <Header/>
</template>

<script>

import Footer from './components/Footer.vue'
import Header from './components/Header.vue';
import Contact from './components/Contact.vue';
export default {
  name: 'StatusPage',
  components: {
 
    Footer,
    Header,
    Contact,

}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  background-image: url('./images/Dot Grid.svg');
  background-color: #181818;
  margin: 0;
}
</style>
