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
    height: 30vmax;
    margin: 5vmin;
    max-height: 100vmin;
    max-width: 100vmin;
    width: 30vmax;
  }

  .container:hover, .container:focus path {
    fill: #fff;
  }
</style>
