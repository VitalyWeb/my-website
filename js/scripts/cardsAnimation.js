export function initCardsAnimation() {
  window.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    if (cards.length >= 4) {
      cards[0].classList.add('animate-top-left');
      cards[1].classList.add('animate-top-right');
      cards[2].classList.add('animate-bottom-left');
      cards[3].classList.add('animate-bottom-right');
    } else {
      cards.forEach(card => card.classList.add('animate-top-left'));
    }
  });
}
