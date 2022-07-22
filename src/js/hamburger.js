export function hamburger() {
    const navbarLinks = document.querySelectorAll('.promo__link');
    const hamburger = document.querySelector('.hamburger');
    const navbarMobile = document.querySelector('.promo__menu');

    const events = {
        hamburgerBtnClick: function (event) {
            if (event.target) {
                toggleMobileMenu(event.target);
            }
        }
    }

    function hideMobileMenu(eventTarget) {
        if (eventTarget) {
            navbarMobile.classList.remove('promo__menu--active');
            hamburger.classList.remove('open');
            unsetOverflowHiddenToBody();
        }
    }

    function showMobileMenu(eventTarget) {
        if (eventTarget) {
            navbarMobile.classList.add('promo__menu--active');
            hamburger.classList.add('open');
            setOverflowHiddenToBody();
        }
    }

    function toggleMobileMenu(eventTarget) {
        if (eventTarget && isNavbarOpened()) {
            hideMobileMenu(eventTarget);
        } else if (eventTarget && isNavbarClosed()) {
            showMobileMenu(eventTarget);
        } else {
            return false;
        }
    }

    function isNavbarOpened() {
        return navbarMobile.classList.contains('promo__menu--active')
    }

    function isNavbarClosed() {
        return !navbarMobile.classList.contains('promo__menu--active')
    }

    function setOverflowHiddenToBody() {
        document.querySelector('body').style.overflow = 'hidden';
    }

    function unsetOverflowHiddenToBody() {
        document.querySelector('body').style.overflow = '';
    }

    navbarLinks.forEach(link => link.addEventListener('click', hideMobileMenu));
    hamburger.addEventListener('click', events.hamburgerBtnClick);
}