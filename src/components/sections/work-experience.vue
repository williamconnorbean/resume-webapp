<template>
  <section
    id="work-experience"
    class="work-experience container"
  >
    <h2 class="work-experience__title">
      Work experience
    </h2>
    <div class="work-experience__jobs">
      <div
        v-for="(job, index) in jobs"
        :key="index"
        class="work-experience__job-container"
      >
        <job-description
          :job-title="job.title"
          :company-name="job.companyName"
          :start-date="new Date(job.startDate)"
          :end-date="new Date(job.endDate)"
          :description="job.description"
        />
      </div>
    </div>
  </section>
</template>

<script>
import JobDescription from '../shared/job-description.vue';

export default {
  name: 'WorkExperience',
  components: {
    JobDescription
  },
  setup() {
    const jobs = [
      {
        title: 'Software Developer (Co-op Work Term III)',
        companyName: 'Bold Commerce',
        startDate: 'September 2019',
        endDate: 'December 2019',
        description: [
          'Developed and integrated an event-based email system to allow clients to send out upcoming order emails to customers.',
          'Created front-end interface for viewing and managing third party API keys, which are used by clients to access and manipulate data about their E-commerce store.',
          'Collaborated with team members during a company-wide hackathon to port over the Subscription app from BigCommerce to Shopify.'
        ]
      },
      {
        title: 'Software Developer (Co-op Work Term II)',
        companyName: 'Red River Mutual',
        startDate: 'January 2019',
        endDate: 'May 2019',
        description: [
          'Improved code quality of the Guidewire suite, enhancing the overall user experience and workflow.',
          'Created custom ad hoc SQL reports, which were used by the business to collect necessary financial information.',
          'Communicated effectively with local and remote team members in order to ensure quality of the release of the new farm line of business.'
        ]
      },
      {
        title: 'Software Developer (Co-op Work Term I)',
        companyName: 'Payworks',
        startDate: 'May 2018',
        endDate: 'August 2018',
        description: [
          'Built a web API and front-end UI to allow administrative users to update employee permissions.',
          'Collaborated with team to come up with a database design for assigning shared calendar view permissions to employees using the application.',
          'Created postman integration tests and XUnit web API unit tests, which were added to the complete suite of tests to ensure quality of future releases.'
        ]
      }
    ];

    return {
      jobs
    };
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/mixins/typography';
@import '../../scss/mixins/layout';

.work-experience {
  @include section;

  &__title {
    @include section-title;
  }

  &__jobs {
    width: 100%;
    text-align: left;
  }

  &__job-container {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
}
</style>
