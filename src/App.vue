<template>
  <PreLoader />
  <DarkModeSwitch />
  <div class="menu">
    <MenuComponent />
  </div>
  <div class="content">
    <div class="render">
         <router-view :key="$route.path" />
  </div>
  </div>
</template>

<script>
import "./assets/main.css";
import "./assets/mobile.css";
import PreLoader from './components/Preloader.vue';
import MenuComponent from './components/Menu.vue';
import DarkModeSwitch from './components/DarkModeSwitch.vue';

export default {
  name: 'HomeView',
  components: {
    PreLoader,
    MenuComponent,
    DarkModeSwitch,
  },
}
</script>