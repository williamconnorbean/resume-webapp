<template>
  <div class="footer__triangle" />
  <footer class="footer">
    <button
      class="footer__btn"
      @click="handleTopScroll"
    >
      <vue-feather type="chevron-up" />
    </button>
    <p>Made with <span style="color: #e25555;">&hearts;</span> by me :)</p>
  </footer>
</template>

<script>
export default {
  name: 'CustomFooter',
  setup() {
    const handleTopScroll = () => {
      window.scrollTo({ top: 0 });
    };

    return {
      handleTopScroll
    };
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables/colors';

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0.5rem;
  background-color: $navy;
  color: $white;

  &__triangle {
    width: auto;
    height: 0;
    border-left: 50vw solid $navy;
    border-right: 50vw solid $navy;
    border-top: 80px solid $white;
  }

  &__btn {
    display: flex;
    width: fit-content;
    padding: 0.75rem;
    border: 2px solid $navy;
    border-radius: 50%;
    background-color: $white;
    margin-top: -24px;
    transition: background-color .2s ease, color .2s ease;
    margin-bottom: 1.5rem;

    i {
      color: $med-grey;
    }

    &:hover, &:focus {
      background-color: $green;

      i {
        color: $white;
      }
    }
  }
}
</style>
