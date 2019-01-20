import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        tasks: [
            {
              name: 'Buy new sweatshirt',
              id: 1,
              done: true
            },
            {
              name: 'Begin promotional phase',
              id: 2,
              done: true
            },
            {
              name: 'Read an article',
              id: 3,
              done: false
            },
            {
              name: 'Try not to fall asleep',
              id: 4,
              done: false
            },
            {
              name: 'Watch ‘Sherlock’',
              id: 5,
              done: false
            },
            {
              name: 'Begin QA for the product',
              id: 6,
              done: false
            },
            {
              name: 'Go for a walk',
              id: 7,
              done: false
            }
        ],
        modal: false
    },
    mutations: {
      set(state, {name, value}) {
        return state[name] = value
      }
    },
    actions: {
      changeModalState ({commit, state}) {
        commit('set', {name: 'modal', value: !state.modal})
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