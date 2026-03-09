// script.js

document.addEventListener('DOMContentLoaded', function () {

    // 1. Sticky Header
    const header = document.querySelector('.main-header');
    const navbar = document.querySelector('.navbar');

    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 150) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        });
    }

    // 2. Mobile Menu Toggle
    const menuBtn = document.querySelector('.fa-bars');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', function (e) {
            e.preventDefault();
            navLinks.classList.toggle('active');
        });
    }

    // 3. Dropdowns (Mobile)
    const dropdowns = document.querySelectorAll('.dropdown > a');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function (e) {
            if (window.innerWidth <= 991) {
                e.preventDefault();
                this.parentElement.classList.toggle('open');
            }
        });
    });

    // 4. Hero Slider (Simple Implementation)
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        // Just an array of image paths for the slider
        const slides = [
            'url("images/1.jpg")',
            'url("images/2.jpg")',
            'url("images/3.jpg")'
        ];
        let currentSlide = 0;

        const prevBtn = document.querySelector('.prev-slide');
        const nextBtn = document.querySelector('.next-slide');

        function updateSlide() {
            heroSection.style.backgroundImage = slides[currentSlide];
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % slides.length;
                updateSlide();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                updateSlide();
            });
        }
    }

    // 5. Visitor Counter Animation
    const counters = document.querySelectorAll('.visitor-counter .digit');
    if (counters.length > 0) {
        // Just a simple random flicker effect on load to simulate counting
        counters.forEach(digit => {
            const finalVal = digit.innerText;
            let current = 0;
            const target = parseInt(finalVal, 10) || 0;
            if (target > 0) {
                const interval = setInterval(() => {
                    current += Math.ceil(target / 10);
                    if (current >= target) {
                        digit.innerText = finalVal;
                        clearInterval(interval);
                    } else {
                        digit.innerText = current % 10;
                    }
                }, 50);
            }
        });
    }

});
