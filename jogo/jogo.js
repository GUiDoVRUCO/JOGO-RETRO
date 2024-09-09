// Seleciona os elementos do DOM
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');
let index = 0;

// Função para mostrar o slide correto
function showSlide(index) {
    const totalSlides = carouselItems.length;
    // Garante que o índice esteja dentro dos limites
    index = (index + totalSlides) % totalSlides;
    // Move o carrossel para a posição correta
    carouselContainer.style.transform = `translateX(-${index * 100}%)`;
}

// Adiciona evento de clique para o botão "prev"
prevButton.addEventListener('click', () => {
    index--;
    showSlide(index);
});

// Adiciona evento de clique para o botão "next"
nextButton.addEventListener('click', () => {
    index++;
    showSlide(index);
});

// Inicializa o carrossel para exibir o primeiro slide
showSlide(index);
