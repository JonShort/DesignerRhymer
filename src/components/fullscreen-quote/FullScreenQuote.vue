<template>
  <section :class="$style.container">
    <div :class="$style.text">
      <p :class="$style.quote">{{value}}</p>
      <p><a :class="$style.link" :href="link" target="_blank">{{name}}</a></p>
    </div>
    <div :class="$style.buttons">
      <GenericButton v-on:click.native="refresh" text="Another one" />
      <router-link subject="home" to="/">
        <GenericButton text="Home" :link="true" />
      </router-link>
    </div>
  </section>
</template>

<script>
  import GenericButton from '@/components/buttons/generic/GenericButton';
  import getRandom from '@/functions/getRandom';

  export default {
    components: {
      GenericButton,
    },
    props: ['quotes', 'name', 'link', 'calcBkg'],
    data() {
      return {
        value: getRandom(this.quotes, 'quote'),
      };
    },
    methods: {
      refresh() {
        this.value = getRandom(this.quotes, 'quote');
        this.calcBkg();
      },
    },
  };
</script>

<style module>
  .container {
    text-align: center;
    width: 100%;
  }

  .buttons {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }

  .text {
    display: flex;
    flex-wrap: wrap;
    font-size: 10vmin;
    padding: 20vmin 0;
    justify-content: center;
  }

  .text p {
    margin: 0 1vmin;
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
