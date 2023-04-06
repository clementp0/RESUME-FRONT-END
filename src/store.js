import Vuex from 'vuex'
import axios from 'axios'

export default new Vuex.Store({
  state: {
    resume: [],
    project: [],
  },
  mutations: {
    resume(state, results) {
      state.resume = results
    },
    project(state, results) {
      state.project = results
    }
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
    }
  },
  getters: {
    getResume(state) {
      return state.resume
    },
    getProject(state) {
      return state.project
    }
  }
})
