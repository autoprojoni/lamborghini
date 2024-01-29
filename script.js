let currentSlide = 0;

    function showSlide(index) {
      const slides = document.querySelectorAll('.slide');
      if (index >= slides.length) {
        currentSlide = 0;
      } else if (index < 0) {
        currentSlide = slides.length - 1;
      } else {
        currentSlide = index;
      }

      slides.forEach((slide, i) => {
        slide.style.display = i === currentSlide ? 'block' : 'none';
      });
    }

    function prevSlide() {
      showSlide(currentSlide - 1);
    }

    function nextSlide() {
      showSlide(currentSlide + 1);
    }

    // Show the initial slide
    showSlide(currentSlide);