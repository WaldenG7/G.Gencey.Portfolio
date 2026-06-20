const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('#nextBtn');
const prevButton = document.querySelector('#prevBtn');

// Calcule dynamiquement la largeur d'une carte avec ses marges
const slideWidth = slides[0].getBoundingClientRect().width;

let currentIndex = 0;

function updateCarousel() {
    const amountToMove = currentIndex * slideWidth;
    track.style.transform = 'translateX(-' + amountToMove + 'px)';
}

nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 3) { 
        currentIndex++;
        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});