<template>
  <div
  class="modal"
  ref="modal">
    <form action="https://jsonplaceholder.typicode.com/todos" method="POST">
      <button @click.prevent="changeModalState" class="modal__close">
      </button>
      <h1 class="modal__title">Add New Task</h1>
      <input 
      ref="field"
      class="modal__field" 
      type="text"
      placeholder="" 
      name="name"
      maxlength="35"
      >
      <button
      @click.prevent="addTask"
      @keyup.enter="addTask" 
      class="modal__submit">OK</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    computed: {
      getUserTasks() {
        return this.$store.getters['getUserTasks']
      }
    },
    methods: {
      changeModalState() {
        this.$store.dispatch('changeModalState')
      },
      pushTasksByUser(user) {
        const result = this.$store.state.tasks.filter((task) => task.userId === user)
        this.$store.commit('set', {name: 'tasksByUser', value: result})
      },
      addTask() {
        if (/\S/.test(this.$refs.field.value)) {
          this.changeModalState()
          this.$store.commit('addTask', {
            completed: false,
            title: this.$refs.field.value,
            userId: 11
          })
          this.pushTasksByUser(11)
          this.sendData()
        } else {
          this.$refs.field.classList.add('modal__field--error')
        }
      },
      sendData() {
        axios.post('https://jsonplaceholder.typicode.com/todos', {
          task: this.getUserTasks[0]
        })
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }

</script>
