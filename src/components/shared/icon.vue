<template>
  <div class="icon">
    <vue-feather
      class="icon__feather"
      :type="type"
    />
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    type: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/mixins/typography';
@import '../../scss/mixins/layout';

.icon {
  display: flex;
  padding: 0.75rem;
  background-color: $white;
  border-radius: 50%;
  box-shadow: 0 1px 5px 0px grey;

  &__feather {
    color: $med-grey;
  }
}
</style>
