// scroll.js — Scroll Reveal Animation

document.addEventListener("DOMContentLoaded", () => {

  const revealElements = document.querySelectorAll(
    ".about-right, .profile-wrapper, .tool-card, .tools-section h2, .tools-subtitle"
  );

  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
        observer.unobserve(entry.target); // animate once
      }
    });
  }, observerOptions);

  revealElements.forEach(el => {
    el.classList.add("reveal-hidden");
    revealOnScroll.observe(el);
  });

});
