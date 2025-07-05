import { initCarousel } from './scripts/carousel.js';
import { initListToggle } from './scripts/listToggle.js';
import { initCardsAnimation } from './scripts/cardsAnimation.js';

document.addEventListener('DOMContentLoaded', () => {
  initCarousel();
  initListToggle();
  initCardsAnimation();
});