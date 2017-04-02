<template>
  <FullScreenQuote :calcBkg="calcBkg" :quotes="QuoteList" :name="SubjectName" :link="Link" />
</template>

<script>
  import { SubjectName, QuoteList, Link } from '@/data/people/ShortData';
  import FullScreenQuote from '@/components/fullscreen-quote/FullScreenQuote';

  export default {
    components: {
      FullScreenQuote,
    },
    props: ['calcBkg'],
    data() {
      return {
        QuoteList,
        SubjectName,
        Link,
      };
    },
  };
</script>
