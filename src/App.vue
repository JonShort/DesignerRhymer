<template>
  <div id="app" v-bind:style="{backgroundColor: color}">
    <router-view></router-view>
  </div>
</template>

<script>
  import ColorList from '@/data/colors/ColorList';
  import getRandom from '@/functions/getRandom';

  const currentColor = getRandom(ColorList);
  
  export default {
    data() {
      return {
        color: currentColor,
      };
    },
  };
</script>

<style>
  html {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }
  html, body, #app {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
  }
  body {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
</style>
