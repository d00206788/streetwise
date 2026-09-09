$(document).ready(function() {
    let faqQuestionContainers = document.querySelectorAll(`[unique-script-id="w-w-dm-id"] .faq-question-container`);
  
    faqQuestionContainers.forEach(function(faqQuestionContainer) {
      faqQuestionContainer.onclick = function() {
        this.parentElement.classList.toggle("active");
      };
    });
  })

document.addEventListener('DOMContentLoaded', () => {

    const slides = document.querySelectorAll('.gallery img');
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    if (!slides.length || !next || !prev) return;

    let current = 0;

    function showSlide(index) {
        slides.forEach(slide => {
            slide.style.display = 'none';
        });

        slides[index].style.display = 'block';
    }

    if (window.innerWidth <= 768) {
        showSlide(0);

        next.addEventListener('click', () => {
            current = (current + 1) % slides.length;
            showSlide(current);
        });

        prev.addEventListener('click', () => {
            current = (current - 1 + slides.length) % slides.length;
            showSlide(current);
        });
    }
});
  
