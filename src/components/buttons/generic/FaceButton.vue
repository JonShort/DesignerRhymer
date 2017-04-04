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
    height: calc(20vh + 20vw);
    margin: 5vmin;
    max-height: 100vmin;
    max-width: 100vmin;
    width: calc(20vh + 20vw);
  }

  .container:hover, .container:focus path {
    fill: #fff;
  }
</style>
