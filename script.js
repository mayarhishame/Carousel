let currentIndex = 0;
function moveSlide(direction) {
  const images = document.querySelector(".carousel-images");
  const totalImages = 5;
  currentIndex = (currentIndex + direction + totalImages) % totalImages;
  const offset = -currentIndex * 100;
  images.style.transform = `translateX(${offset}%)`;
}
