<template>
  <Transition>
    <div>
    <div class="details">
      <div v-for="details in details" v-bind:key="details">
        <img class="self" alt="profile_photo" src="../../images/resume/me.jpeg">
        <p class="Title">{{ details.Title }} 👋</p>
        <p class="SubTitle">{{ details.SubTitle }}</p><br>
        <p class="profile">{{ details.profile }}</p>
        <p class="skillsDev"><span>DEV : </span>{{ details.skillsDev }}</p><br>
        <p class="skillsGraphics"><span>DESIGN : </span>{{ details.skillsGraphics }}</p><br>
        <p class="Diplomas"><span>DIPLOMAS : </span>{{ details.Diplomas }}</p>
      </div>
    </div>
      <h3>Experiences</h3>
      <AccordionList>
        <AccordionItem v-for="entry in resume" v-bind:key="entry">
          <template #summary><a class="title">{{ entry.title }}</a></template>
          <div class="resume_entry">
            <p class="company"> {{ entry.compagny }}</p>
            <p class="duration">{{ entry.duration }}</p>
            <p class="desc">{{ entry.description }}</p>
          </div>
        </AccordionItem>
      </AccordionList>

    </div>
  </Transition>

</template>
  
<script>
import "../../assets/accordions.css";
import "../../assets/resume.css";
import { AccordionList, AccordionItem } from "vue3-rich-accordion"
import axios from 'axios'
export default {
  name: 'ResumeEn',
  components: {
    AccordionList,
    AccordionItem
  },
  data() {
    return {
      resume: null,
      details: null,
      isloading: true,
      error: false,
      log: '',
    }
  },
  mounted() {
    axios
      .get(process.env.VUE_APP_API_RESUME + 'en')
      .then(response => (this.resume = response.data.resumeEntities)(this.details = response.data.resumeDetails))
      .catch(error => {
        this.error = true
        this.log = error
      })
      .finally(() => this.isloading = false)
  }
};
</script>