<template>
  <!-- DESKTOP MENU -->
  <div class="menu-desktop">
  <div class="menu-header">
    <router-link class="logo" to="/">
      <p>POMMERIE</p>
    </router-link>
    <div class="socials">
      <a :href="github" target="_blank"><img alt="github_logo" src="../images/icons/github.svg"></a>
      <a :href="linkedin" target="_blank"><img alt="linkedin" src="../images/icons/linkedin.svg"></a>
      <a :href="instagram" target="_blank"><img alt="instagram_logo" src="../images/icons/instagram.svg"></a>
    </div>
  </div>
  <div class="menu-container">
    <p class="menu-title">Resume</p>
    <ul>
      <li v-for="resumeLang in resume" v-bind:key="resumeLang">
        <router-link v-bind:to="/resume/ + resumeLang.name">{{ resumeLang.title }}</router-link>
      </li>
    </ul>
    <p class="menu-title" href="/projects">Projects</p>
    <ul>
      <li v-for="project in project" v-bind:key="project">
        <router-link v-bind:to="/project/ + project.title">{{ project.title }}</router-link>
      </li>
    </ul>
    <p class="menu-title">Ressources</p>
    <ul>
      <li>
        <router-link to="/ressources">OPENCORE EFI</router-link>
      </li>
    </ul>
  </div>
  <div class="menu-bottom">
    <router-link class="menu-title" to="/contact">
      <p>Contact</p>
    </router-link>
  </div>
</div>
  <!-- MOBILE MENU -->
<div class="menu-side">
  <input type="checkbox" id="menu-mobile" />
  <label for="menu-mobile" class="menu-mobile">
    <span></span>
    <span></span>
    <span></span>
  </label>

  <nav class="nav">
    <div class="menu-header menu-header-mobile">
    <router-link class="logo" to="/">
      <p>POMMERIE</p>
    </router-link>
    <div class="socials social_dark">
      <a :href="github" target="_blank"><img alt="github_logo" src="../images/icons/github.svg"></a>
      <a :href="linkedin" target="_blank"><img alt="linkedin" src="../images/icons/linkedin.svg"></a>
      <a :href="instagram" target="_blank"><img alt="instagram_logo" src="../images/icons/instagram.svg"></a>
    </div>
  </div>
  <div class="menu-container">
    <p class="menu-title">Resume</p>
    <ul>
      <li v-for="resumeLang in resume" v-bind:key="resumeLang">
        <router-link v-bind:to="/resume/ + resumeLang.name">{{ resumeLang.title }}</router-link>
      </li>
    </ul>
    <p class="menu-title" href="/projects">Projects</p>
    <ul>
      <li v-for="project in project" v-bind:key="project">
        <router-link v-bind:to="/project/ + project.title">{{ project.title }}</router-link>
      </li>
    </ul>
    <p class="menu-title">Ressources</p>
    <ul>
      <li>
        <router-link to="/ressources">OPENCORE EFI</router-link>
      </li>
    </ul>
  </div>
  <div class="menu-bottom">
    <router-link class="menu-title" to="/contact">
      <p>Contact</p>
    </router-link>
  </div>
  </nav>
</div>
</template>

<script>
import "../assets/menu.css";
import { mapState, mapActions } from 'vuex'

export default {
  name: 'MenuComponent',
  computed: {
    resume() {
      return this.$store.state.resume;
    },
    project() {
      return this.$store.state.project;
    },
    ...mapState(['isLoading', 'error'])
  },
  created() {
    this.fetchResume()
    this.fetchProject()
  },
  methods: {
    ...mapActions(['fetchResume', 'fetchProject']),
  },
  data() {
    return {
      windows: process.env.VUE_APP_WINDOWS,
      github: process.env.VUE_APP_GITHUB,
      linkedin: process.env.VUE_APP_LINKEDIN,
      instagram: process.env.VUE_APP_INSTAGRAM,
      details: null,
      log: '',
    };
  }
};
</script>
<style>

</style>