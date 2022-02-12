<template>
  <fade-in-section>
    <section
      id="projects"
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
import ProjectTile from '../shared/project-tile.vue';
import FadeInSection from '../shared/fade-in-section.vue';
import summervibes from '../../assets/summervibes.png';
import svDetails from '../../assets/sv-details.png'
import retroroasters from '../../assets/retro-roasters.png'
import rrDetails from '../../assets/rr-details.png'

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
        description: `Web application used to track statistics about me and my friends annualcollaborative Spotify playlist.
          Developed utilizing React with Redux, Express.js and the Spotify Web API.`
      },
      {
        id: "retroroasters",
        name: "Retro Roasters",
        thumbnail: retroroasters,
        image: rrDetails,
        link: "https://retroroasterscoffee.com",
        tech: "Shopify / Vue.js",
        description: `A website I built for a friend to reach a larger audience for their coffee brand.
          Built using the Shopify theme development toolkit with Vue.js layered on top.`
      },
      {
        id: "mv",
        name: "Music Visualizer",
        thumbnail: summervibes,
        image: svDetails,
        link: "",
        tech: "Arduino / C++",
        description: `Arduino project that flashes individually addressable LEDs to various
          frequencies of music. Created using a spectrum Arduino shield utilizing
          the Adafruit NeoPixel animation library.`
      },
      {
        id: "website",
        name: "Personal Website",
        thumbnail: summervibes,
        image: svDetails,
        link: "",
        tech: "Vue.js",
        description: `A personal portfolio where you can learn a bit about me. Yup, the one you're looking at.
          Developed using React and Bootstrap.`
      },
      {
        id: "gpr",
        name: "GitHub Pages Resume",
        thumbnail: summervibes,
        image: svDetails,
        link: "https://github.com/williamconnorbean/williamconnorbean.github.io",
        tech: "Markdown / Jekyll",
        description: `Tutorial on how to host and format a resume using Markdown, GitHub Pages,
          and Jekyll, with an emphasis on the technical writing principles stated
          in Andrew Etter's book Modern Technical Writing.`
      },
      {
        id: "qlearn",
        name: "Q-Learning",
        thumbnail: summervibes,
        image: svDetails,
        link: "https://github.com/williamconnorbean/Q-Learning",
        tech: "Python / OpenAI",
        description: `A demonstration of the reinforcement learning technique Q-Learning.
          Implemented using the OpenAI Gym toolkit, using the FrozenLake-v0 environment.`
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
