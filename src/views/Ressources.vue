<template>
    <transition name="translate" mode="out-in">
        <div v-if="!isloading && !error" class="archive_container  project_container">
            <!-- Data loop -->
            <div class="archive_item" v-bind:class="'active_' + archive.active" v-for="archive in archive" v-bind:key="archive">
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
            <!-- End -->
        </div>
    </transition>
    <img v-if="isloading || error" alt="loading_ico" src="../images/loading.svg">
</template>

<script>
import "../assets/archive.css";
import axios from 'axios';
export default {
    name: 'RessourcesView',
    data() {
        return {
            archive: null,
            isloading: true,
            error: false,
            log: ''
        }
    },

    mounted() {
        axios
            .get(process.env.VUE_APP_API_ARCHIVE)
            .then(response => (this.archive = response.data))
            .catch(error => {
                this.error = true
                this.log = error
            })
            .finally(() => this.isloading = false)
    },
    activated() {
        document.title = process.env.VUE_APP_TITLE + ' | ' + 'Archive'
    }
};
</script>
      