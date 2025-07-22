export const smoothScrollTo = (elementId: string, offset: number = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Hook for scroll-based animations
export const useScrollAnimation = () => {
  const observeElement = (element: HTMLElement, callback: (isVisible: boolean) => void) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          callback(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px'
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  };

  return { observeElement };
}; 