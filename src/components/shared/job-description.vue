<template>
  <div class="job-description">
    <div>
      <div class="job-description__title-container">
        <h3 class="job-description__title">
          {{ jobTitle }}
        </h3>
        <p class="job-description__date--desktop">
          {{ startDate }} - {{ endDate ?? 'Present' }}
        </p>
      </div>
      <h4 class="job-description__company">
        {{ companyName }} &#183; {{ type }}
      </h4>
      <p class="job-description__date--mobile">
        {{ startDate }} - {{ endDate ?? 'Present' }}
      </p>
      <ul class="job-description__desc">
        <li
          v-for="(actionPoint, index) in description"
          :key="index"
        >
          {{ actionPoint }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobDescription',
  props: {
    jobTitle: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    companyName: {
      type: String,
      required: true
    },
    startDate: {
      type: String,
      required: true
    },
    endDate: {
      type: String,
      default: null
    },
    description: {
      type: Array,
      required: false,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables/colors';
@import '../../scss/variables/screen-sizes';

.job-description {
  ul {
    list-style: none;
  }

  ul li::before {
    content: "\2022";
    color: $green;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }

  &__title {
    font-size: 18px;
    color: $green;
    font-weight: bold;
  }

  &__company {
    font-size: 16px;
    color: $med-grey;
  }

  &__date {
    &--mobile {
      display: block;
    }

    &--desktop {
      display: none;
    }
  }

  &__desc {
    padding-left: 1rem;
  }

  @media (min-width: $md) {
    &__title-container {
      display: flex;
      justify-content: space-between;
    }

    &__date {
      &--mobile {
        display: none;
      }
      
      &--desktop {
        display: block;
        margin-bottom: 0;
      }
    }
  }
}
</style>
