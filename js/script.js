document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});
