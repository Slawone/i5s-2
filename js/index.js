import './acc.js';
import scrollSection from './scrollSection.js';

const menuLinks = document.querySelectorAll('[data-btn="menuLink"]');

menuLinks.forEach((item) => item.addEventListener('click', scrollSection));