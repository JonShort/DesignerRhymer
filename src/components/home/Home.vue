<template>
  <div id="home">
    <router-link to="/gill">
      <div :class="$style.link"></div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'home',
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
