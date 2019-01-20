import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        tasks: [
            {
              name: 'Buy new sweatshirt',
              status: 'done',
              id: 1
            },
            {
              name: 'Begin promotional phase',
              id: 2
            },
            {
              name: 'Read an article',
              id: 3
            },
            {
              name: 'Try not to fall asleep',
              id: 4
            },
            {
              name: 'Watch ‘Sherlock’',
              id: 5
            },
            {
              name: 'Begin QA for the product',
              id: 6
            },
            {
              name: 'Go for a walk',
              id: 7
            }
        ],
        modal: false,
        counter: 0
    },
    mutation: {
      set(state, {name, value}) {
        return state[name] = value
      }
    },
    actions: {
      changeModalState ({commit, state}) {
        commit('set', {name: 'counter', value: state.counter + 1})
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