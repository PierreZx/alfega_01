document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.carousel-item');
  const nextButton = document.querySelector('.carousel-control.next');
  const prevButton = document.querySelector('.carousel-control.prev');
  let itemWidth = items[0].getBoundingClientRect().width; // Tamanho inicial do item
  let index = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${index * itemWidth}px)`;
  }

  nextButton.addEventListener('click', function() {
    if (index < items.length - 1) {
      index++;
      updateCarousel();
    }
  });

  prevButton.addEventListener('click', function() {
    if (index > 0) {
      index--;
      updateCarousel();
    }
  });

  window.addEventListener('resize', function() {
    itemWidth = items[0].getBoundingClientRect().width; // Atualiza a largura do item no redimensionamento da janela
    updateCarousel();
  });

  // Inicializa o carrossel
  updateCarousel();
});