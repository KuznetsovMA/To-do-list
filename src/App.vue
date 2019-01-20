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
            v-bind:checked="task.done === true"
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
    },
    getModal () {
      return this.$store.getters['getModal']
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

  html {
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;

    background-color: $cookieColor;
  }

  .app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .todo {
    position: relative;

    width: 550px;

    background: white;
    box-shadow: 0 4px 10px 1px $darkBlueColorAlpha;
  }

  .list {
    margin: 0;
    padding: 60px 0 80px 70px;

    list-style: none;
    font-size: 25px;
    font-family: "Open Sans", Arial, sans-serif;
    color: $darkBlueColor;
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

    background-image: url("./assets/checked.png");
    background-repeat: no-repeat;
    background-position: center;
    border: 4px solid $limeColor;
    border-radius: 50%;
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

    background-color: $limeColor;
    background-image: url("./assets/plus.png");
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    border-radius: 50%;
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
    padding: 0;
    overflow: hidden;

    white-space: nowrap;

    border: 0;

    clip: rect(0 0 0 0);
    clip-path: inset(100%);
  }

</style>


