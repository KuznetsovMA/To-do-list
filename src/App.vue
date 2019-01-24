<template>
  <div class="app">
    <fade v-if="getModal" />
    <div class="wrapper">
      <section class="todo">
        <transition name="bounce">
          <modal v-if="getModal" />
        </transition>
        <ul class="list">
          <template v-for="(task, index) in getUserTasks">
            <li class="list__item" 
            :key="index">
              <input class="checkbox visually-hidden" 
              :name="task.title" 
              :id="task.title" 
              :checked="task.completed"
              type="checkbox" />
              <label :for="task.title"> {{ task.title }} </label>
            </li>
          </template>
        </ul>
        <button @click.prevent="changeModalState" class="todo__add">
        </button>
      </section>
      <section class="users">
        <template v-for="(user, index) in getUsers">
          <button :key="index + 1" class="user__button"
          @click="pushTasksByUser(index + 1)">
            <span class="user__number"> Id: {{ index + 1}} </span>
          </button>
        </template>
      </section>
    </div>
  </div>
</template>

<script>
  import modal from './views/modal'
  import fade from './views/fade'

  export default {
    computed: {
      getTasks() {
        return this.$store.getters['getTasks']
      },
      getModal() {
        return this.$store.getters['getModal']
      },
      getUsers() {
        return this.$store.getters['getUsers']
      },
      getUserTasks() {
        return this.$store.getters['getUserTasks']
      }
    },
    methods: {
      changeModalState() {
        this.$store.dispatch('changeModalState')
      },
      getData() {
        this.$store.dispatch('getData')
          .then(() => {
            this.changed = true
          })
      },
      pushTasksByUser(user) {
        const result = this.$store.state.tasks.filter(function(task) {
          return task.userId === user
        })
        this.$store.commit('set', {name: 'tasksByUser', value: result})
      }
    },
    components: {
      modal,
      fade
    },
    created() {
      this.getData()
    }
  }
</script>

<style lang="scss">
  @import './assets/scss/style.scss';
</style>