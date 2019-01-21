import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { GET_DATA } from '../const'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        tasks: {},
        modal: false
    },
    mutations: {
      set(state, {name, value}) {
        return state[name] = value
      },
      addTask (state, task) {
        state.tasks.unshift(task)
      }
    },
    actions: {
      changeModalState ({commit, state}) {
        commit('set', {name: 'modal', value: !state.modal})
      },
      getData ({commit}) {
        return axios.get(GET_DATA)
        .then(res => {
          console.log(res)
          commit('set', {name: 'tasks', value: res.data})
        })
        .catch(err => console.log(err))
      }
    },
    getters: {
      getTasks (state) {
        return state.tasks
      },
      getModal (state) {
        return state.modal
      }
    }
})

export default store