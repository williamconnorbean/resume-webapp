<template>
  <section
    id="home"
    class="home"
  >
    <Particles
      id="tsparticles"
      class="home__particles"
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
        detectRetina: true,
        fullScreen: {
          enable: false
        }
      }"
    />
    <div class="home__title container">
      <h1>Hello, I'm <span class="home__name">Connor Bean</span>.</h1>
      <h1>I'm a Full Stack Software Developer.</h1>
      <a
        href="#about"
        type="button"
        class="home__btn"
      >
        Learn about me
        <vue-feather type="chevron-right" />
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss">
@import '../../scss/variables/colors';

.home {
  height: 100vh;
  background-color: $navy;

  &__particles {
    width: 100%;
    height: 100%;
  }

  &__title {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    font-weight: bold;
    margin-top: 0.5rem;
    border: 2px solid $white;
    text-decoration: none;
    color: $white;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    transition: all 0.3s ease;

    i {
      margin-left: 0.25rem;
      transition: transform 0.3s ease;
    }
  }

  &__btn:hover {
    background-color: $green;
    border-color: $green;
    color: $white;
    border-radius: 0.5rem;

    i {
      transform: rotate(90deg);
    }
  }
}
</style>
