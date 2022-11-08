<template>
  <transition name="translate" mode="out-in">
   <ApiStatus/>
  </transition>
  </template>
      
  <script>
    import ApiStatus from '../components/ApiStatus.vue';
  export default {
    name: 'StatusView',
    components: {
    ApiStatus
  }}
 </script>