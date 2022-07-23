export function navbar() {
    const links = document.querySelectorAll('.promo__link');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = e.target.dataset.href;
            const section = document.querySelector('.' + href);

            window.scrollTo(0, section.getBoundingClientRect().top + window.scrollY);
        })
    })
}