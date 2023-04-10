<template>
  <transition name="translate" mode="out-in" appear>
    <div class="project_container">
      <div class="project_header">
        <img class="project_image" :src="project.image">
        <div class="project_header_data">
          <p class="project_title">{{ project.title }}</p>
          <p class="project_desc">{{ project.description }}</p>
          <div class="project_status_mobile">
          <li class="online" v-if="websiteStatus && !websiteError">Online</li>
          <li class="offline" v-if="websiteError">Offline</li>
        </div>
        </div>
      </div>
      <p class="project_desc_mobile">{{ project.description }}</p>
      <div class="project_meta">
        <div class="project_status">
          <p class="project_item">Status</p>
          <li class="online" v-if="websiteStatus && !websiteError">Online</li>
          <li class="offline" v-if="websiteError">Offline</li>
        </div>
        <div class="project_repository">
          <p class="project_item">Repository</p>
          <a :href="project.repository" class="project_item_result" target="_blank" v-if="project.repository"><i
              class="fa-solid fa-lock-open"></i> Public</a>
          <p class="project_item_result" v-else><i class="fa-solid fa-lock"></i> Private</p>
        </div>
        <div class="project_website">
          <p class="project_item">Website</p>
          <a :href="'https://' + project.website" target="_blank" class="project_item_result">{{ project.website }}</a>
        </div>
        <div class="project_state">
          <p class="project_item">Current State</p>
          <p class="project_item_result">{{ project.state }}</p>
        </div>
      </div>
      <div class="project_data">
        <img class="project_preview" :src="project.preview">
        <div v-html="project.features" class="project_features"></div>
      </div>
     
      
    </div>
  </Transition>
</template>
  

<script>
import "../assets/projects.css";
import axios from 'axios'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ProjectView',
  data() {
    return {
      websiteUrl: null,
      websiteStatus: false,
      websiteError: false,
    };
  },
  computed: {
    project() {
      return this.$store.state.project.find((project) => project.title == this.$route.params.project);
    },
    ...mapState(['isLoading', 'error'])
  },
  watch: {
    project() {
      this.websiteUrl = 'https://' + this.project.website;
      axios
        .get(this.websiteUrl)
        .catch(error => {
          this.websiteError = true
          console.log(error)
        })
        .finally(() => this.websiteStatus = true)
    }
  },
  created() {
    this.fetchProject();
  },
  methods: {
    ...mapActions(['fetchProject']),
  },
};
</script>

