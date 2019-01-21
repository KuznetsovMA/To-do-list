<template>
    <div class="fade"></div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import "../scss/vars.scss";

.fade {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100%;
  height: 100%;

  background-color: $limeColor;
  opacity: 0.8;
}

</style>