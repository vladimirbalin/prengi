export const sliderFirstPage = () => {
  let slideIndex = 1,
    slides = document.querySelectorAll(".promo__slider-item"),
    prev = document.querySelector(".promo__slider-prev"),
    next = document.querySelector(".promo__slider-next"),
    dotsWrap = document.querySelector(".promo__slider-dots"),
    dots = document.querySelectorAll(".promo__slider-dot");

  showSlides(slideIndex);
  // setInterval(() => plusSlides(1), 10000);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((item) => (item.style.display = "none"));
    dots.forEach((item) => item.classList.remove("dot-active"));

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("dot-active");
  }

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  prev.addEventListener("click", () => {
    plusSlides(-1);
  });
  next.addEventListener("click", () => {
    plusSlides(1);
  });

  dotsWrap.addEventListener("click", (event) => {
    for (let i = 0; i < dots.length + 1; i++) {
      if (
        event.target.classList.contains("promo__slider-dot") &&
        event.target == dots[i - 1]
      ) {
        currentSlide(i);
      }
    }
  });
};
