export function initCarousel() {
    const items = document.querySelectorAll('.my-carousel-item');
    const carouselInner = document.querySelector('.my-carousel-inner');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    function updateCarousel(index) {
        if (index < 0) {
            currentIndex = items.length - 1;
        } else if (index >= items.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        carouselInner.style.transform = `translateX(${-currentIndex * 100}%)`;

        items.forEach((item, i) => {
            item.classList.remove('active');
            if (i === currentIndex) {
                item.classList.add('active');
            }
        });
    }

    prevBtn.addEventListener('click', () => {
        updateCarousel(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        updateCarousel(currentIndex + 1);
    });

    updateCarousel(0);
}
