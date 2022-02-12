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
        <br><br>
        I've got a strong passion for learning and collaborating with teams to build systems that have a direct positive impact on people's everyday lives.
        <br><br>
        Outside of software development you can find me snowboarding, working on my car, and enjoying a casual beer with my
        closest friends.
      </p>
    </div>
    <a
      :href="pdf"
      target="_blank"
      type="button"
      class="about__btn"
    >
      Download my resume
      <vue-feather type="download" />
    </a>
  </section>
</template>

<script>
import pdf from '../../assets/connor-bean_02-12-2022_resume.pdf';

export default {
  name: 'About',
  setup() {
    return {
      pdf
    };
  }
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
    display: flex;
    align-items: center;
    font-weight: bold;
    margin-top: 1.5rem;
    border: 2px solid $green;
    text-decoration: none;
    color: $med-grey;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    transition: all 0.3s ease;

    i {
      margin-left: 0.5rem;
    }
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
