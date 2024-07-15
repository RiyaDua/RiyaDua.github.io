let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;
const slideshowInterval = 5000; // Interval in milliseconds (5 seconds)

// Function to start the slideshow
function startSlideshow() {
  setInterval(showNextImage, slideshowInterval);
}

// Function to show the next image
function showNextImage() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalImages;
  images[currentIndex].classList.add('active');
}

// Start the slideshow when the page loads
window.onload = startSlideshow;
