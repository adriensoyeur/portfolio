const btn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');
const body = document.body;
const navLinks = nav.querySelectorAll('.nav-links a');

function toggleMenu() {
    const isOpen = nav.classList.contains('active');
    
    if (isOpen) {
        nav.classList.remove('active');
        btn.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('menu-open');
    } else {
        nav.classList.add('active');
        btn.classList.add('active');
        overlay.classList.add('active');
        body.classList.add('menu-open');
    }
}

btn.addEventListener('click', toggleMenu);

overlay.addEventListener('click', toggleMenu);

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));

        link.classList.add('active');

        if (nav.classList.contains('active')) toggleMenu();
    });
});

const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');

        resumeDetails.forEach(detail => detail.classList.remove('active'));
        resumeDetails[idx].classList.add('active');
    });
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => detail.classList.remove('active'));
    portfolioDetails[index].classList.add('active');
};

arrowRight.addEventListener('click', () => {
    if (index < 5) {
        index++;
        arrowLeft.classList.remove('disabled');
    } else {
        index = 6;
        arrowRight.classList.add('disabled');
    }

    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disabled');
    } else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activePortfolio();
});

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollY = window.pageYOffset;

        if (scrollY >= sectionTop - 100 && scrollY < sectionTop + sectionHeight - 100) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSectionId)) {
            link.classList.add('active');
        }
    });
});