const slides = document.querySelectorAll('.hero>li'),
      dots = document.querySelectorAll('.next-main-slider-dots>span'),
      mobileMenuButton = document.querySelector('.mobile-button'),
      submenu = document.querySelector('.second-menu-mobile');

let isOpen = 0;

mobileMenuButton.addEventListener('click', () => {
    if (!isOpen) {
        submenu.style.display = 'block';
        isOpen = 1;
    } else {
        submenu.style.display = 'none';
        isOpen = 0;
    }
});

const interval = 5;

let activeSlide = 0;

const initSlides = () => {
    dots.forEach(dot => dot.removeAttribute('class'));
    dots[activeSlide].className = 'active';

    slides.forEach(slide => slide.style.display = 'none');
    slides[activeSlide].style.display = 'block';
};

initSlides();

setInterval(() => {
    initSlides();

    if(activeSlide < slides.length - 1) {
        activeSlide++;
    } else {
        activeSlide = 0;
    }

}, interval*1000);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        activeSlide = index;

        initSlides();
    });
});

const chekpoint = 600;
let navBackground = 'transparent';
let opacity = 1;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if(currentScroll <= chekpoint) {
        navBackground = 'transparent';
        opacity = 1 - currentScroll / chekpoint;
    } else {
        navBackground = '#000';
        opacity = 0;
    }

    document.querySelector('.header-nav').style.background = navBackground;
    
    slides.forEach(slide => slide.getElementsByTagName('img')[0].style.opacity = opacity);
});