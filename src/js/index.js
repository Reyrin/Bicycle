// Slider
const swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
    loop: true,
    grabCursor: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    autoHeight: true,
});

// Animate On Scroll
AOS.init({
    duration: 800
});

// Smooth Scroll To Anchor
document.querySelectorAll('a[href^="#anchor"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Menu
const burger = document.querySelector('.nav__burger');
const nav = document.querySelector('.nav__list');
const links = document.querySelectorAll('a[href^="#anchor"]');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});


links.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        burger.classList.remove('active');
        nav.classList.remove('active');
    });
});

