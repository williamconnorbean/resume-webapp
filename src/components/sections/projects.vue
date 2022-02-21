<template>
  <fade-in-section 
    id="projects"
  >
    <section
      class="projects container"
    >
      <h2 class="projects__title">
        Projects
      </h2>
      <div
        class="projects__container"
      >
        <div
          v-for="project in projects"
          :key="project.id"
          class="projects__tile"
        >
          <project-tile
            :id="project.id"
            :name="project.name"
            :thumbnail="project.thumbnail"
            :image="project.image"
            :link="project.link"
            :tech="project.tech"
            :description="project.description"
          />
        </div>
      </div>
    </section>
  </fade-in-section>
</template>

<script>
import FadeInSection from '../shared/fade-in-section.vue';
import markdownResume from '../../assets/markdown-resume.png';
import musicEqualizer from '../../assets/music-equalizer.png';
import personalWebsite from '../../assets/personal-website.png';
import ProjectTile from '../shared/project-tile.vue';
import retroroasters from '../../assets/retro-roasters.png'
import rlModel from '../../assets/rl-model.png';
import rrDetails from '../../assets/rr-detailed-image.png';
import summervibes from '../../assets/summervibes.png';
import svDetails from '../../assets/sv-details.png';

export default {
  name: 'Projects',
  components: {
    ProjectTile,
    FadeInSection
  },
  setup() {
    const projects = [
      {
        id: "sv",
        name: "SummerVibes App",
        thumbnail: summervibes,
        image: svDetails,
        link: "",
        tech: "React / Express / MongoDB",
        description: 'The SummerVibes App is a web application used to track statistics about my and my friends\' annual collaborative Spotify playlist.\n\nSince COVID-19, I\'ve extended the app to allow us to remotely vote on songs, where we can \'purge\' out songs that the majority don\'t enjoy.\n\nDeveloped utilizing React with Redux, Express.js, MongoDB, and the Spotify Web API.'
      },
      {
        id: "retroroasters",
        name: "Retro Roasters",
        thumbnail: retroroasters,
        image: rrDetails,
        link: "https://retroroasterscoffee.com",
        tech: "Shopify / Vue.js",
        description: 'A website I built on the Shopify platform for a friend to reach a larger audience for their coffee brand.\n\nBuilt using the Shopify theme development toolkit with Vue.js layered on top.'
      },
      {
        id: "mv",
        name: "Music Visualizer",
        thumbnail: musicEqualizer,
        image: null,
        link: "",
        tech: "Arduino / C++",
        description: 'The Music Visualizer is a fancy name I\'ve given to an Arduino project that flashes individually addressable LEDs to various frequencies of music.\n\nCreated using a spectrum Arduino shield utilizing the Adafruit NeoPixel animation library.'
      },
      {
        id: "website",
        name: "Personal Website",
        thumbnail: personalWebsite,
        image: null,
        link: "",
        tech: "Vue.js",
        description: 'Yup, this is the site you\'re currently browsing! It\'s a personal portfolio where you can learn a bit about me, and the projects I\'ve worked on over the years.\n\nDeveloped using Vue.js and Bootstrap.'
      },
      {
        id: "gpr",
        name: "GitHub Pages Resume",
        thumbnail: markdownResume,
        image: null,
        link: "https://github.com/williamconnorbean/williamconnorbean.github.io",
        tech: "Markdown / Jekyll",
        description: 'A GitHub tutorial on how to host and format your own resume using Markdown, GitHub Pages, and Jekyll.\n\nThe tutorial has a strong emphasis on the technical writing principles stated in Andrew Etter\'s book \"Modern Technical Writing\".'
      },
      {
        id: "qlearn",
        name: "Q-Learning",
        thumbnail: rlModel,
        image: null,
        link: "https://github.com/williamconnorbean/Q-Learning",
        tech: "Python / OpenAI",
        description: 'A python demonstration, accompanied by a technical paper, of the reinforcement learning technique, Q-Learning.\n\nImplemented using the OpenAI Gym toolkit, using the FrozenLake-v0 environment.'
      }
    ];

    return {
      projects
    };
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/mixins/typography';
@import '../../scss/mixins/layout';

.projects {
  @include section;

  &__container {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  &__title {
    @include section-title;
  }
}
</style>
