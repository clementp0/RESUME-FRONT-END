<template>
      <div class="footer">
      <div class="socials">
        <a :href="github" target="_blank"><img alt="github_logo" src="../images/icons/github.svg"></a>
        <a :href="linkedin" target="_blank"><img alt="linkedin" src="../images/icons/linkedin.svg"></a>
        <a :href="instagram" target="_blank"><img alt="instagram_logo" src="../images/icons/instagram.svg"></a>
      </div>
      <div class="others">
        <router-link class="right_btn" to="/status"><img alt="status_logo" src="../images/icons/server.svg"></router-link>
        <router-link class="right_btn" to="/archives"><img alt="archives_logo" src="../images/icons/EFI.svg"></router-link>

      </div>
    </div>
</template>
      
<script>
export default {
    name: 'FooterComponent',
    data(){
      return {
        github: process.env.VUE_APP_GITHUB,
        linkedin: process.env.VUE_APP_LINKEDIN,
        instagram: process.env.VUE_APP_INSTAGRAM
      }
    }
};
</script>
      
<style scoped>

.footer {
  backdrop-filter: blur(5px);
  z-index: 1;
  width: 100vw;
  height: 30px;
  position: fixed;
  bottom: 0;
  margin: 0;
}

.socials>a {
  margin: 5px;
  width: 50px;
  height: 50px;
}

.others {
  position: fixed;
  margin-right: 10px;
  right: 0;
  bottom: 0;
}

.right_btn{
  margin: 5px;
  width: 50px;
  height: 50px;
}

</style>
      