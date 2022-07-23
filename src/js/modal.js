export function modal() {
    const buttons = document.querySelectorAll('[data-modal=consultation]');
    const overlay = document.querySelector('.overlay');
    const modalWindowCloseBtn = document.querySelector('.modal__close');

    buttons.forEach(btn => {
        btn.addEventListener('click', function () {
            addClassActiveToOverlay();
            setDocumentOverflow('hidden');
        });
    })

    modalWindowCloseBtn.addEventListener('click', function () {
        removeClassActiveFromOverlay();
        setDocumentOverflow('');
    });

    document.addEventListener('keydown', function (e) {
        if (e.code === 'Escape') {
            removeClassActiveFromOverlay();
            setDocumentOverflow('');
        }
    });
    overlay.addEventListener('click', (event) => {
        if (event.target && event.target === overlay) {
            removeClassActiveFromOverlay();
            setDocumentOverflow('');
        }
    });


    function removeClassActiveFromOverlay() {
        overlay.classList.remove('active');
    }

    function addClassActiveToOverlay() {
        overlay.classList.add('active');
    }

    function setDocumentOverflow(value) {
        document.body.style.overflow = value;
    }
}