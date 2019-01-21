<template>
    <div class="modal">
        <form action="https://jsonplaceholder.typicode.com/todos" method="POST">
            <button 
            @click.prevent="changeModalState"
            class="modal__close" 
            >
            </button>
            <h1 class="modal__title">Add New Task</h1>
            <input class="modal__field" type="text" name="name">
            <button class="modal__submit">OK</button>
        </form>
    </div>
</template>

<script>
export default {
  methods: {
      changeModalState () {
      this.$store.dispatch('changeModalState')
    }
  }
}
</script>

<style lang="scss">
$lightGrayColor: #eef0f5;
$darkBlueColor: #3e434f;
$darkBlueColorAlpha: rgba(62, 67, 79, 0.2);
$limeColor: #50e3a4;

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

  font-family: "Open Sans", Arial, sans-serif;
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
  font-family: "Open Sans", Arial, sans-serif;
  text-align: center;
  color: $darkBlueColor;

  border: none;
  border-bottom: 2px solid $lightGrayColor;

  &:focus {
    outline: none;
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
}

.modal__submit {
  display: block;
  width: 350px;
  margin: 0 auto;
  padding: 14px;

  font-weight: 300;
  font-size: 25px;
  font-family: "Open Sans", Arial, sans-serif;
  color: white;

  background-color: $limeColor;
  border: none;
  border-radius: 30px;
  box-shadow: 0 0 10px 2px $darkBlueColorAlpha;
  cursor: pointer;

  &:focus {
    outline: none;
  }
}

</style>
