import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { GET_DATA } from '../const'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        tasks: {},
        tasksByUser: {},
        modal: false
    },
    mutations: {
      set(state, {name, value}) {
        return state[name] = value
      },
      addTask (state, task) {
        state.tasks.push(task)
      }
    },
    actions: {
      changeModalState ({commit, state}) {
        commit('set', {name: 'modal', value: !state.modal})
      },
      getData ({commit}) {
        const makeRequest = async () => {
          try {
            const data = await axios.get(GET_DATA)
            console.log(data)
            commit('set', {name: 'tasks', value: data.data})
          } catch (err) {
            console.log(err)
          }
        }
        makeRequest()
      }
    },
    getters: {
      getModal (state) {
        return state.modal
      },
      getUsers (state) {
        let obj = {}
        for (let task = 0; task < state.tasks.length; task++) {
          let str = state.tasks[task].userId
          obj[str] = true
        }
        return Object.keys(obj)
      },
      getUserTasks (state) {
        return state.tasksByUser
      }
    }
})

export default store