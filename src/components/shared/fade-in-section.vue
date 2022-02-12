<template>
  <div
    ref="domRef"
    class="fade-in-section"
    :class="{ 'fade-in-section--visible': isVisible }"
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
        observer.unobserve(domRef.value);
      }
    });

    return {
      isVisible,
      domRef
    };
  }
}
</script>

<style lang="scss" scoped>
.fade-in-section {
  opacity: 0;
  transform: translateY(20vh);
  visibility: hidden;
  transition: opacity 0.3s ease-out, transform 0.6s ease-out;
  will-change: opacity, visibility;

  &--visible {
    opacity: 1;
    transform: none;
    visibility: visible;
  }
}
</style>
