<template>
  <PreLoader />
  <HeaderComponent />
  <div class="render" v-bind:class="{ 'resume': ['/resume/en', '/resume/fr', '/resume/pl'].includes($route.path)}" >
    <router-view />
  </div>
  <FooterComponent />
</template>

<script>
import PreLoader from './components/Preloader.vue';
import HeaderComponent from './components/Header.vue';
import FooterComponent from './components/Footer.vue';
export default {
  name: 'HomeView',
  components: {
    PreLoader,
    HeaderComponent,
    FooterComponent
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:white;
}

body {
  background-image: url('./images/Dot Grid.svg');
  background-color: #181818;
  margin: 0;
}


.render {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.translate-enter-active,
.translate-leave-active {
  transition: all 0.5s ease;
}

.translate-enter-from,
.translate-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
