const getHeight = () => {
  if (document.querySelector('.header')) {
    const headerElement = document.querySelector('.header');
    const heroElement = document.querySelector('.hero');
    const contentElement = heroElement.querySelector('.hero__content');

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
