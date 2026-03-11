// script.js

// 1. Sticky Header & Menu (Init once)
function initGlobal() {
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

    // 2. Mobile Menu Toggle (Event Delegation)
    document.addEventListener('click', function(e) {
        if (e.target.closest('#mobile-toggle') || e.target.classList.contains('fa-bars')) {
            e.preventDefault();
            const navLinks = document.querySelector('.nav-links');
            if (navLinks) navLinks.classList.toggle('active');
        }
    });
}

// Scroll Reveal Observer
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
        observer.observe(el);
    });
}

// 3D Hover Tilt Effect
function initTiltEffect() {
    const cards = document.querySelectorAll('.service-card-new, .service-card, .cert-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) translateY(0) rotateX(0deg) rotateY(0deg)`;
        });
    });
}

// Back to Top Button
function initBackToTop() {
    let btt = document.getElementById('back-to-top');
    if (!btt) {
        btt = document.createElement('div');
        btt.id = 'back-to-top';
        btt.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
        document.body.appendChild(btt);
        
        btt.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btt.classList.add('show');
        } else {
            btt.classList.remove('show');
        }
    });
}

// Parallax Effect for Banners
function initParallax() {
    const banners = document.querySelectorAll('.page-title-banner, .hero-section');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        banners.forEach(banner => {
            const speed = 0.5;
            banner.style.backgroundPositionY = -(scrolled * speed) + 'px';
        });
    });
}

function initAll() {
    // 3. Dropdowns (Mobile)
    const dropdowns = document.querySelectorAll('.dropdown > a');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function (e) {
            if (window.innerWidth <= 991) {
                const parent = this.parentElement;
                if (parent.classList.contains('mega-dropdown')) {
                    // Stop event if it's a mega menu link to allow toggling on mobile
                    if (this.getAttribute('href') !== '#') {
                        // If it's a real link, maybe we want to allow navigation or just toggle
                        // For now, toggle
                        e.preventDefault();
                        parent.classList.toggle('active');
                    }
                } else {
                    e.preventDefault();
                    parent.classList.toggle('open');
                }
            }
        });
    });

    // 4. Hero Slider
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
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
            nextBtn.onclick = () => {
                currentSlide = (currentSlide + 1) % slides.length;
                updateSlide();
            };
        }

        if (prevBtn) {
            prevBtn.onclick = () => {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                updateSlide();
            };
        }
        
        // Auto slide
        const autoSlide = setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlide();
        }, 5000);
        
        // Clean up on page leave (handled by ajax logic)
        heroSection.dataset.interval = autoSlide;
    }

    // 5. Visitor Counter Animation
    const counters = document.querySelectorAll('.visitor-counter .digit');
    if (counters.length > 0) {
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

    // Init Enhanced Features
    initScrollReveal();
    initTiltEffect();
    initParallax();
}

// AJAX Navigation Logic
function initAjax() {
    const loader = document.createElement('div');
    loader.id = 'loader';
    document.body.appendChild(loader);

    document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;

        const url = link.getAttribute('href');
        
        // Check if it's a local link and not a special link
        if (url && !url.startsWith('http') && !url.startsWith('mailto:') && !url.startsWith('tel:') && !url.startsWith('#') && !url.endsWith('.pdf')) {
            e.preventDefault();
            loadPage(url);
        }
    });

    window.addEventListener('popstate', function() {
        const path = window.location.pathname.split('/').pop() || 'index.html';
        loadPage(path, false);
    });
}

async function loadPage(url, push = true) {
    const loader = document.getElementById('loader');
    const content = document.getElementById('page-content');
    
    if (!content) return;

    loader.className = 'loading';
    content.classList.add('fade-out');

    try {
        const response = await fetch(url);
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        const newContent = doc.querySelector('#page-content');
        const newTitle = doc.title;

        if (newContent) {
            setTimeout(() => {
                content.innerHTML = newContent.innerHTML;
                document.title = newTitle;
                content.classList.remove('fade-out');
                loader.className = 'finish';
                
                if (push) {
                    history.pushState({}, '', url);
                }

                // Update active links in nav
                const navLinksList = document.querySelectorAll('.nav-links a');
                navLinksList.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href && (url === href || (url === 'index.html' && href === 'index.html'))) {
                        link.classList.add('active');
                        // Also handle dropdown parents
                        const parentDropdown = link.closest('.dropdown');
                        if (parentDropdown) parentDropdown.querySelector('a').classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });

                // Re-init scripts
                initAll();
                
                // Scroll to top
                window.scrollTo(0, 0);

                setTimeout(() => {
                    loader.className = '';
                }, 600);
            }, 300);
        } else {
            window.location.href = url;
        }
    } catch (err) {
        console.error('AJAX Load Error:', err);
        window.location.href = url;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initGlobal();
    initAll();
    initAjax();
    initBackToTop();
});
