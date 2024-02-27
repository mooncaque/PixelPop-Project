/* Body Opaque ANIMATION */
document.addEventListener("DOMContentLoaded", function() {
  const bodyElement = document.body;
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              bodyElement.style.opacity = 1;
              observer.unobserve(entry.target); 
          }
      });
  });
  observer.observe(bodyElement);
});

/* Animates images and h1 elements in viewport for .itemgrid and .mobilepay */
function animateElementsInView(containerSelector, viewportCheck) {
  const container = document.querySelector(containerSelector);
  if (!container) return; 
  const elements = container.querySelectorAll('img, h1');
  elements.forEach(element => {
      element.classList.toggle('animate', viewportCheck(element)); 
  });
}


/* Function to check if element is in viewport */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/* Function to handle scroll animation */
function handleScrollAnimation() {
  animateElementsInView('.itemgrid', isInViewport);
  animateElementsInView('.mobilepay', isInViewport);
}

window.addEventListener('scroll', handleScrollAnimation);
handleScrollAnimation();
