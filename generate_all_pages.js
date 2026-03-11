const fs = require('fs');

const sharedHeaderHead = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="PSP Techno Engineers Pvt. Ltd. - Authorized channel partner of Danfoss for motion control products.">
    <title>PSP Techno Engineers Pvt. Ltd | {{TITLE}}</title>
    <link rel="preconnect" href="https://cdnjs.cloudflare.com">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" media="print" onload="this.media='all'">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Preloader -->
    <div id="site-preloader" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #ffffff; z-index: 10000; display: flex; align-items: center; justify-content: center; transition: opacity 0.5s ease, visibility 0.5s ease;">
        <img src="images/preloader.gif" alt="Loading..." style="width: 80px;">
    </div>
    <div class="top-bar">
        <div class="container top-bar-inner">
            <div class="top-contact">
                <a href="mailto:support@psptechno.com"><i class="fa-solid fa-envelope"></i> support@psptechno.com</a>
                <a href="tel:+919650791461"><i class="fa-solid fa-phone"></i> +91 9650791461-62-63</a>
            </div>
            <div class="top-social">
                <a href="#" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                <a href="#" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                <a href="#" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
        </div>
    </div>
    <header class="main-header">
        <div class="container header-inner">
            <div class="logo">
                <a href="index.html"><img src="images/logo-small.jpg" alt="Logo" id="logo-img"></a>
            </div>
            <div class="header-info">
                <div class="info-box">
                    <div class="icon"><i class="fa-regular fa-envelope"></i></div>
                    <div class="text">
                        <a href="mailto:sales@psptechno.com">sales@psptechno.com</a><br>
                        <a href="mailto:design@psptechno.com">design@psptechno.com</a>
                    </div>
                </div>
                <div class="info-action">
                    <a href="images/PSP-Brochure.pdf" target="_blank" class="btn-ecat">E-catalogue <i class="fa-solid fa-download"></i></a>
                </div>
            </div>
        </div>
    </header>
    <nav class="navbar">
        <div class="container navbar-inner">
            <ul class="nav-links">
                <li><a href="index.html" class="{{HOME_ACTIVE}}">HOME</a></li>
                <li><a href="about-us.html" class="{{ABOUT_ACTIVE}}">ABOUT US</a></li>
                <li><a href="certifications.html" class="{{CERT_ACTIVE}}">CERTIFICATIONS</a></li>
                <li><a href="partners.html" class="{{PARTNERS_ACTIVE}}">PARTNERS</a></li>
                <li class="dropdown mega-dropdown">
                    <a href="services.html" class="{{SERVICES_ACTIVE}}">SERVICES <i class="fa-solid fa-angle-down"></i></a>
                    <div class="mega-menu">
                        <div class="container">
                            <div class="mega-menu-grid">
                                <div class="mega-menu-col">
                                    <h3>A.C. Drive</h3>
                                    <ul>
                                        <li><a href="vlt-micro-drive-fc-51.html">VLT® Micro Drive FC 51</a></li>
                                        <li><a href="vlt-fc-360-automation-drive.html">VLT® FC 360 Automation Drive</a></li>
                                        <li><a href="vlt-fc-101-hvac-drive.html">VLT® FC 101 Hvac Drive</a></li>
                                        <li><a href="vlt-hvac-drive-fc-102.html">VLT® HVAC Drive FC 102</a></li>
                                        <li><a href="vlt-refrigeration-drive-fc-103.html">VLT® Refrigeration Drive FC 103</a></li>
                                        <li><a href="vlt-aqua-drive-fc-202.html">VLT® Aqua Drive FC 202</a></li>
                                        <li><a href="vacon-100-industrial.html">VACON® 100 Industrial</a></li>
                                    </ul>
                                </div>
                                <div class="mega-menu-col">
                                    <h3>LT Panels</h3>
                                    <ul>
                                        <li><a href="mcc-panel.html">M.C.C Panel</a></li>
                                        <li><a href="pcc-panel.html">P.C.C Panel</a></li>
                                        <li><a href="apfc-panel.html">A.P.F.C Panel</a></li>
                                        <li><a href="amf-dg-synchro-panel.html">AMF / DG Synchro. Panel</a></li>
                                        <li><a href="plc-panel.html">P.L.C Panel</a></li>
                                    </ul>
                                </div>
                                <div class="mega-menu-col">
                                    <h3>Starters & Filters</h3>
                                    <ul>
                                        <li><a href="vlt-compact-starter-mcd-201-202.html">VLT® Compact Starter MCD</a></li>
                                        <li><a href="vlt-soft-starter-mcd-500.html">VLT® Soft Starter MCD 500</a></li>
                                        <li><a href="vlt-soft-starter-mcd-600.html">VLT® Soft Starter MCD 600</a></li>
                                        <li><a href="vlt-ahf-005-ahf-010-harmonic-filters.html">Harmonic Filters</a></li>
                                    </ul>
                                </div>
                                <div class="mega-menu-col">
                                    <h3>Other Solutions</h3>
                                    <ul>
                                        <li><a href="industrial-lt-ht-cables.html">Industrial LT/HT Cables</a></li>
                                        <li><a href="traverse-unit-assembly.html">Traverse Unit & Assembly</a></li>
                                        <li><a href="plc-scada-servo.html">PLC's, Scada, Servo</a></li>
                                        <li><a href="instrumentation-control.html">Instrumentation & Control</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li><a href="clients.html" class="{{CLIENTS_ACTIVE}}">CLIENTS</a></li>
                <li class="dropdown">
                    <a href="#">GALLERY <i class="fa-solid fa-angle-down"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Events Gallery</a></li>
                        <li><a href="#">Products Gallery</a></li>
                        <li><a href="#">Video Gallery</a></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#">GET IN TOUCH <i class="fa-solid fa-angle-down"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="contact-us.html">Contact Us</a></li>
                        <li><a href="#">Enquiry</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </li>
            </ul>
            <div class="nav-icons">
                <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                <a href="#" id="mobile-toggle"><i class="fa-solid fa-bars"></i></a>
            </div>
        </div>
    </nav>
    <main id="page-content">
