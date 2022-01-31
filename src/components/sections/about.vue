<template>
  <section
    id="about"
    class="about container"
  >
    <h2 class="about__title">
      About me
    </h2>
    <div class="about__info">
      <img
        src="../../assets/headshot.png"
        class="about__headshot rounded-circle"
        alt="headshot"
      >
      <p class="about__description">
        I'm a full-stack software developer specializing in Web-Based Systems, Databases, Networks and Security, and Software Engineering.
        I've got a strong passion for learning, building, and collaborating in a way that provides the most value to project stakeholders.
        <br><br>
        Outside of software development you can find me snowboarding, working on my car, and enjoying a casual beer with my
        closest friends.
      </p>
    </div>
    <a
      href="https://williamconnorbean.github.io/"
      target="_blank"
      type="button"
      class="about__btn"
    >
      Download my resume
    </a>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables/colors';
@import '../../scss/variables/screen-sizes';
@import '../../scss/mixins/typography';
@import '../../scss/mixins/layout';

.about {
  @include section;

  &__title {
    @include section-title;
  }

  &__headshot {
    height: 200px;
    width: 200px;
    box-shadow: 0 2px 8px 0px grey;
    margin-bottom: 2rem;
  }

  &__btn {
    font-weight: bold;
    margin-top: 1.5rem;
    border: 2px solid $green;
    text-decoration: none;
    color: $med-grey;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    transition: all 0.3s ease;
  }

  &__btn:hover {
    background-color: $green;
    color: $white;
    border-radius: 0.5rem;
  }

  @media (min-width: $md) {
    &__info {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: left;
    }

    &__description {
      max-width: 30rem;
      margin-bottom: 0;
    }

    &__headshot {
      margin-right: 3rem;
      margin-bottom: 0;
    }
  }
}
</style>
