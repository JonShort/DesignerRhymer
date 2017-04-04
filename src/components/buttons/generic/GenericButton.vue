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
    border: 2px solid #fff;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 4vmin;
    padding: 10px 25px;
    text-decoration: none;
  }

  .container:hover, .container:focus {
    background-color: rgba(255, 255, 255, 0.15);
    color: #fff;
  }

  .link {
    background: transparent;
    border: none;
    color: #000;
  }
</style>
