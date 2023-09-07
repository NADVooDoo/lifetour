export const loadScript = (src, onLoad) => {
  const scriptElement = document.createElement('script');
  scriptElement.src = src;

  scriptElement.addEventListener('load', onLoad);

  document.body.append(scriptElement);
};
