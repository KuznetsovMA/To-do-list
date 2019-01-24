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
      <users />
    </div>
  </div>
</template>

<script>
  import modal from './views/modal'
  import fade from './views/fade'
  import users from './views/users'

  export default {
    computed: {
      getTasks() {
        return this.$store.getters['getTasks']
      },
      getModal() {
        return this.$store.getters['getModal']
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
      }
    },
    components: {
      modal,
      fade,
      users
    },
    created() {
      this.getData()
    }
  }
</script>

<style lang="scss">
  @import './assets/scss/style.scss';
</style>