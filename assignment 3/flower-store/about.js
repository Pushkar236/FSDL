/*********************************
  ABOUT PAGE - ABOUT.JS
  Handles fade-in animations on scroll
**********************************/

/*********************************
  1. INTERSECTION OBSERVER FOR FADE-IN
**********************************/
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.addEventListener("DOMContentLoaded", () => {
  const fadeInElements = document.querySelectorAll(".fade-in");
  fadeInElements.forEach(el => {
    observer.observe(el);
  });
});