`;

const sharedFooterParts = `
    </main>
    <!-- CTA Bar -->
    <div class="cta-bar">
        <div class="container cta-inner">
            <h3 class="cta-text">We are Trusted Globally by Millions of Clients</h3>
            <a href="contact-us.html" class="btn-dark">CONTACT US NOW</a>
        </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <div class="container footer-grid">
            <div class="footer-col">
                <h3>About Us</h3>
                <p>PSP Techno Engineers Pvt. Ltd. came into existence on July 2009. The organization was established with the objective of providing high quality automation, full turnkey solution and 24*7 service supports to the industries.</p>
                <a href="about-us.html" class="btn-outline-small">READ MORE</a>
                <div class="visitor-counter">
                    <span class="digit">0</span><span class="digit">0</span><span class="digit">6</span><span class="digit">8</span><span class="digit">3</span><span class="digit">5</span><span class="digit">0</span>
                </div>
            </div>
            <div class="footer-col">
                <h3>Information</h3>
                <ul class="footer-links">
                    <li><a href="index.html"><i class="fa-solid fa-caret-right"></i> Home</a></li>
                    <li><a href="about-us.html"><i class="fa-solid fa-caret-right"></i> About Us</a></li>
                    <li><a href="#"><i class="fa-solid fa-caret-right"></i> Our Products</a></li>
                    <li><a href="services.html"><i class="fa-solid fa-caret-right"></i> Services</a></li>
                    <li><a href="partners.html"><i class="fa-solid fa-caret-right"></i> Partners</a></li>
                    <li><a href="#"><i class="fa-solid fa-caret-right"></i> Enquiry</a></li>
                    <li><a href="contact-us.html"><i class="fa-solid fa-caret-right"></i> Contact Us</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h3>Latest Projects</h3>
                <div class="project-gallery">
                    <img src="images/project-thumb-1.jpg" alt="P1" loading="lazy">
                    <img src="images/project-thumb-2.jpg" alt="P2" loading="lazy">
                    <img src="images/project-thumb-3.jpg" alt="P3" loading="lazy">
                    <img src="images/project-thumb-4.jpg" alt="P4" loading="lazy">
                    <img src="images/project-thumb-5.jpg" alt="P5" loading="lazy">
                    <img src="images/project-thumb-6.jpg" alt="P6" loading="lazy">
                    <img src="images/project-thumb-7.jpg" alt="P7" loading="lazy">
                    <img src="images/project-thumb-8.jpg" alt="P8" loading="lazy">
                    <img src="images/project-thumb-9.jpg" alt="P9" loading="lazy">
                </div>
            </div>
            <div class="footer-col">
                <h3>Contact Us</h3>
                <ul class="contact-list">
                    <li><i class="fa-solid fa-location-dot"></i> <div><strong>Corporate office:</strong> 306-307 3rd Floor, Aggarwal Modern Bazaar, C-33, Lawrence Road Ind. Area, Delhi - 110035</div></li>
                    <li><i class="fa-solid fa-location-dot"></i> <div><strong>Works:</strong> Plot No. 437, Block - Udyog Kendra Extn - II, Ecotech -III, Greater Noida , Gautam Buddh Nagar, Uttar Pradesh - 201301</div></li>
                    <li><i class="fa-solid fa-phone"></i> <div><a href="tel:01127180524">011 - 2718 0524-25, 4701 2626</a></div></li>
                    <li><i class="fa-solid fa-phone"></i> <div><a href="tel:+919650791461">+91 - 96507 91461 - 62 - 63</a></div></li>
                    <li><i class="fa-solid fa-envelope"></i> <div><a href="mailto:sales@psptechno.com">sales@psptechno.com</a></div></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container footer-bottom-inner">
                <div>All Rights Reserved © 2022 www.psptechno.com</div>
                <div>Designed & Hosted By : <a href="#">Hanji Creations</a></div>
            </div>
        </div>
    </footer>
    <!-- WhatsApp Icon -->
    <a href="https://wa.me/919650791461" class="whatsapp-float" target="_blank">
        <i class="fa-brands fa-whatsapp"></i>
    </a>
    <script>
        window.addEventListener('load', function() {
            const preloader = document.getElementById('site-preloader');
            if (preloader) {
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
            }
        });
    </script>
    <script src="script.js"></script>
