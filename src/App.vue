<template>
  <div class="app">
    <section class="todo">
      <ul class="list">
        <li class="list__item">
          <input class="checkbox visually-hidden" name="sweatshirt" type="checkbox" id="sweatshirt" checked/>
          <label for="sweatshirt">Buy new sweatshirt</label>
        </li>
        <li class="list__item">
          <input class="checkbox visually-hidden" name="promotion" type="checkbox" id="promotion" checked/>
          <label for="promotion">Begin promotional phase</label>
        </li>
        <li class="list__item">
          <input class="checkbox visually-hidden" name="read" type="checkbox" id="read"/>
          <label for="read">Read an article</label>
        </li>
        <li class="list__item">
          <input class="checkbox visually-hidden" name="asleep" type="checkbox" id="asleep"/>
          <label for="asleep">Try not to fall asleep</label>
        </li>
        <li class="list__item">
          <input class="checkbox visually-hidden" name="Sherlock" type="checkbox" id="Sherlock"/>
          <label for="Sherlock">Watch ‘Sherlock’</label>
        </li>
        <li class="list__item">
          <input class="checkbox visually-hidden" name="QA" type="checkbox" id="QA"/>
          <label for="QA">Begin QA for the product</label>
        </li>
        <li class="list__item">
          <input class="checkbox visually-hidden" name="walk" type="checkbox" id="walk"/>
          <label for="walk">Go for a walk</label>
        </li>
      </ul>
      <button class="todo__add"></button>
    </section>
  </div>
</template>

<script>
export default {
 
}
</script>

<style>

  body {
    background-color: #f0efe9;
    margin: 0;
  }

  .app {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .todo {
    position: relative;
    width: 750px;
    background: white;
    box-shadow: 0 0 10px 2px rgba(62, 67, 79, 0.2);
  }

  .list {
    list-style: none;
    color: #3e434f;
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
    right: 80px;
    width: 45px;
    height: 45px;

    border: 4px solid #eef0f5;
    border-radius: 50%;
  }

  .checkbox:checked + label::after {
    content: "";
    position: absolute;
    top: 0px;
    right: 80px;
    width: 45px;
    height: 45px;

    border: 4px solid #50e3a4;
    border-radius: 50%;
    background-image: url("./assets/checked.png");
    background-repeat: no-repeat;
    background-position: center;
  }

  .checkbox:checked + label {
    color: #bdc0ca;
  }

  .todo__add {
    position: absolute;
    bottom: -90px;
    left: 285px;

    width: 180px;
    height: 180px;

    border-radius: 50%;
    border: none;

    background-color: #50e3a4;
    background-image: url("./assets/plus.png");
    background-repeat: no-repeat;
    background-position: center;

    box-shadow: 0 0 10px 2px rgba(62, 67, 79, 0.2);
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


