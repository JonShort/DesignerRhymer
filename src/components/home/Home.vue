<template>
  <router-link subject="gill" to="/gill">
    <GillButton />
  </router-link>
</template>

<script>
  import GillButton from '@/components/buttons/GillButton';

  export default {
    components: {
      GillButton,
    },
  };
</script>
