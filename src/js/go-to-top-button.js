export function goToTopButton() {
    const scrollButton = document.querySelector('.pageup')
    let debounceTimer;

    window.addEventListener('scroll', function () {
        if (debounceTimer) {
            window.clearTimeout(debounceTimer);
        }

        debounceTimer = window.setTimeout(() => {
            if (window.scrollY > 500) {
                fadeIn(scrollButton);
            } else if (window.scrollY < 500) {
                fadeOut(scrollButton);
            }
        }, 50);

    });

    scrollButton.addEventListener('click', function (e) {
        window.scrollTo(0, 0);
    })
}

function fadeIn(el, display = 'block') {
    el.style.display = display;
    (function fade() {
        let val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
}

function fadeOut(el) {
    if (!el.style.opacity) {
        el.style.opacity = 0;
    }
    (function fade() {
        if ((el.style.opacity -= 0.1) <= 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
}