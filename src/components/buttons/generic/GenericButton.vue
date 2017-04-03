<template>
  <div :class="[$style.container, link && $style.link]">
    {{text}}
  </div>
</template>

<script>
  export default {
    props: ['text', 'link'],
  };
</script>

<style module>
  .container {
    border: 2px solid #000;
    color: #000;
    cursor: pointer;
    display: inline-block;
    font-size: 4vmin;
    padding: 10px 25px;
    text-decoration: none;
  }

  .container:hover, .container:focus {
    border-color: #fff;
    color: #fff;
  }

  .link {
    border: none;
  }
</style>
