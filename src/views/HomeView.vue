<template>
  <transition name="translate" mode="out-in">
  <div v-if="!isloading && !error" class="intro_container">
    <div class="intro" v-for="introData in intro" v-bind:key="introData">
      <h1>{{ introData.hey }}</h1>
      <p><b>{{ introData.intro }}</b><br />
        {{ introData.baseline }}
      </p>
      <p>{{ introData.resume }}</p><br />
      <router-link class="resumeviewer" v-bind:to="'/resume/' + lang">View</router-link>
      <b> in</b><select v-model="lang">
        <option value="fr">🇫🇷</option>
        <option value="en">🇬🇧</option>
        <option value="pl">🇵🇱</option>
      </select>
    </div>
  </div>
</transition>
<img v-if="isloading || error" alt="loading_ico" src="../images/loading.svg">
</template>

<script>
import axios from 'axios'

export default {
  name: 'HomePage',
  data() {
    return {
      lang: 'en',
      intro: 'null',
      isloading: true,
      log:''
    }
  },

  mounted() {
    axios
      .get(process.env.VUE_APP_API_INTRO)
      .then(response => (this.intro = response.data))
      .catch(error => {
        this.error = true
        this.log = error
      })
      .finally(() => this.isloading = false)
  },
  activated(){
    document.title = process.env.VUE_APP_TITLE + ' | ' + 'Home'
  }
};
</script>

<style scoped>
select{
  margin-left: 5px;
}
select:focus {
    outline: none;
}
.intro {
  text-align: left;
}

select {
  background-color: transparent;
  border: none;
  color: #919191;
}

.resumeviewer {
  background-color: var(--black);
  text-decoration: none;
  color: var(--white);
  padding: 5px 15px 5px 15px;
  font-weight: 600;
}
</style>
