<template>
  <section>
    <p :class="$style.text"><span :class="$style.quote">{{current}}</span> <a :class="$style.link" :href="nameLink" target="_blank">{{subject}}</a></p>
  </section>
</template>

<script>

  export default {
    props: ['quote', 'name', 'link'],
    data() {
      return {
        current: this.quote,
        subject: this.name,
        nameLink: this.link,
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

  .link {
    color: #000;
    text-decoration: none;
  }

  .link:hover, .link:focus {
    text-decoration: underline;
  }
</style>
