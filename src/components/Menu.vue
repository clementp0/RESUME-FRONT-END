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

.menu-header-mobile{
  margin-top:30px;
}
.menu-side{
    display: none;
}

.menu-mobile {
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: transform 250ms ease;
  cursor: pointer;
  z-index: 200;
}

.menu-mobile span {
  position: relative;
  display: block;
  width: 50%;
  height: 2px;
  background-color: var(--black);
  float: left;
  transform-origin: center center;
  transition: transform 250ms ease;
  z-index: 200;
}

.menu-mobile span:nth-of-type(1) {
  transform: translateY(-5px);
}

.menu-mobile span:nth-of-type(3) {
  transform: translateY(5px);
}

#menu-mobile {
  display: none;
}

#menu-mobile:checked~.menu-mobile {
  background-color: transparent;
  transform: rotate(360deg);
  transition: transform 250ms ease;
}

#menu-mobile:checked~.menu-mobile span {
  background-color: white;
  transition: transform 250ms ease;
}

#menu-mobile:checked~.menu-mobile span:nth-of-type(1) {
  transform: translateY(1px) rotate(45deg);
}

#menu-mobile:checked~.menu-mobile span:nth-of-type(2) {
  display: none;
}

#menu-mobile:checked~.menu-mobile span:nth-of-type(3) {
  transform: translateY(-1px) rotate(-45deg);
}

#menu-mobile:checked~.nav {
  left: 0px;
  transition: left 500ms ease;
}

#menu-mobile:checked~main {
  transform: translateX(250px);
  transition: transform 500ms ease;
}

.nav {
  position: fixed;
  top: 0;
  left: -180px;
  width: 180px;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: var(--white);
  border-right: 1px var(--gray-dark) solid;
  transition: left 500ms ease;
  z-index: 0;
}


.container {
  width: 75%;
  margin: 0 auto;
}

</style>