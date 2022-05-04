<template>
  <section class="card">
    <h4>{{ name }}<h4>
    <img :src="thumbnail" />
    <p>{{ instructions }}</p>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import type { PropType } from 'vue';
  
  export default Vue.extend({
    name: 'DrinkCard',
    props: {
      SlideObject: {
        type: Object as PropType<SlideObject>,
        required: true,
      },
    },
    components: {
    },
    data() {
      return {
      }
    },
  });
</script>
<style scoped lang="scss">

</style>