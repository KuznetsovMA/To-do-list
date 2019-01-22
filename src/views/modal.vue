<template>
  <div class="modal">
    <form action="https://jsonplaceholder.typicode.com/todos" method="POST">
      <button @click.prevent="changeModalState" class="modal__close">
      </button>
      <h1 class="modal__title">Add New Task</h1>
      <input 
      ref="field"
      class="modal__field" 
      type="text"
      placeholder="" 
      name="name">
      <button
      @click.prevent="addTask" 
      class="modal__submit">OK</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    computed: {
      getTasks() {
        return this.$store.getters['getTasks']
      }
    },
    methods: {
      changeModalState() {
        this.$store.dispatch('changeModalState')
      },
      addTask() {
        if (/\S/.test(this.$refs.field.value)) {
          this.changeModalState()
          this.$store.commit('addTask', {
            completed: false,
            title: this.$refs.field.value
          })
          this.sendData()
        } else {
          this.$refs.field.style.borderBottom = '2px solid red'
          this.$refs.field.placeholder = `Oops, there's no task`
        }
      },
      sendData() {
        axios.post('https://jsonplaceholder.typicode.com/todos', {
          task: this.getTasks[0]
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

<style lang="scss">
@import "../scss/vars.scss";

.modal {
  position: absolute;
  z-index: 100;

  width: 550px;
  padding-bottom: 50px;

  background-color: white;
  box-shadow: 0 0 10px 2px $darkBlueColorAlpha;
}

form {
  display: flex;
  flex-direction: column;

  font-family: "Gotham Rounded", "Open Sans", sans-serif;
}

.modal__title {
  font-weight: 400;
  font-size: 25px;
  text-align: center;
  color: $darkBlueColor;
}

.modal__field {
  width: 340px;
  height: 30px;
  margin: 20px auto 50px auto;

  font-weight: 300;
  font-size: 25px;
  font-family: "Gotham Rounded", "Open Sans", sans-serif;
  text-align: center;
  color: $darkBlueColor;

  border: none;
  border-bottom: 2px solid $lightGrayColor;

  &:focus {
    outline: none;
    border-color: #bdc0ca;
  }
  
  &:hover {
    border-color: #bdc0ca;
  }

  &::placeholder {
    color: red;
    opacity: 1;
  }
}

.modal__close {
  display: block;
  width: 50px;
  height: 50px;
  margin-top: 20px;
  margin-left: 480px;
  padding: 0;

  background-color: transparent;
  background-image: url("../assets/close.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 26px;
  border: 4px solid $lightGrayColor;
  border-radius: 50%;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    border-color: $grayColor;
    background-image: url("../assets/close-gray.svg");
  }
}

.modal__submit {
  display: block;
  width: 350px;
  margin: 0 auto;
  padding: 14px;

  font-weight: 300;
  font-size: 25px;
  font-family: "Gotham Rounded", "Open Sans", sans-serif;
  color: white;

  background-color: $limeColor;
  border: none;
  border-radius: 30px;
  box-shadow: 0 0 10px 2px $darkBlueColorAlpha;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: $darkLimeColor;
  }
}

</style>
