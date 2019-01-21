<template>
  <div class="app">
    <fade v-if="getModal" />
    <div class="wrapper">
        <section class="todo" v-show="changed">
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
    data() {
      return {
        changed: false
      }
    },
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
@import "./scss/fonts.scss";
@import "./scss/vars.scss";

  body {
    height: 100%;
    margin: 0;

    background-color: $cookieColor;
  }

  .wrapper {
    padding-top: 50px;
  }

  .todo {
    position: relative;

    width: 550px;
    margin: 0 auto;
    padding-top: 0;

    background: white;
    box-shadow: 0 4px 10px 1px $darkBlueColorAlpha;
  }

  .list {
    width: 400px;
    margin: 0 auto;
    padding: 60px 0 80px 0;

    list-style: none;
    font-size: 25px;
    font-family: "Gotham Rounded", "Open Sans", sans-serif;
    color: $darkBlueColor;
  }

  .list__item {
    position: relative;

    width: 300px;
  }

  .list__item label {
    display: block;
    padding-bottom: 30px;

    cursor: pointer;

    user-select: none;
  }

  .checkbox + label::before {
    content: "";
    position: absolute;
    top: 0;
    right: -100px;

    width: 42px;
    height: 42px;

    border: 4px solid $lightGrayColor;
    border-radius: 50%;
  }

  .checkbox:hover + label::before {
    border-color: $grayColor;
    box-shadow: 0 0 10px 2px $darkBlueColorAlpha;
  }

  .checkbox:checked + label::after {
    content: "";
    position: absolute;
    top: 0;
    right: -100px;

    width: 42px;
    height: 42px;

    background-image: url("./assets/checked.png");
    background-repeat: no-repeat;
    background-position: center;
    border: 4px solid $limeColor;
    border-radius: 50%;
  }

  .checkbox:checked + label {
    color: $grayColor;;
    text-decoration: line-through;
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
    transition: 0.15s;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 15px 3px $darkBlueColorAlpha;
    }
  }

  .bounce-enter-active {
    animation: bounce-in 0.5s;
  }
  .bounce-leave-active {
    animation: bounce-in 0s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
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
