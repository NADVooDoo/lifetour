const getHeight = () => {
  if (document.querySelector('[data-header]')) {
    const headerElement = document.querySelector('[data-header]');
    const heroElement = document.querySelector('[data-hero]');
    const contentElement = heroElement.querySelector('[data-hero-content]');

    const setHeight = () => {
      heroElement.style.marginTop = `-${headerElement.offsetHeight}px`;
      contentElement.style.paddingTop = `${headerElement.offsetHeight}px`;
    };

    const observer = new MutationObserver(setHeight);

    observer.observe(headerElement, {
      childList: true,
      subtree: true,
    });

    setHeight();

    window.addEventListener('resize', () => {
      setHeight();
    });
  }
  return null;
};

export {getHeight};
