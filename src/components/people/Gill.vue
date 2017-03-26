<template>
  <FullScreenQuote :quote="currentQuote" :name="SubjectName" :link="Link" />
</template>

<script>
  import getRandom from '@/functions/getRandom';
  import { SubjectName, QuoteList, Link } from '@/data/people/GillData';
  import FullScreenQuote from '@/components/fullscreen-quote/FullScreenQuote';

  const currentQuote = getRandom(QuoteList);

  export default {
    components: {
      FullScreenQuote,
    },
    data() {
      return {
        currentQuote,
        SubjectName,
        Link,
      };
    },
  };
</script>