</body>
</html>
`;

function buildPage(title, content, activeKey) {
    let header = sharedHeaderHead.replace('{{TITLE}}', title);
    const keys = ['HOME', 'ABOUT', 'CERT', 'PARTNERS', 'SERVICES', 'CLIENTS'];
    for (const key of keys) {
        header = header.replace('{{' + key + '_ACTIVE}}', (key === activeKey ? 'active' : ''));
    }
    return header + content + sharedFooterParts;
}

const indexContent = `
    <!-- Hero Section -->
    <section class="hero-section" style="background-image: url('images/1.jpg');">
        <div class="hero-overlay"></div>
        <div class="container hero-content text-left">
            <h1 class="hero-title">The Excellent<br>Products We Offer</h1>
            <p class="hero-subtitle">Authorized distributor for Motion Control product AC Drive (VFD), Soft Starter, Geared Motor Servo Drive as well as authorized channel partner of Danfoss.</p>
            <div class="hero-buttons">
                <a href="#" class="btn-primary">KNOW MORE</a>
                <a href="contact-us.html" class="btn-outline">CONTACT US</a>
            </div>
            <div class="hero-nav">
                <i class="fa-solid fa-chevron-left prev-slide"></i>
                <i class="fa-solid fa-chevron-right next-slide"></i>
            </div>
        </div>
    </section>

    <!-- Welcome Ribbon -->
    <div class="welcome-ribbon-wrapper">
        <div class="welcome-ribbon">
            <div class="container">
                <h2>WELCOME TO PSP TECHNO ENGINEERS PVT LTD</h2>
                <p>We are authorized channel partner of <img src="images/danfoss.png" alt="Danfoss" class="inline-logo"> for motion control products.</p>
            </div>
        </div>
    </div>

    <!-- Services Grid -->
    <section class="services-section py-5 reveal">
        <div class="container">
            <div class="services-grid six-grid">
                <div class="service-card" style="background-image: url('images/Installation-and-Commissioning-1.jpg');">
                    <div class="overlay"></div>
                    <div class="content">
                        <i class="fa-solid fa-gear"></i>
                        <h3>INSTALLATION & COMMISSIONING</h3>
                    </div>
                </div>
                <div class="service-card" style="background-image: url('images/Servicing-and-Repairing.jpg');">
                    <div class="overlay"></div>
                    <div class="content">
                        <i class="fa-solid fa-envelope-open-text"></i>
                        <h3>SERVICING & REPAIRING</h3>
                    </div>
                </div>
                <div class="service-card" style="background-image: url('images/System-Integration-1.jpg');">
                    <div class="overlay"></div>
                    <div class="content">
                        <i class="fa-solid fa-lightbulb"></i>
                        <h3>SYSTEM INTEGRATION</h3>
                    </div>
                </div>
                <div class="service-card" style="background-image: url('images/System-Integration-1.jpg');">
                    <div class="overlay"></div>
                    <div class="content">
                        <i class="fa-solid fa-chart-bar"></i>
                        <h3>SYSTEM DESIGN</h3>
                    </div>
                </div>
                <div class="service-card" style="background-image: url('images/annual-maintenance-contract.jpg');">
                    <div class="overlay"></div>
                    <div class="content">
                        <i class="fa-solid fa-gem"></i>
                        <h3>AMC</h3>
                    </div>
                </div>
                <div class="service-card" style="background-image: url('images/Our-Product-Ranges.jpg');">
                    <div class="overlay"></div>
                    <div class="content">
                        <i class="fa-solid fa-chart-line"></i>
                        <h3>ACCESSORIES</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Our Clients -->
    <section class="clients-carousel py-5">
        <div class="container">
            <div class="section-header text-center">
                <h2>Our Clients</h2>
                <div class="title-decor"><span></span></div>
            </div>
            <div class="clients-grid">
                <div class="client-logo"><img src="images/Imperial-Malts.jpg" alt="Client 1" loading="lazy"></div>
                <div class="client-logo"><img src="images/MRL-1.jpg" alt="Client 2" loading="lazy"></div>
                <div class="client-logo"><img src="images/IndiaMART-PSP-Techno-Engineers-Private-Limited.jpg" alt="Client 3" loading="lazy"></div>
                <div class="client-logo"><img src="images/Imperial-Malts.jpg" alt="Client 4" loading="lazy"></div>
            </div>
            <div class="carousel-nav">
                <i class="fa-solid fa-chevron-left prev-client"></i>
                <i class="fa-solid fa-chevron-right next-client"></i>
            </div>
        </div>
    </section>

    <!-- About Us Section -->
    <section class="about-home-section py-5 text-center reveal">
        <div class="container">
            <div class="section-header">
                <h2>About Us</h2>
                <div class="title-decor"><span></span></div>
            </div>
            <h3>PSP Techno Engineers Pvt. Ltd come into existence on July 2009.</h3>
            <p>The organization was established with the objective of providing high quality automation, full turnkey solution and 24*7 service supports to the industries.</p>
            <div class="ribbon-secondary py-3 my-4">
                <h4>We are authorized channel partner of <img src="images/danfoss.png" alt="Danfoss" class="inline-logo"> for motion control products.</h4>
            </div>
            <p>PSP Techno has grown exponentially since its inception. This has been possible due to highly versatile engineers who have proven experience. Our experience in a wide variety of industries provides us with unparalleled knowledge that enables us to undertake your tough design challenges.</p>
            <a href="about-us.html" class="btn-primary mt-3">READ MORE</a>
        </div>
    </section>

    <!-- Our Products Range -->
    <section class="products-range py-5">
        <div class="container">
            <div class="section-header text-center">
                <h2>Our Products Range</h2>
                <div class="title-decor"><span></span></div>
            </div>
            <div class="products-grid three-grid">
                <div class="product-card">
                    <div class="ribbon corner-ribbon">VACON</div>
                    <img src="images/traverse-unit-assembly.jpg" alt="Product 1" loading="lazy">
                    <h3>Traverse unit Assembly</h3>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                    <a href="#" class="read-more">READ MORE <i class="fa-solid fa-angles-right"></i></a>
                </div>
                <div class="product-card">
                    <div class="ribbon corner-ribbon blue">DANFOSS</div>
                    <img src="images/plc_scada_servo.jpg" alt="Product 2" loading="lazy">
                    <h3>PLC, scada, Servo</h3>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                    <a href="#" class="read-more">READ MORE <i class="fa-solid fa-angles-right"></i></a>
                </div>
                <div class="product-card">
                    <div class="ribbon corner-ribbon">PSP</div>
                    <img src="images/amf-dg-synchro-panel.jpg" alt="Product 3" loading="lazy">
                    <h3>All types of LT Panel & Control desk</h3>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                    <a href="#" class="read-more">READ MORE <i class="fa-solid fa-angles-right"></i></a>
                </div>
            </div>
            <div class="carousel-nav mt-4">
                <i class="fa-solid fa-chevron-left prev-prod"></i>
                <i class="fa-solid fa-chevron-right next-prod"></i>
            </div>
        </div>
    </section>

    <!-- Customer Testimonials -->
    <section class="testimonials py-5">
        <div class="container">
            <div class="section-header text-center">
                <h2>Customer Testimonials</h2>
                <div class="title-decor"><span></span></div>
            </div>
            <div class="testimonials-grid two-grid">
                <div class="testimonial-card">
                    <img src="images/ELM.jpg" alt="Testimonial 1" loading="lazy">
                </div>
                <div class="testimonial-card">
                    <img src="images/HMC.jpg" alt="Testimonial 2" loading="lazy">
                </div>
            </div>
        </div>
    </section>
