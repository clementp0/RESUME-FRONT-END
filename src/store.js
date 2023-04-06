import Vuex from 'vuex'
import axios from 'axios'

export default new Vuex.Store({
  state: {
    resume: [],
    project: [],
    intro:[],
    contact:[],
    ressources:[],
  },
  mutations: {
    resume(state, results) {
      state.resume = results
    },
    project(state, results) {
      state.project = results
    },
    intro(state, results) {
      state.intro = results
    },
    contact(state, results) {
      state.contact = results
    },
    ressources(state, results) {
      state.ressources = results
    },
  },
  actions: {


    // RESUME DATA
    fetchResume({ commit }) {
      axios.get(process.env.VUE_APP_API + 'resume')
        .then(response => {
          commit('resume', response.data)
        })
    },

    // PROJECT DATA
    fetchProject({ commit }) {
      axios.get(process.env.VUE_APP_API + 'project')
        .then(response => {
          commit('project', response.data)
        })
    },
      // INTRO DATA
      fetchIntro({ commit }) {
        axios.get(process.env.VUE_APP_API + 'intro')
          .then(response => {
            commit('intro', response.data)
          })
      },
      // CONTACT DATA
      fetchContact({ commit }) {
        axios.get(process.env.VUE_APP_API + 'socials')
          .then(response => {
            commit('contact', response.data)
          })
      },

      // RESSOURCES DATA
      fetchRessources({ commit }) {
        axios.get(process.env.VUE_APP_API + 'archive')
          .then(response => {
            commit('ressources', response.data)
          })
      }
  },
  getters: {
    getResume(state) {
      return state.resume
    },
    getProject(state) {
      return state.project
    },
    getIntro(state) {
      return state.intro
    },
    getContact(state) {
      return state.contact
    },
    getRessources(state) {
      return state.ressources
    }
  }
})
