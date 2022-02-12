<template>
  <nav class="navbar navbar-expand-md bg-default">
    <div class="container-fluid container">
      <a
        class="navbar-brand"
        href="/"
      >Connor</a>
      <button
        class="navbar-toggler collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="icon-bar" />
        <span class="icon-bar" />
        <span class="icon-bar" />
      </button>
      <div
        id="navbarNav"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
              @click="goToHome"
            >Home</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
              @click="goToAbout"
            >About</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
              @click="goToProjects"
            >Projects</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
              @click="goToWorkExp"
            >Work Experience</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
              @click="goToContact"
            >Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  setup() {
    const goToHome = () => window.location.href = '#home';
    const goToAbout = () => window.location.href = '#about';
    const goToProjects = () => window.location.href = '#projects';
    const goToWorkExp = () => window.location.href = '#work-experience';
    const goToContact = () => window.location.href = '#contact';

    return {
      goToHome,
      goToAbout,
      goToProjects,
      goToWorkExp,
      goToContact
    };
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables/colors';

.bg-default {
  background: #f8f9fa !important;
  position: fixed;
  width: 100%;
  text-transform: uppercase;
  border-bottom: 3px solid $green;
  z-index: 4;

  a {
    color: $med-grey;
    font-weight: 600;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover, &:focus {
      color: $green;
    }
  }
}

#navbarNav {
  justify-content: flex-end;

  a {
    padding: .5rem 0.75rem;
  }
}

/* remove navbar button stying */
.navbar-toggler {
  background: none;
  border: none;
  padding: 0;
  
  /* remove the blue outline when active or focused */
  &:active, &:focus {
    outline: 0;
    box-shadow: none;
  }
  
  /* basic styles for each icon bar */
  .icon-bar {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
    margin: 4px 0 4px 0;
    transition: all 0.2s;
    
    /* custom .navbar-dark .icon-bar background */
    .bg-default & {
      background: #383838;
    }
    
    /* .navbar open top .icon-bar rotated down 45° */
    &:nth-of-type(1) {
      transform: rotate(45deg);
      transform-origin: 10% 10%;
    }
    
    /* .navbar open middle .icon-bar invisible */
    &:nth-of-type(2) {
      opacity: 0;
      filter: alpha(opacity=0);
    }
    
    /* .navbar open bottom .icon-bar rotated up 45° */
    &:nth-of-type(3) {
      transform: rotate(-45deg);
      transform-origin: 10% 90%;
    }
  }

  /* styles for when .navbar is closed */
  &.collapsed {
    .icon-bar {
      /* .navbar closed top .icon-bar no rotation - straight */
      &:nth-of-type(1) {
        transform: rotate(0);
      }
      
      /* .navbar open middle .icon-bar visible */
      &:nth-of-type(2) {
        opacity: 1;
        filter: alpha(opacity=100);
      }
      
      /* .navbar open bottom .icon-bar no rotation - straight */
      &:nth-of-type(3) {
        transform: rotate(0);
      }
    }
  }
}
</style>