`;

const aboutContent = `
    <section class="page-title-banner" style="background-image: url('images/main-slider/1.jpg');">
        <div class="banner-overlay"></div>
        <div class="container banner-content text-center">
            <h1>ABOUT US</h1>
            <p>Home / About Us</p>
        </div>
    </section>
    <section class="py-5">
        <div class="container">
            <div class="row" style="display: flex; gap: 40px; align-items: center;">
                <div style="flex: 1;">
                    <h2>Our History</h2>
                    <p>PSP Techno Engineers Pvt. Ltd came into existence on July 2009. The organization was established with the objective of providing high quality automation, full turnkey solution and 24*7 service supports to the industries.</p>
                    <p>PSP Techno has grown exponentially since its inception. This has been possible due to highly versatile engineers who have proven experience. Our experience in a wide variety of industries provides us with unparalleled knowledge that enables us to undertake your tough design challenges.</p>
                </div>
                <div style="flex: 1;">
                    <img src="images/about-us-img.jpg" alt="About Us" class="img-fluid rounded shadow" onerror="this.src='images/1.jpg'" style="width: 100%; border-radius: 8px;">
                </div>
            </div>
        </div>
    </section>
`;

const certContent = `
    <section class="page-title-banner" style="background-image: url('images/1.jpg');">
        <div class="banner-overlay"></div>
        <div class="container banner-content text-center">
            <h1>CERTIFICATIONS</h1>
            <p>Home / Certifications</p>
        </div>
    </section>
    <section class="py-5">
        <div class="container">
            <div class="cert-grid">
                <div class="cert-card"><img src="images/ISO-9001.jpg" alt="ISO 9001"></div>
                <div class="cert-card"><img src="images/Danfoss-Certifications.jpg" alt="Danfoss"></div>
                <div class="cert-card"><img src="images/RR-Kabel-Cable-and-Wire-Fair-Certifications.jpg" alt="RR Kabel"></div>
                <div class="cert-card"><img src="images/GEF-UNIDO-BEE.jpg" alt="GEF UNIDO"></div>
            </div>
        </div>
    </section>
