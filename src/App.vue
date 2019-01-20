<template>
  <div class="app">
    <fade v-if="getModal"/>
    <section class="todo">
      <modal v-if="getModal"/>
      <ul class="list">
        <template  v-for="task in getTasks">
          <li class="list__item" v-bind:key="task.id">
            <input class="checkbox visually-hidden" 
            v-bind:name="task.name" 
            v-bind:id="task.name" 
            type="checkbox" 
            />
            <label v-bind:for="task.name"> {{ task.name }} </label>
          </li>
        </template>
      </ul>
      <button
      @click.prevent="changeModalState" 
      class="todo__add"></button>
    </section>
  </div>
</template>

<script>
import fade from './views/fade'
import modal from './views/modal'

export default {
  computed: {
    getTasks () {
      return this.$store.getters['getTasks']
    }
  },
  methods: {
    changeModalState () {
      this.$store.dispatch('changeModalState')
    }
  },
  components: {
    fade,
    modal
  }
}
</script>

<style lang="scss">
  $cookieColor: #f0efe9;
  $darkBlueColor: #3e434f;
  $darkBlueColorAlpha: rgba(62, 67, 79, 0.2); 
  $lightGrayColor: #eef0f5; 
  $grayColor: #bdc0ca;
  $limeColor: #50e3a4;

  body {
    margin: 0;
    background-color: $cookieColor;
  }

  .todo {
    position: fixed;
    top: 50%;
    left: 50%; 
    transform: translate(-50%, -50%); 
    width: 550px;
    background: white;
    box-shadow: 0 0 10px 2px $darkBlueColorAlpha;
  }

  .list {
    list-style: none;
    color: $darkBlueColor;
    font-family: 'Open Sans', Arial, sans-serif;
    font-size: 25px;
    padding: 60px 0px 80px 70px;
    margin: 0;
  }

  .list__item {
    padding-bottom: 30px;
  }

  .list__item label {
    position: relative;
    display: block;
    cursor: pointer;
    user-select: none;
  }

  .checkbox + label::before {
    content: "";
    position: absolute;
    top: -4px;
    right: 70px;
    width: 42px;
    height: 42px;

    border: 4px solid $lightGrayColor;
    border-radius: 50%;
  }

  .checkbox:checked + label::after {
    content: "";
    position: absolute;
    top: -4px;
    right: 70px;
    width: 42px;
    height: 42px;

    border: 4px solid $limeColor;
    border-radius: 50%;
    background-image: url("./assets/checked.png");
    background-repeat: no-repeat;
    background-position: center;
  }

  .checkbox:checked + label {
    color: $grayColor;
  }

  .todo__add {
    position: absolute;
    bottom: -90px;
    left: 190px;

    width: 170px;
    height: 170px;

    border-radius: 50%;
    border: none;

    background-color: $limeColor;
    background-image: url("./assets/plus.png");
    background-repeat: no-repeat;
    background-position: center;

    box-shadow: 0 0 10px 2px $darkBlueColorAlpha;

    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  .visually-hidden {
    position: absolute;

    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;

    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
</style>


