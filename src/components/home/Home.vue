<template>
  <div :class="$style.container">
    <router-link v-on:click.native="calcBkg" subject="gill" to="/gill">
      <GillButton />
    </router-link>
    <router-link v-on:click.native="calcBkg" subject="short" to="/short">
      <ShortButton />
    </router-link>
  </div>
</template>

<script>
  import GillButton from '@/components/buttons/GillButton';
  import ShortButton from '@/components/buttons/ShortButton';

  export default {
    components: {
      GillButton,
      ShortButton,
    },
    props: ['calcBkg'],
  };
</script>

<style module>
  .container {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
