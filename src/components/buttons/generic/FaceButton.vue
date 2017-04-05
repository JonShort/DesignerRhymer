<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<script>
  export default {
  };
</script>

<style module>
  .container {
    cursor: pointer;
    height: calc(15vh + 15vw);
    margin: 5vmin;
    max-height: 100vmin;
    max-width: 100vmin;
    width: calc(15vh + 15vw);
  }

  .container:hover, .container:focus path {
    fill: #fff;
  }
</style>
