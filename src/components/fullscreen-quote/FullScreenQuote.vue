<template>
  <div id="fullscreen-quote">
    <section :class="$style.text">
      <p><span :class="$style.quote">{{current}}</span> {{subject}}</p>
    </section>
  </div>
</template>

<script>
  import { SubjectName, QuoteList } from '@/data/people/GillData';

  const currentQuote = QuoteList[Math.floor(Math.random() * QuoteList.length)];

  export default {
    name: 'fullscreen-quote',
    data() {
      return {
        current: currentQuote,
        subject: SubjectName,
      };
    },
  };
</script>

<style module>
  .text {
    font-size: 5vw;
  }

  .quote {
    color: #FFFFFF;
  }
</style>
