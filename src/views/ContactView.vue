<template>
  <transition name="translate" mode="out-in">
  <div class="contact_container">
    <div class="contact_header">
    </div>
    <p class="contact_title">
      Reach me 
    </p>
    <!-- Data loop -->
    <div v-for="socials in contact" v-bind:key="socials">
      <a target="_blank" v-bind:href="socials.url">
        <div class="contact_entry">
          <p class="contact_entry_name">{{ socials.name }} </p>
        </div>
      </a>
    </div>
    <!-- End -->
  </div>
</transition>
</template>
    
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ContactView",
  computed: {
    contact() {
      return this.$store.state.contact;
    },
    ...mapState(["isLoading", "error"]),
  },
  created() {
    this.fetchContact();
  },
  methods: {
    ...mapActions(["fetchContact"]),
  },
  data() {
    return {
      lang: 'en',
    };
  },
  activated(){
    document.title = process.env.VUE_APP_TITLE + ' | ' + 'Contact'
  }
};
</script>
    
<style scoped>
.contact_container {
  width: 350px;
  border: 1px solid var(--gray-dark);
  background-color: var(--white);
  margin: auto;
  /* CHANGE THIS  */
  padding-bottom: 30px;
}

.contact_header {
  height: 120px;
  background-size: cover;
  border-bottom: 1px solid var(--gray-dark);
  opacity: .8;
  background-image: url("../images/buildings.jpeg");
}

.contact_title {
  border-bottom:1px solid var(--gray-dark);
  margin: auto;
  margin-top: 20px;
  padding-bottom: 20px;
  width: 85%;
  text-align: left;
  color: var(--black);
  font-weight: 600;
}

.contact_entry {
  border: 1px solid var(--gray-dark);
  border-radius: 5px;
  margin: auto;
  margin-top: 20px;
  width: 85%;
  display: flow-root;
}

.contact_entry:hover {
  background-color: var(--white);
  transition-duration: 0.3s;
}

.contact_entry_name {
  float: right;
  margin-right: 10px;
  color: var(--black);
}
</style>
    