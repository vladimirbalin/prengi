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
    //главная функция
    if (n > slides.length) {
        //зацикливаем слайды
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((item) => (item.style.display = "none")); //скрываем все слайды изначально
    dots.forEach((item) => item.classList.remove("dot-active")); //делаем неактивными все точки изначально

    slides[slideIndex - 1].style.display = "flex"; //показываем первый слайд
    dots[slideIndex - 1].classList.add("dot-active"); //делаем активной первую точку
    }

    function plusSlides(n) {
    // для того чтобы юзать её в prev и next buttons logic, плюсовать/вычитать
    showSlides((slideIndex += n));
    }

    function currentSlide(n) {
    //для того чтобы юзать её в логике для кликов на определнную dot
    showSlides((slideIndex = n));
    }

    prev.addEventListener("click", () => {
    //prev button logic
    plusSlides(-1);
    });
    next.addEventListener("click", () => {
    //next button logic
    plusSlides(1);
    });

    dotsWrap.addEventListener("click", (event) => {
    //логикa для кликов на определнную dot
    for (let i = 0; i < dots.length + 1; i++) {
        if (event.target.classList.contains("promo__slider-dot") && event.target == dots[i - 1]) {
        currentSlide(i);
        }
    }
    });
}