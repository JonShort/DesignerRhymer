<template>
  <div :class="$style.container">
    <router-link subject="gill" to="/gill">
      <GillButton />
    </router-link>
    <router-link subject="short" to="/short">
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
