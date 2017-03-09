<template>
  <div id="app" v-bind:style="{backgroundColor: color}">
    <section :class="$style.text">
      <p><span :class="$style.quote">{{current}}</span> {{subject}}</p>
    </section>
  </div>
</template>

<script>
  const SubjectName = 'Jonathan Gill';

  const QuoteList = [
    'Run of the mill',
    'Over the hill',
    'Ate a dodgy pill',
    'Going in for the kill',
    'Writing his will',
    'Sharpening his drill',
    'Somehow he is still',
    'All on his bill',
    'At the shopping till',
  ];

  const currentQuote = QuoteList[Math.floor(Math.random() * QuoteList.length)];

  const ColorList = [
    '#e7040f',
    '#ff6300',
    '#ffb700',
    '#5e2ca5',
    '#d5008f',
    '#ff41b4',
    '#137752',
    '#001b44',
    '#357edd',
  ];

  const currentColor = ColorList[Math.floor(Math.random() * ColorList.length)];

  export default {
    name: 'app',
    data() {
      return {
        color: currentColor,
        current: currentQuote,
        subject: SubjectName,
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

<style module>
  .text {
    font-size: 5vw;
  }

  .quote {
    color: #FFFFFF;
  }
</style>
