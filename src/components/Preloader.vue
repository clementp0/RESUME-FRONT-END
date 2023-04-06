<template>
  <transition>
    <div v-if="isloading || error" class="loaderoverlay">
      <div class="preloader">
        <div v-if="isloading"> 
        <img alt="loading_ico" src="../images/loading.svg">
        <p class="loading">Fetching Data...</p>
        </div>
       <div v-if="error">
        <p>Error while Fetching Data... 🥺<br/>
        Im sorry for the inconvenience. You can try <b class="refresh" @click="reloadPage">refreshing</b> this page or come back later.<br/>
        </p>

    <br/>
       <a :href="'mailto:' + mail">{{mail}}</a>
       </div>
        
      </div>
    </div>
  </transition>
  <div>

  </div>
</template>

<script>
import axios from 'axios'
import "../assets/preloader.css";
export default {
  name: 'PreLoader',
  components: {
  },
  data() {
    return {
      error: false,
      errorcode: '',
      isloading: true,
      mail: process.env.VUE_APP_MAIL
    }
  },
  methods: {
    reloadPage() {
      window.location.reload();
    }
  },
  mounted() {
    axios
      .get(process.env.VUE_APP_API_SOCIALS)
      .catch(error => {
        this.error = true
        this.errorcode = error
        this.errored = true
      })
      .finally(() => this.isloading = false)
  }
};
</script>

