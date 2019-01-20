<template>
    <div class="fade"></div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  $limeColor: #50e3a4;
  
  .fade {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 100;
      opacity: 0.8;
      background-color: $limeColor;
  }
</style>
