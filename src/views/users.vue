<template>
    <section class="users">
        <template v-for="(user, index) in getUsers">
          <button :key="index + 1" class="user__button"
          @click="pushTasksByUser(index + 1)">
            <span
            v-if="(index + 1) <= 10" 
            class="user__number"> 
            User №{{ index + 1}}
            </span>
            <span
            v-else
            class="user__number"> 
            User NEW
            </span>
          </button>
        </template>
    </section>
</template>

<script>
export default {
    computed: {
        getUsers() {
            return this.$store.getters['getUsers']
        }
    },
    methods: {
        pushTasksByUser(user) {
        const result = this.$store.state.tasks.filter(function(task) {
            return task.userId === user
        })
        this.$store.commit('set', {name: 'tasksByUser', value: result})
      }
    }
}
</script>
