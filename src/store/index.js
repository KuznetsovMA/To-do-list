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
        modal: true
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