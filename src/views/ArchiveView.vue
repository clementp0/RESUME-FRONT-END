<template>
  <transition name="translate" mode="out-in">
  <div v-if="!isloading && !error" class="archive_container">
    <p class="archive_title">
      OPENCORE - 0.8.4
    </p>
    <p class="archive_desc">
      <b>EFI</b> - (provided without smbios)
    </p>
    <!-- Data loop -->
    <div v-for="archive in archive" v-bind:key="archive">
      <a v-bind:class="'active_' + archive.active" target="_blank" v-bind:href="archive.link">
        <div class="archive_entry">
          <p class="archive_entry_name">{{ archive.title }}</p>
        </div>
      </a>
    </div>
    <!-- End -->
  </div>
  
</transition>
<img v-if="isloading || error" alt="loading_ico" src="../images/loading.svg">
</template>
    
<script>
import axios from 'axios'
export default {
  name: 'ArchiveView',
  data() {
    return {
      archive: null,
      isloading : true,
      error: false,
      log:''
    }
  },

  mounted() {
    axios
      .get(process.env.VUE_APP_API_ARCHIVE)
      .then(response => (this.archive = response.data))
      .catch(error => {
        this.error = true
        this.log = error
      })
      .finally(() => this.isloading = false)
  },
  activated(){
    document.title = process.env.VUE_APP_TITLE + ' | ' + 'Archive'
  }
};
</script>
    
<style scoped>
.archive_container {
  width: 350px;
  border: 1px solid grey;
  background-color: #181818;
  margin: auto;
  padding-bottom: 30px;
}

.archive_header {
  height: 120px;
  background-size: cover;
  border-bottom: 1px solid grey;
  opacity: .8;
  background-image: url("../images/buildings.jpeg");
}

.archive_title {
  margin: auto;
  margin-top: 20px;
  padding-bottom: 10px;
  width: 85%;
  text-align: left;
  color: white;
  font-weight: 600;
}
.archive_desc{
  color: rgb(160, 160, 160);
  margin: auto;
  width: 85%;
  border-bottom: 1px solid grey;
  text-align: left;
  padding-bottom: 20px;
}

.archive_entry {
  border: 1px solid grey;
  border-radius: 5px;
  margin: auto;
  margin-top: 20px;
  width: 85%;
  display: flow-root;
}

.archive_entry:hover {
  background-color: #111111;
  transition-duration: 0.3s;
}

.archive_entry_name {
  float: right;
  margin-right: 10px;
  color: rgb(213, 213, 213);
}

.active_false{
  opacity: .5;
}
.active_false:hover{
  cursor: not-allowed;
}
</style>
    