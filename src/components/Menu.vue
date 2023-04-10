<template>
  <!-- DESKTOP MENU -->
  <div class="menu-desktop">
    <div class="menu-header">
      <router-link class="logo" to="/">
        <p>POMMERIE</p>
      </router-link>
      <div class="socials">
        <a :href="github" target="_blank"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_5_106227)">
              <path
                d="M9 18.9999C4 20.4999 4 16.4999 2 15.9999M16 21.9999V18.1299C16.0375 17.6531 15.9731 17.1737 15.811 16.7237C15.6489 16.2737 15.3929 15.8634 15.06 15.5199C18.2 15.1699 21.5 13.9799 21.5 8.51994C21.4997 7.12376 20.9627 5.78114 20 4.76994C20.4559 3.54844 20.4236 2.19829 19.91 0.999938C19.91 0.999938 18.73 0.649938 16 2.47994C13.708 1.85876 11.292 1.85876 9 2.47994C6.27 0.649938 5.09 0.999938 5.09 0.999938C4.57638 2.19829 4.54414 3.54844 5 4.76994C4.03013 5.78864 3.49252 7.1434 3.5 8.54994C3.5 13.9699 6.8 15.1599 9.94 15.5499C9.611 15.8899 9.35726 16.2953 9.19531 16.7399C9.03335 17.1844 8.96681 17.658 9 18.1299V21.9999"
                style="stroke: var(--black);" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          </svg>
        </a>
        <a :href="linkedin" target="_blank"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.2894 8C16.8807 8 18.4069 8.63214 19.5321 9.75736C20.6573 10.8826 21.2894 12.4087 21.2894 14V21H17.2894V14C17.2894 13.4696 17.0787 12.9609 16.7036 12.5858C16.3286 12.2107 15.8199 12 15.2894 12C14.759 12 14.2503 12.2107 13.8752 12.5858C13.5001 12.9609 13.2894 13.4696 13.2894 14V21H9.28943V14C9.28943 12.4087 9.92157 10.8826 11.0468 9.75736C12.172 8.63214 13.6981 8 15.2894 8V8Z"
              style="stroke: var(--black);" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5.28943 9H1.28943V21H5.28943V9Z" style="stroke: var(--black);" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M3.28943 6C4.394 6 5.28943 5.10457 5.28943 4C5.28943 2.89543 4.394 2 3.28943 2C2.18486 2 1.28943 2.89543 1.28943 4C1.28943 5.10457 2.18486 6 3.28943 6Z"
              style="stroke: var(--black);" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
        <a :href="instagram" target="_blank"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
              style="stroke: var(--black);" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M16 11.3701C16.1234 12.2023 15.9812 13.0523 15.5937 13.7991C15.2062 14.5459 14.5931 15.1515 13.8416 15.5297C13.0901 15.908 12.2384 16.0397 11.4077 15.906C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1903 8.22768 13.4229 8.09402 12.5923C7.96035 11.7616 8.09202 10.91 8.47028 10.1584C8.84854 9.40691 9.45414 8.7938 10.2009 8.4063C10.9477 8.0188 11.7977 7.87665 12.63 8.00006C13.4789 8.12594 14.2648 8.52152 14.8716 9.12836C15.4785 9.73521 15.8741 10.5211 16 11.3701Z"
              style="stroke: var(--black);" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.5 6.5H17.51" style="stroke: var(--black);" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg></a>
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
    <input type="checkbox" id="menu-mobile" v-model="isChecked" />
    <label for="menu-mobile" class="menu-mobile">
      <span></span>
      <span></span>
      <span></span>
    </label>

    <nav class="nav">
      <div class="menu-header menu-header-mobile">
        <router-link @click="uncheck" class="logo" to="/">
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
            <router-link @click="uncheck" v-bind:to="/resume/ + resumeLang.name">{{ resumeLang.title }}</router-link>
          </li>
        </ul>
        <p class="menu-title" href="/projects">Projects</p>
        <ul>
          <li v-for="project in project" v-bind:key="project">
            <router-link @click="uncheck" v-bind:to="/project/ + project.title">{{ project.title }}</router-link>
          </li>
        </ul>
        <p class="menu-title">Ressources</p>
        <ul>
          <li>
            <router-link @click="uncheck" to="/ressources">OPENCORE EFI</router-link>
          </li>
        </ul>
      </div>
      <div class="menu-bottom">
        <router-link @click="uncheck" class="menu-title" to="/contact">
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
    uncheck() {
      this.isChecked = false;
    }
  },
  data() {
    return {
      isChecked: false,
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
<style></style>