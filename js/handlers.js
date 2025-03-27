export const handleBurgerClick = () => {
  const $body = document.body;
  const burgerButton = document.querySelector('.burger');
  const nav = document.querySelector('.header__menu');

  burgerButton.addEventListener('click', () => {
    $body.classList.toggle('active');
    burgerButton.classList.toggle('active');
    nav.classList.toggle('active');
  });
};

export const handleMenuItemClick = () => {
  const $body = document.body;
  const burgerButton = document.querySelector('.burger');
  const nav = document.querySelector('.header__menu');
  const menuItems = document.querySelectorAll('.menu__link');

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
      $body.classList.remove('active');
      burgerButton.classList.remove('active');
      nav.classList.remove('active');
    });
  });
};

export const closeOpenNavAuto = () => {
  const $body = document.body;
  const burgerButton = document.querySelector('.burger');
  const nav = document.querySelector('.header__menu');

  window.addEventListener('resize', () => {
    const clientWidth = document.body.clientWidth;

    if (clientWidth > 767) {
      $body.classList.remove('active');
      burgerButton.classList.remove('active');
      nav.classList.remove('active');
    }
  });
};

// export const openModal = () => {
//   const openModalButton = document.querySelector('.header__button');
//   const formOverlay = document.getElementById('presentationFormOverlay');

//   openModalButton.addEventListener('click', () => {
//     formOverlay.classList.add('active');
//   });
// };

// export const openSubscribeModal = () => {
//   const openModalButtons = document.querySelectorAll(
//     '[data-btn="subscribeBtn"]'
//   );
//   const formOverlay = document.getElementById('subscribeFormOverlay');

//   openModalButtons.forEach((button) =>
//     button.addEventListener('click', () => {
//       formOverlay.classList.add('active');
//     })
//   );
// };

// export const closeModal = () => {
//   const closeModalButton = document.querySelector('.modal__close-button');
//   const presentationFormOverlay = document.getElementById(
//     'presentationFormOverlay'
//   );
//   const subscribeFormOverlay = document.getElementById('subscribeFormOverlay');

//   closeModalButton.addEventListener('click', () => {
//     if (presentationFormOverlay.classList.contains('active')) {
//       presentationFormOverlay.classList.remove('active');
//     }

//     if (subscribeFormOverlay.classList.contains('active')) {
//       subscribeFormOverlay.classList.remove('active');
//     }
//   });
// };

export const scrollSection = (event) => {
  const targetValue = event.currentTarget.dataset.target;
  const $section = document.querySelector(`[data-name="${targetValue}"]`);
  const $header = document.querySelector('[data-name="header"]');

  const clientPosition = window.pageYOffset;
  const sectionPosition = $section.getBoundingClientRect().top;
  const headerHeight = $header.getBoundingClientRect().height;
  const targetPosition = clientPosition + sectionPosition - headerHeight;

  handleMenuItemClick();
  window.scrollTo(0, targetPosition);
};
