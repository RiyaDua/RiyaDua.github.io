let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

document.getElementById('prevBtn').addEventListener('click', showPrevImage);
document.getElementById('nextBtn').addEventListener('click', showNextImage);

function showPrevImage() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  images[currentIndex].classList.add('active');
}

function showNextImage() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalImages;
  images[currentIndex].classList.add('active');
}
