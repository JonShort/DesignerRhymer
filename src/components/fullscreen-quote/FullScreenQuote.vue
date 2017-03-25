<template>
  <section :class="$style.text">
    <p><span :class="$style.quote">{{current}}</span> {{subject}}</p>
  </section>
</template>

<script>

  export default {
    props: ['quote', 'name'],
    data() {
      return {
        current: this.quote,
        subject: this.name,
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
