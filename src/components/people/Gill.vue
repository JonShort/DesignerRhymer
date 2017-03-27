<template>
  <FullScreenQuote :quotes="QuoteList" :name="SubjectName" :link="Link" />
</template>

<script>
  import { SubjectName, QuoteList, Link } from '@/data/people/GillData';
  import FullScreenQuote from '@/components/fullscreen-quote/FullScreenQuote';

  export default {
    components: {
      FullScreenQuote,
    },
    data() {
      return {
        QuoteList,
        SubjectName,
        Link,
      };
    },
  };
</script>
