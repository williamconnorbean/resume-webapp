<template>
  <fade-in-section 
    id="work-experience"
  >
    <section
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
          <div class="work-experience__icon">
            <icon type="briefcase" />
          </div>
          <div class="work-experience__job">
            <job-description
              :job-title="job.title"
              :type="job.type"
              :company-name="job.companyName"
              :start-date="job.startDate"
              :end-date="job.endDate"
              :description="job.description"
            />
          </div>
        </div>
      </div>
    </section>
  </fade-in-section>
</template>

<script>
import Icon from '../shared/icon.vue';
import JobDescription from '../shared/job-description.vue';
import FadeInSection from '../shared/fade-in-section.vue';

export default {
  name: 'WorkExperience',
  components: {
    Icon,
    JobDescription,
    FadeInSection
  },
  setup() {
    const jobs = [
      {
        title: 'Software Developer',
        type: 'Full-time',
        companyName: 'Payworks',
        startDate: 'January 2021',
        endDate: null,
        description: [
          'Lead the technical design and implementation of a CMS-based marketing website.',
          'Developed a suite of tools to enable the marketing team to manage the pages and content of the website themselves.',
          'Contributed to the creation and development of a JavaScript library for creating accessible web components.'
        ]
      },
      {
        title: 'Software Developer',
        type: 'Internship',
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
        title: 'Software Developer',
        type: 'Internship',
        companyName: 'Red River Mutual',
        startDate: 'January 2019',
        endDate: 'May 2019',
        description: [
          'Improved code quality of the Guidewire suite, enhancing the overall user experience and workflow.',
          'Created custom ad hoc SQL reports, which were used by the business to collect necessary financial information.',
          'Communicated effectively with local and remote teams to ensure the quality of the release of a new line of business.'
        ]
      },
      {
        title: 'Systems Developer',
        type: 'Internship',
        companyName: 'Payworks',
        startDate: 'May 2018',
        endDate: 'August 2018',
        description: [
          'Implemented a web API and front-end UI to allow administrative users to update employee permissions.',
          'Collaborated with team to design a database for assigning shared calendar view permissions to employees.',
          'Created postman integration tests and XUnit web API unit tests to ensure the quality of future releases.'
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
@import '../../scss/variables/screen-sizes';

.work-experience {
  @include section;

  &__title {
    @include section-title;
  }

  &__jobs {
    width: 100%;
    text-align: left;
    position: relative;

    &::before {
      content: "";
      display: block;
      width: 1px;
      height: 100%;
      background: rgba(0, 0, 0, 0.2);
      position: absolute;
      left: 24px;
      top: 0;
    }
  }

  &__icon {
    display: flex;
    position: absolute;
    left: 0;
  }

  &__job-container {
    position: relative;

    &:not(:last-child) {
      margin-bottom: 2.5rem;
    }
  }

  &__job {
    padding-left: 4rem;
  }

  @media (min-width: $md) {
    &__job {
      padding-left: 5rem;
    }
  }
}
</style>
