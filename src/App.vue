<template>
  <div class="app">
    <fade v-if="fade"/>
    <section class="todo">
      <modal/>
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
      <button class="todo__add"></button>
    </section>
  </div>
</template>

<script>
import fade from './views/fade'
import modal from './views/modal'

export default {
  data: {
    fade: false
  },
  computed: {
    getTasks () {
      return this.$store.getters['getTasks']
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
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .todo {
    position: relative;
    width: 750px;
    background: white;
    box-shadow: 0 0 10px 2px $darkBlueColorAlpha;
  }

  .list {
    list-style: none;
    color: $darkBlueColor;
    font-family: 'Open Sans', Arial, sans-serif;
    font-size: 33px;
    padding: 80px 0px 80px 100px;
    margin: 0;
  }

  .list__item {
    padding-bottom: 40px;
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
    top: 0px;
    right: 100px;
    width: 45px;
    height: 45px;

    border: 4px solid $lightGrayColor;
    border-radius: 50%;
  }

  .checkbox:checked + label::after {
    content: "";
    position: absolute;
    top: 0px;
    right: 100px;
    width: 45px;
    height: 45px;

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
    left: 285px;

    width: 180px;
    height: 180px;

    border-radius: 50%;
    border: none;

    background-color: $limeColor;
    background-image: url("./assets/plus.png");
    background-repeat: no-repeat;
    background-position: center;

    box-shadow: 0 0 10px 2px $darkBlueColorAlpha;

    cursor: pointer;
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


