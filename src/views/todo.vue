<template>
    <section class="todo">
        <transition name="bounce">
            <modal v-if="getModal" />
        </transition>
        <ul class="list">
            <template v-for="(task, index) in getUserTasks">
                <li class="list__item" :key="index">
                    <input class="checkbox visually-hidden" :name="task.title" :id="task.title" :checked="task.completed"
                        type="checkbox" />
                    <label :for="task.title"> {{ task.title }} </label>
                </li>
            </template>
        </ul>
        <button @click.prevent="changeModalState" class="todo__add">
        </button>
    </section>
</template>

<script>
  import modal from './modal'
  export default {
    computed: {
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
        modal
    },
    created() {
      this.getData()
    }
  }
</script>

<style>

</style>