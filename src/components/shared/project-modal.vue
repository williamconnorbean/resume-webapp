<template>
  <div
    :id="modalId"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-centered"
      role="document"
    >
      <div class="modal-content project-modal__content">
        <div class="project-modal__header">
          <button
            class="project-modal__close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <vue-feather type="x" />
          </button>
        </div>
        <img
          class="project-modal__img-heading"
          :src="image"
        >
        <div class="modal-body project-modal__body">
          <h5 class="project-modal__title">
            {{ title }}
          </h5>
          <p class="project-modal__description">
            {{ description }}
          </p>
          <div class="project-modal__footer">
            <div class="project-modal__tech-container">
              <vue-feather type="tag" />
              <h6 class="project-modal__tech">
                {{ tech }}
              </h6>
            </div>
            <div v-if="link">
              <a
                :href="link"
                target="_blank"
              >
                <vue-feather type="external-link" />
                Check it out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectModal',
  props: {
    modalId: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    tech: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables/colors';
@import '../../scss/mixins/button';

.project-modal {
  &__content {
    background-color: transparent;
    border: 0;
  }

  &__header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0.5rem;
  }

  &__close {
    color: $white;
    background: none;
    border: none;
  }

  &__img-heading {
    height: 275px;
    object-fit: cover;
    object-position: top;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  &__body {
    background-color: $white;
    text-align: left;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }

  &__title {
    font-weight: bold;
    color: $med-grey;
    text-transform: uppercase;
  }

  &__tech-container {
    display: flex;
    align-items: center;

    i {
      color: $green;
      margin-right: 0.25rem;
      height: 1.1rem;
      width: 1.1rem;
    }
  }

  &__tech {
    text-transform: uppercase;
    color: $green;
    margin: 0;
    font-size: 0.85rem;
  }

  &__description {
    margin-top: 1rem;
  }

  &__footer {
    display: flex;
    justify-content: space-between;

    a {
      @include primary-button($green, $white);
      display: flex;
      align-items: center;
      font-size: 1rem;
      margin-top: 0;
    }

    i {
      margin-right: 0.25rem;
      height: 1.2rem;
      width: 1.2rem;
    }
  }
}
</style>
