<template>
    <transition name="translate" mode="out-in" appear>
        <div  class="archive_container  project_container">
            <div class="archive_item" v-bind:class="'active_' + archive.active" v-for="archive in ressources" v-bind:key="archive">
                <a v-bind:class="'active_' + archive.active" id="archive_link" target="_blank" v-bind:href="archive.link">
                    <div class="archive_entry_container">
                        <img class="archive_image" :src="archive.Image">
                        <div class="data">
                        <p class="entry_name">{{ archive.fullTitle }}</p>
                        <p class="repository">Repository</p>
                        <p class="status" v-if="archive.active === true"><i class="fa-solid fa-lock-open"></i> Public</p>
                        <p class="status" v-else><i class="fa-solid fa-lock"></i> Private</p>
                    </div>
                    </div>
                </a>
            </div>
        </div>
    </transition>
</template>

<script>
import "../assets/archive.css";
import { mapState, mapActions } from "vuex";

export default {
  name: "RessourcesView",
  computed: {
    ressources() {
      return this.$store.state.ressources;
    },
    ...mapState(["isLoading", "error"]),
  },
  created() {
    this.fetchRessources();
  },
  methods: {
    ...mapActions(["fetchRessources"]),
  },
  data() {
    return {
      lang: 'en',
    };
  },
  activated(){
    document.title = process.env.VUE_APP_TITLE + ' | ' + 'Ressources'
  }
};
</script>
      