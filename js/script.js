document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (!hamburger || !navLinks) {
        return;
    }

    const setMenuState = (open) => {
        hamburger.classList.toggle('active', open);
        navLinks.classList.toggle('open', open);
        document.body.classList.toggle('menu-open', open);
        hamburger.setAttribute('aria-expanded', String(open));
    };

    hamburger.addEventListener('click', () => {
        setMenuState(!hamburger.classList.contains('active'));
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            setMenuState(false);
        }
    });
});
