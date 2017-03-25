<template>
  <router-link subject="gill" to="/gill">
    <div :class="$style.link"></div>
  </router-link>
</template>

<script>
  export default {
  };
</script>

<style module>
  .link {
    border: 10px solid #fff;
    cursor: pointer;
    height: 200px;
    width: 200px;
  }

  .link:hover, .link:focus {
    background: #fff;
  }
</style>
