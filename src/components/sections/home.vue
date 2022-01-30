<template>
  <section class="home">
    <Particles
      id="tsparticles"
      :options="{
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse'
            },
            resize: true
          }
        },
        particles: {
          color: {
            value: '#ffffff'
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1
          },
          collisions: {
            enable: true
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'out',
            random: false,
            speed: 2,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 60
          },
          opacity: {
            value: 0.5
          }
        },
        detectRetina: true
      }"
    />
    <div className="home__title">
      <h1>Hello, I'm <span className="home__name">Connor Bean</span>.</h1>
      <h1>I'm a full-stack software developer.</h1>
      <a
        href="#about"
        type="button"
        className="home__btn"
      >
        Learn about me
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables/colors';

.home {
  height: 100vh;
  background-color: #252934;

  &__title {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    color: $white;
  }

  &__name {
    color: $green;
    font-weight: bold;
  }

  &__btn {
    font-weight: bold;
    margin-top: 0.5rem;
    border: 2px solid $white;
    text-decoration: none;
    color: $white;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    transition: all 0.3s ease;
  }

  &__btn:hover {
    background-color: $green;
    border-color: $green;
    color: $white;
    border-radius: 0.5rem;
  }
}
</style>
