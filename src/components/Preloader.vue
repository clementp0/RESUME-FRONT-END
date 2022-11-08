<template>
  <transition>
    <div v-if="isloading || error" class="loaderoverlay">
      <div class="content">
        <div v-if="isloading"> 
        <img alt="loading_ico" src="../images/loading.svg">
        <p class="loading">Fetching Data...</p>
        </div>
       <div v-if="error">
        <p>Error while Fetching Data... 🥺<br/>
        Im sorry for the inconvenience. You can try <b class="refresh" @click="reloadPage">refreshing</b> this page or come back later.<br/>
        </p>
    <ApiStatus/>
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
import ApiStatus from './ApiStatus.vue';

export default {
  name: 'PreLoader',
  components: {
    ApiStatus
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

<style>

.loaderoverlay {
  height: 100vh;
  width: 100vw;
  background-image: url('../images/Dot Grid.svg');
  background-color: #181818;
  position: absolute;
  z-index: 2;
  margin: 0;
  top: 0;
}

.content {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.content>div>img{
  width: 50px;
}
a{
  color: white;
  text-decoration: none;
}
.refresh{
  text-decoration: underline;
}
.refresh:hover{
  cursor: pointer;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
  transition-delay: 1s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
