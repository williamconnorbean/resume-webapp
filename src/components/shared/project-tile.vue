<template>
  <div className="project-tile overlay">
    <img
      class="project-tile__img"
      :src="thumbnail"
      alt=""
    >
    <div class="project-tile__container">
      <h3 class="project-tile__title">
        {{ name }}
      </h3>
      <h4 class="project-tile__subtitle">
        {{ tech }}
      </h4>
      <button
        class="project-tile__btn"
        data-bs-toggle="modal"
        :data-bs-target="`#${id}`"
      >
        Learn more
      </button>
    </div>
  </div>
  <project-modal
    :modal-id="id"
    :image="image"
    :title="name"
    :description="description"
    :tech="tech"
    :link="link"
  />
</template>

<script>
import ProjectModal from '../shared/project-modal.vue';

export default {
  name: 'ProjectTile',
  components: {
    ProjectModal
  },
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: ''
    },
    tech: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables/colors';

.project-tile {
  position: relative;
  height: 275px;
  width: 275px;
  margin: 0.5rem 0;

  &__img {
    border-radius: 0.5rem;
  }

  &__title {
    color: $white;
    font-size: 1.5rem;
  }

  &__subtitle {
    color: $green;
    font-size: 1.25rem;
  }

  &__btn {
    font-weight: bold;
    margin-top: 1rem;
    border: 2px solid $green;
    text-decoration: none;
    color: $white;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    transition: all 0.3s ease;
    background-color: transparent;
  }

  &__btn:hover {
    background-color: $green;
    color: $white;
    border-radius: 0.5rem;
  }

  &__container {
    width: 100%;
    z-index: 3;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.5s ease;
  }
}

.overlay img {
  width:100%;
  height: 100%;
}

.overlay:after {
  content: '\A';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.8);
  opacity: 0;
  transition: all 0.5s;
  border-radius: 0.5rem;
}

.overlay:hover {
  &:after {
    opacity: 1;
  }

  .project-tile__container {
    opacity: 1;
  }
}
</style>
