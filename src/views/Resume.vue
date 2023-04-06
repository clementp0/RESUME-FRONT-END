<template>
  <transition name="translate" mode="out-in" appear>
    <div class="archive_container" v-if="resume">
      <div class="details" v-for="resumeDetails in resume.resumeDetails" :key="resumeDetails">
        <div class="content-intro">
        <img class="self" alt="profile_photo" src="../images/resume/me.jpeg" />
        <p class="Title">{{ resumeDetails.Title }} 👋</p>
        <p class="SubTitle">{{ resumeDetails.SubTitle }}</p>
        <br />
        </div>
        <p class="profile">{{ resumeDetails.profile }}</p>
        <p class="title-section">Dev</p>
        <p class="content-section">
          {{ resumeDetails.skillsDev }}</p>
        <br />
        <p class="title-section">Design</p>
        <p class="content-section">
          {{ resumeDetails.skillsGraphics }}</p>
        <br />
        <p class="title-section">Diplomas</p>
        <p class="content-section">
          {{ resumeDetails.Diplomas }}</p>
      </div>
      <p class="title-section">Experiences</p>
      <AccordionList>
        <AccordionItem v-for="resumeEntities in resume.resumeEntities" v-bind:key="resumeEntities">
                   <template #summary><a class="title">{{ resumeEntities.title }}</a></template>

          <p class="title">{{ resumeEntities.title }}</p>
            <p class="company">{{ resumeEntities.compagny }}</p>
            <p class="duration">{{ resumeEntities.duration }}</p>
            <p class="desc">{{ resumeEntities.description }}</p>
          
        </AccordionItem>
      </AccordionList>
    </div>
  </transition>
</template>
  
<script>
import "../assets/resume.css";
import "../assets/accordions.css";
import { AccordionList, AccordionItem } from "vue3-rich-accordion";
import { mapState, mapActions } from "vuex";

export default {
  name: "ResumeView",
  components: {
    AccordionList,
    AccordionItem,
  },
  computed: {
    resume() {
      return this.$store.state.resume.find((resume) => resume.name == this.$route.params.lang);
    },
    ...mapState(["isLoading", "error"]),
  },
  created() {
    this.fetchResume();
  },
  methods: {
    ...mapActions(["fetchResume"]),
  },
  data() {
    return {
      details: null,
      log: "",
    };
  },
};
</script>
  
<style scoped>
h3 {
  text-align: center;
}
</style>
  