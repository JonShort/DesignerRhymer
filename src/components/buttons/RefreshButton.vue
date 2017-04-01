<template>
  <GenericButton v-on:click.native="onClick" :text="text" />
</template>

<script>
  import GenericButton from '@/components/buttons/GenericButton';

  export default {
    props: ['onClick', 'text'],
    components: {
      GenericButton,
    },
  };
</script>
