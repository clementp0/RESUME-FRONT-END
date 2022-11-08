<template>
  <transition name="translate" mode="out-in">
    <div>
    <div class="status_container">
      <p class="status_title">
        APIs STATUS
      </p>
      <div>
          <div class="status_entry">
            <p class="status_entry_name"> Resume - <b>API</b></p>
            <ul>
            <li class="online" v-if="resume_online && !resume_error">Online</li>
            <li class="unknown" v-if="!resume_online">Fetching..</li>
            <li class="offline" v-if="resume_error">Offline</li>
          </ul>
          </div>
      </div>
      <div>
          <div class="status_entry">
            <p class="status_entry_name"> Crafty - <b>API</b></p>
            <ul>
            <li class="online" v-if="crafty_online && !crafty_error">Online</li>
            <li class="unknown" v-if="!crafty_online">Fetching..</li>
            <li class="offline" v-if="crafty_error">Offline</li>
          </ul>
          </div>
      </div>
      <div>
          <div class="status_entry">
            <p class="status_entry_name"> Crafty - <b>APP</b></p>
            <ul>
            <li class="online" v-if="expo_online && !expo_error">Online</li>
            <li class="unknown" v-if="!expo_online">Fetching..</li>
            <li class="offline" v-if="expo_error">Offline</li>
          </ul>
          </div>
      </div>
    </div>
  </div>
</transition>
  </template>
      
  <script>
  import axios from 'axios'
  export default {
    name: 'ApiStatus',
    data() {
      return {
        resume_online:false,
        resume_error:false,
        resume_log:'',

        crafty_online:false,
        crafty_error:false,
        crafty_log:'',

        expo_online:false,
        expo_error:false,
        expo_log:''
    
      }
    },
  
    mounted() {
      axios
        .get(process.env.VUE_APP_API_STATUS)
        .catch(error => {
          this.resume_error = true
          this.resume_log = error
        })
        .finally(() => this.resume_online = true)

      axios
        .get(process.env.VUE_APP_API_CRAFTY)
        .catch(error => {
          this.crafty_error = true
          this.crafty_log = error
        })
        .finally(() => this.crafty_online = true)

        axios
        .get(process.env.VUE_APP_API_CRAFTY_EXPO)
        .catch(error => {
          this.expo_error = true
          this.expo_log = error
        })
        .finally(() => this.expo_online = true)
    },
  activated(){
    document.title = process.env.VUE_APP_TITLE + ' | ' + 'Status'
  }
    
  };
  </script>
      
  <style scoped>
  .status_container {
    width: 350px;
    border: 1px solid grey;
    background-color: #181818;
    margin: auto;
    /* CHANGE THIS  */
    margin-top: 8%;
    padding-bottom: 30px;
  }
  
  .status_title {
    border-bottom: 1px solid grey;
    margin: auto;
    margin-top: 20px;
    padding-bottom: 20px;
    width: 85%;
    text-align: left;
    color: white;
    font-weight: 600;
  }
  
  .status_entry {
    border: 1px solid grey;
    border-radius: 5px;
    margin: auto;
    margin-top: 20px;
    width: 85%;
    display: flow-root;
  }
  
  .status_entry_name {
    float: right;
    margin-right: 10px;
    color: rgb(213, 213, 213);
  }
  .status_entry > ul > li{
    text-align: left;
  }
  .online{
    color: green;
  }
  .unknown{
    color: grey;
  }
  .offline{
    color:red
  }
  </style>
      