`;

const contactContent = `
    <section class="page-title-banner" style="background-image: url('images/1.jpg');">
        <div class="banner-overlay"></div>
        <div class="container banner-content text-center">
            <h1>CONTACT US</h1>
            <p>Home / Contact Us</p>
        </div>
    </section>
    <section class="py-5">
        <div class="container">
            <div class="details-grid">
                <div class="info-col">
                    <h3>Get In Touch</h3>
                    <p>Contact us for any technical support or enquiries.</p>
                    <ul class="contact-list">
                        <li><i class="fa-solid fa-location-dot"></i> 306-307, Aggarwal Modern Bazaar, C-33, Lawrence Road, Delhi - 110035</li>
                        <li><i class="fa-solid fa-phone"></i> +91 96507 91461</li>
                        <li><i class="fa-solid fa-envelope"></i> sales@psptechno.com</li>
                    </ul>
                </div>
                <div class="form-col">
                    <form class="contact-form">
                        <input type="text" placeholder="Your Name" required>
                        <input type="email" placeholder="Your Email" required>
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                        <button type="submit" class="btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
`;

fs.writeFileSync('index.html', buildPage('Home', indexContent, 'HOME'));
fs.writeFileSync('about-us.html', buildPage('About Us', aboutContent, 'ABOUT'));
fs.writeFileSync('certifications.html', buildPage('Certifications', certContent, 'CERT'));
fs.writeFileSync('contact-us.html', buildPage('Contact Us', contactContent, ''));
console.log("Pages generated successfully.");
