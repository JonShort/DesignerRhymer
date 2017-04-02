<template>
  <div :class="$style.container">
    <router-link subject="gill" to="/gill">
      <GillButton />
    </router-link>
    <router-link subject="short" to="/short">
      <GenericButton :class="$style.generic" text="JON SHORT" />
    </router-link>
  </div>
</template>

<script>
  import GillButton from '@/components/buttons/GillButton';
  import GenericButton from '@/components/buttons/GenericButton';

  export default {
    components: {
      GillButton,
      GenericButton,
    },
  };
</script>

<style module>
  .container {
    align-items: center;
    display: flex;
  }

  .generic {
    margin: 4vmin;
  }
</style>
