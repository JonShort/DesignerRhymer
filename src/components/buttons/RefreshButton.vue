<template>
  <div :class="$style.container" v-on:click="func">
    {{label}}
  </div>
</template>

<script>
  export default {
    props: ['onClick', 'text'],
    data() {
      return {
        func: this.onClick,
        label: this.text,
      };
    },
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
  }

  .container:hover, .container:focus {
    border-color: #fff;
    color: #fff;
  }
</style>
