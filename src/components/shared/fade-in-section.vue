<template>
  <div
    ref="domRef"
    class="fade-in-section"
    :class="{ 
      'fade-in-section--visible': isVisible,
      'scroll-margin--static': hasBeenFadedIn,
      'scroll-margin--fade-in': !hasBeenFadedIn
    }"
  >
    <slot />
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';

export default {
  name: 'FadeInSection',
  setup() {
    const isVisible = ref(false);
    const domRef = ref(null);
    const hasBeenFadedIn = ref(false);

    let observer = null;

    onMounted(() => {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => isVisible.value = entry.isIntersecting);
      });

      observer.observe(domRef.value);
    });

    watch(isVisible, (currIsVisible, prevIsVisible) => {
      // only fade in once on initial page load
      if (!prevIsVisible && currIsVisible) {
        hasBeenFadedIn.value = true;
        observer.unobserve(domRef.value);
      }
    });

    return {
      isVisible,
      domRef,
      hasBeenFadedIn
    };
  }
}
</script>

<style lang="scss" scoped>
$scroll-margin: 5rem;

.fade-in-section {
  opacity: 0;
  transform: translateY($scroll-margin);
  visibility: hidden;
  transition: opacity 0.3s ease-out, transform 0.6s ease-out;

  &--visible {
    opacity: 1;
    transform: none;
    visibility: visible;
  }
}

.scroll-margin--static {
  scroll-margin-top: $scroll-margin;
}

.scroll-margin--fade-in {
  scroll-margin-top: $scroll-margin * 2;
}
</style>
