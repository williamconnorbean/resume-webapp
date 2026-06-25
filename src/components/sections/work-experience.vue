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
        title: 'Tech Lead, Development',
        type: 'Full-time',
        companyName: 'Payworks',
        startDate: 'May 2024',
        endDate: null,
        description: [
          'Provided technical direction and advisory on migration strategies for the Sugar to Salesforce transition, contributing to a high-impact outcome recognized across the organization.',
          'Provide daily technical oversight and code review for a team of contracted developers, ensuring alignment with department standards and project goals.',
          'Lead the squad\'s adoption of Spec-Driven Development using Spec Kit, defining how agentic AI tooling will be leveraged on an upcoming greenfield project.',
          'Serve as the go-to technical resource for payroll application questions across teams, reducing bottlenecks on domain knowledge.',
          'Conduct full-cycle technical and behavioral interviews for full-time and co-op positions, serving as a consistent and trusted voice in engineering hiring decisions.',
          'Expanded QA team capabilities by enabling independent authoring and execution of Playwright tests, extending technical influence across the department.'
        ]
      },
      {
        title: 'Software Developer',
        type: 'Full-time',
        companyName: 'Payworks',
        startDate: 'Jan 2021',
        endDate: 'May 2024',
        description: [
          'Spearheaded the design and implementation of a CMS-driven marketing website, resulting in a notable increase in leads.',
          'Mentored 5 co-op students to enhance their technical abilities and facilitate integration into a cross-functional team.',
          'Collaborated on creating a JavaScript library for building accessible web components, resulting in a more inclusive user experience.'
        ]
      },
      {
        title: 'Software Developer',
        type: 'Internship',
        companyName: 'Bold Commerce',
        startDate: 'Sept 2019',
        endDate: 'Dec 2019',
        description: [
          'Implemented an event-based email system, enabling clients to send personalized order notifications to customers.',
          'Developed a user-friendly interface for managing third-party API keys, allowing clients to access and manipulate data about their E-commerce store seamlessly.'
        ]
      },
      {
        title: 'Software Developer',
        type: 'Internship',
        companyName: 'Red River Mutual',
        startDate: 'Jan 2019',
        endDate: 'May 2019',
        description: [
          'Developed custom SQL reports that provided financial insights to the business, enabling data-driven decision-making.',
          'Optimized the Guidewire suite by applying best coding practices; improving user experience and workflow.'
        ]
      },
      {
        title: 'System Developer',
        type: 'Internship',
        companyName: 'Payworks',
        startDate: 'May 2018',
        endDate: 'Aug 2018',
        description: [
          'Implemented a web API and front-end UI that enabled administrative users to manage employee permissions efficiently.',
          'Collaborated with team to design a secure database schema for managing calendar view permissions for employees.',
          'Created postman integration tests and XUnit web API unit tests, ensuring the quality of future releases.'
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
