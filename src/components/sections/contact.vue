<template>
  <section
    id="contact"
    class="contact container"
  >
    <h2 class="contact__title">
      Contact
    </h2>
    <h3 class="contact__header">
      Here are some easy ways to reach out.
    </h3>
    <div class="contact__social-container">
      <div class="contact__social-item">
        <Icon type="mail" />
        <p class="contact__social-header">
          Email me
        </p>
        <a href="mailto:williamconnorbean@gmail.com">williamconnorbean@gmail.com</a>
      </div>
      <div class="contact__social-item">
        <Icon type="linkedin" />
        <p class="contact__social-header">
          Let's connect
        </p>
        <a
          href="https://ca.linkedin.com/in/connor-bean-160987170"
          target="_blank"
        >LinkedIn Profile</a>
      </div>
    </div>
  </section>
</template>

<script>
import Icon from '../shared/icon.vue';

export default {
  name: 'Contact',
  components: {
    Icon
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/mixins/typography';
@import '../../scss/mixins/layout';
@import '../../scss/variables/colors';

.contact {
  @include section;
  text-align: center;

  &__title {
    @include section-title;
  }

  &__header {
    margin-bottom: 2rem;
    color: $med-grey;
  }

  &__social-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
  }

  &__social-header {
    color: $green;
    font-weight: bold;
    margin: 0.75rem 0 0;
  }

  &__social-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;

    a {
      color: $med-grey;
      text-decoration: none;
      padding: 0.25rem;

      &:hover, &:focus {
        text-decoration: underline;
      }
    }
  }
}
</style>
