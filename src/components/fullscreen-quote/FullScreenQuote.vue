<template>
  <section :class="$style.container">
    <p :class="$style.text"><span :class="$style.quote">{{value}}</span> <a :class="$style.link" :href="nameLink" target="_blank">{{subject}}</a></p>
    <RefreshButton :onClick="calc" text="Another one" />
  </section>
</template>

<script>
  import RefreshButton from '@/components/buttons/RefreshButton';
  import getRandom from '@/functions/getRandom';

  export default {
    components: {
      RefreshButton,
    },
    props: ['quotes', 'name', 'link'],
    data() {
      return {
        list: this.quotes,
        subject: this.name,
        nameLink: this.link,
        value: getRandom(this.quotes),
      };
    },
    methods: {
      calc() {
        this.value = getRandom(this.list);
      },
    },
  };
</script>

<style module>
  .container {
    text-align: center;
  }

  .text {
    font-size: 10vmin;
    padding: 6vmin 0;
  }

  .quote {
    color: #FFFFFF;
  }

  .link {
    color: #000;
    text-decoration: none;
  }

  .link:hover, .link:focus {
    text-decoration: underline;
  }
</style>
