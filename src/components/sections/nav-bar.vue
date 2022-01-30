<template>
  <nav className="navbar navbar-expand-md bg-default">
    <div className="container-fluid">
      <a
        className="navbar-brand"
        href="#home"
      >Connor</a>
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </button>
      <div
        id="navbarNav"
        className="collapse navbar-collapse"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >Home</a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >About</a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >Projects</a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables/colors';

.bg-default {
  background: #f8f9fa !important;
  padding-left: 10%;
  padding-right: 10%;
  position: fixed;
  width: 100%;
  text-transform: uppercase;
  border-bottom: 3px solid $green;
  z-index: 4;

  a {
    color: #383838;
    font-weight: 600;
    cursor: pointer;
  }
}

#navbarNav {
  justify-content: flex-end;

  a {
    padding: .5rem 1rem;
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
