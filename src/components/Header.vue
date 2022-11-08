<template>
    <div class="header">
        <router-link class="home" to="/"><img alt="home_logo" src="../images/icons/home.svg"></router-link>
        <router-link class="contact" to="/contact">Contact</router-link>
    </div>
</template>
      
<script>
export default {
    name: 'HeaderComponent',
};
</script>
      
<style scoped>
.header {
  backdrop-filter: blur(5px);
  z-index: 1;
  padding: 10px;
  position: fixed;
  top: 0;
  width: 100vw;
}

.home {
  float: left;
  margin-left: 10;
}

.contact {
  float: right;
  margin-right: 25px;
  color: rgb(121, 121, 121);
  font-weight: 600;
}
</style>
      