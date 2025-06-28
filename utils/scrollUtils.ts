/**
 * Smooth scroll to an element with offset for fixed header
 * @param elementId - The ID of the target element
 * @param headerOffset - Offset in pixels for fixed header (default: 80)
 */
export const smoothScrollToElement = (
  elementId: string,
  headerOffset: number = 80
): void => {
  const element = document.getElementById(elementId);

  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

/**
 * Handle smooth scroll from href with event prevention
 * @param href - The href string (e.g., "#section")
 * @param event - Optional event to prevent default behavior
 * @param headerOffset - Offset in pixels for fixed header (default: 80)
 */
export const handleSmoothScroll = (
  href: string,
  event?: Event,
  headerOffset: number = 80
): void => {
  if (event) {
    event.preventDefault();
  }

  if (href.startsWith("#")) {
    const targetId = href.substring(1);
    smoothScrollToElement(targetId, headerOffset);
  }
};
