<template>
  <div class="app">
    <fade v-if="getModal" />
    <div class="wrapper">
        <section class="todo">
          <transition name="bounce">
          <modal v-if="getModal" />
          </transition>
          <ul class="list">
            <template v-for="task in getTasks.slice(0,5)">
              <li class="list__item" :key="task.id">
                <input 
                class="checkbox visually-hidden" 
                :name="task.title" 
                :id="task.title" 
                :checked="task.completed"
                type="checkbox" 
                />
                <label :for="task.title"> {{ task.title }} </label>
              </li>
            </template>
          </ul>
          <button 
          @click.prevent="changeModalState" 
          class="todo__add"
          >
          </button>
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
      fade
    },
    beforeMount() {
      this.getData()
    }
  }

</script>

<style lang="scss">
@import './assets/scss/style.scss';
</style>
