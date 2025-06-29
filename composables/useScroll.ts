export const useScroll = () => {
  const scrollY = ref(0);
  const isScrolled = ref(false);
  const showScrollToTop = ref(false);

  const updateScrollState = () => {
    scrollY.value = window.scrollY;
    isScrolled.value = scrollY.value > 100;
    showScrollToTop.value = scrollY.value > 400;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  onMounted(() => {
    if (import.meta.client) {
      // Throttle scroll events for performance
      let ticking = false;

      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            updateScrollState();
            ticking = false;
          });
          ticking = true;
        }
      };

      // Initial check
      updateScrollState();

      // Add event listener
      window.addEventListener("scroll", handleScroll, { passive: true });

      onBeforeUnmount(() => {
        window.removeEventListener("scroll", handleScroll);
      });
    }
  });

  return {
    scrollY: readonly(scrollY),
    isScrolled: readonly(isScrolled),
    showScrollToTop: readonly(showScrollToTop),
    scrollToTop,
  };
};
