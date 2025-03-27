import {
  handleBurgerClick,
  // openModal,
  // closeModal,
  scrollSection,
  closeOpenNavAuto,
  handleMenuItemClick,
  // openSubscribeModal,
} from './handlers.js';

const menuLinks = document.querySelectorAll('[data-btn="menuLink"]');
const heroButton = document.querySelector('.hero__button');
const servicesBUttons = document.querySelectorAll('[data-btn="servicesBtn"]');
const acc = document.querySelectorAll('.accordion');

menuLinks.forEach((item) => item.addEventListener('click', scrollSection));
servicesBUttons.forEach((item) =>
  item.addEventListener('click', scrollSection)
);
heroButton.addEventListener('click', scrollSection);

acc.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) {
      e.target.classList.remove('active');
      return;
    }
    acc.forEach((e) => e.classList.remove('active'));
    e.target.classList.add('active');
  });
});

handleBurgerClick();
handleMenuItemClick();
closeOpenNavAuto();
// openModal();
// openSubscribeModal();
// closeModal();
