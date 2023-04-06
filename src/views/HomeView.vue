<template>
  <transition name="translate" mode="out-in" appear>
  <div class="intro_container">
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
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "HomeView",
  computed: {
    intro() {
      return this.$store.state.intro;
    },
    ...mapState(["isLoading", "error"]),
  },
  created() {
    this.fetchIntro();
  },
  methods: {
    ...mapActions(["fetchIntro"]),
  },
  data() {
    return {
      lang: 'en',
    };
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
