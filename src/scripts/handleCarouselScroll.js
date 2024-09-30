const handleCarouselScroll = () => {
  const horizontScroll = document.querySelector('.carousel');
  const nextBtn = document.querySelector('.carousel__controls-button--next');
  const prevBtn = document.querySelector('.carousel__controls-button--prev');

  nextBtn.addEventListener('click', () => {
    horizontScroll.style.scrollBehavior = 'smooth';
    horizontScroll.scrollLeft += 1000;
  });

  prevBtn.addEventListener('click', () => {
    horizontScroll.style.scrollBehavior = 'smooth';
    horizontScroll.scrollLeft -= 1000;
  });
};

export default handleCarouselScroll;
