<template>
  <div class="app">
    <fade v-if="getModal" />
    <div class="wrapper">
      <todo />
      <users />
    </div>
  </div>
</template>

<script>
  import fade from './views/fade'
  import users from './views/users'
  import todo from './views/todo'

  export default {
    computed: {
      getModal() {
        return this.$store.getters['getModal']
      }
    },
    components: {
      fade,
      users,
      todo
    }
  }
</script>

<style lang="scss">
  @import './assets/scss/style.scss';
</style>