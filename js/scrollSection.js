const scrollSection = (event) => {
  const targetValue = event.currentTarget.dataset.target;
  const $section = document.querySelector(`[data-name="${targetValue}"]`);
  const $header = document.querySelector('[data-name="header"]');

  const clientPosition = window.pageYOffset;
  const sectionPosition = $section.getBoundingClientRect().top;
  const headerHeight = $header.getBoundingClientRect().height;
  const targetPosition = clientPosition + sectionPosition - headerHeight;

  // handleMenuItemClick();
  window.scrollTo(0, targetPosition);
};

export default scrollSection;
