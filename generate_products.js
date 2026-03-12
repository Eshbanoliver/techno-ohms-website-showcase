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
                <li><a href="index.html">HOME</a></li>
                <li><a href="about-us.html">ABOUT US</a></li>
                <li><a href="certifications.html">CERTIFICATIONS</a></li>
                <li><a href="partners.html">PARTNERS</a></li>
                <li class="dropdown mega-dropdown">
                    <a href="products.html" class="active">PRODUCTS <i class="fa-solid fa-angle-down"></i></a>
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
                <li><a href="clients.html">CLIENTS</a></li>
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
                    <li><a href="products.html"><i class="fa-solid fa-caret-right"></i> Products</a></li>
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
            <div class="container footer-bottom-inner" style="justify-content: center; text-align: center;">
                <div>&copy; Copyright 2026 | Techno Ohms Solutions Pvt. Ltd. | All Rights Reserved | Powered by <a href="https://shapesway.in" target="_blank" rel="noopener" style="color: #28a745; text-decoration: none;">Shapesway Technologies Pvt. Ltd.</a></div>
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

const categories = [
    { title: "A.C. Drive", slug: "ac-drive", image: "images/ac-drive-category.jpg" },
    { title: "All Types Of LT Panel & Control Desk", slug: "lt-panel-control-desk", image: "images/lt-panel-category.jpg" },
    { title: "Soft Starter", slug: "soft-starter", image: "images/soft-starter-category.jpg" },
    { title: "Harmonic Filters", slug: "harmonic-filters", image: "images/harmonic-filters-category.jpg" },
    { title: "Industrial LT/HT Cables", slug: "industrial-lt-ht-cables", image: "images/cables-category.jpg" },
    { title: "Traverse Unit & Assembly", slug: "traverse-unit-assembly", image: "images/traverse-category.jpg" },
    { title: "PLC's, Scada, Servo", slug: "plc-scada-servo", image: "images/plc-category.jpg" },
    { title: "Instrumentation & Control", slug: "instrumentation-control", image: "images/instrumentation-category.jpg" }
];

const subpages = [
    // A.C. Drive
    { cat: "ac-drive", title: "VLT® Micro Drive FC 51", slug: "vlt-micro-drive-fc-51" },
    { cat: "ac-drive", title: "VLT® FC 360 Automation Drive", slug: "vlt-fc-360-automation-drive" },
    { cat: "ac-drive", title: "VLT® FC 101 Hvac Drive", slug: "vlt-fc-101-hvac-drive" },
    { cat: "ac-drive", title: "VLT® HVAC Drive FC 102", slug: "vlt-hvac-drive-fc-102" },
    { cat: "ac-drive", title: "VLT® Refrigeration Drive FC 103", slug: "vlt-refrigeration-drive-fc-103" },
    { cat: "ac-drive", title: "VLT® Aqua Drive FC 202", slug: "vlt-aqua-drive-fc-202" },
    { cat: "ac-drive", title: "VLT® Midi Drive FC 280", slug: "vlt-midi-drive-fc-280" },
    { cat: "ac-drive", title: "VLT® Automation Drive FC 301 & 302", slug: "vlt-automation-drive-fc-301-302" },
    { cat: "ac-drive", title: "VLT® Decentral Drive FCD 302", slug: "vlt-decentral-drive-fcd-302" },
    { cat: "ac-drive", title: "VACON® 100 Industrial", slug: "vacon-100-industrial" },
    { cat: "ac-drive", title: "VACON® NXP Common DC Bus", slug: "vacon-nxp-common-dc-bus" },
    // Panels
    { cat: "lt-panel-control-desk", title: "M.C.C Panel", slug: "mcc-panel" },
    { cat: "lt-panel-control-desk", title: "P.C.C Panel", slug: "pcc-panel" },
    { cat: "lt-panel-control-desk", title: "A.P.F.C Panel", slug: "apfc-panel" },
    { cat: "lt-panel-control-desk", title: "AMF / DG Synchro. Panel", slug: "amf-dg-synchro-panel" },
    { cat: "lt-panel-control-desk", title: "P.L.C Panel", slug: "plc-panel" },
    // Soft Starter
    { cat: "soft-starter", title: "VLT® Compact Starter MCD 201 & 202", slug: "vlt-compact-starter-mcd-201-202" },
    { cat: "soft-starter", title: "VLT® Soft Starter MCD 500", slug: "vlt-soft-starter-mcd-500" },
    { cat: "soft-starter", title: "VLT® Soft Starter MCD 600", slug: "vlt-soft-starter-mcd-600" },
    // Harmonic Filters
    { cat: "harmonic-filters", title: "VLT® AHF 005 & AHF 010 Harmonic Filters", slug: "vlt-ahf-005-ahf-010-harmonic-filters" }
];

function generateSidebar(currentSlug) {
    let html = `
    <div class="products-sidebar">
        <ul>`;
    
    categories.forEach(cat => {
        const isActive = cat.slug === currentSlug || subpages.some(sp => sp.slug === currentSlug && sp.cat === cat.slug);
        html += `
            <li class="${isActive ? 'active' : ''}">
                <a href="${cat.slug}.html">${cat.title} <i class="fa-solid fa-chevron-right"></i></a>`;
        
        // If active, show subpages
        const catSubpages = subpages.filter(sp => sp.cat === cat.slug);
        if (catSubpages.length > 0 && isActive) {
            html += `<ul class="submenu">`;
            catSubpages.forEach(sp => {
                html += `<li><a href="${sp.slug}.html" class="${sp.slug === currentSlug ? 'active' : ''}">${sp.title}</a></li>`;
            });
            html += `</ul>`;
        }
        
        html += `</li>`;
    });
    
    html += `
        </ul>
    </div>`;
    return html;
}

function generateBanner(title) {
    return `
    <section class="page-title-banner" style="background-image: url('images/amf-dg-synchro-panel.jpg');">
        <div class="banner-overlay"></div>
        <div class="container banner-content text-center">
            <h1>${title.toUpperCase()}</h1>
            <p>Home / Products / ${title}</p>
        </div>
    </section>`;
}

// 1. Generate Services Landing Page
// 1. Generate Services Landing Page
const servicesContent = `
    ${generateBanner("Products")}
    <div class="container section-padding">
        <div class="section-title text-center">
            <span class="subtitle">What We Offer</span>
            <h2>Our Expertise & Solutions</h2>
            <div class="divider mx-auto"></div>
            <p class="max-w-700 mx-auto" style="margin: 0 auto 50px;">PSP Techno Engineers Pvt. Ltd. provides a wide range of industrial automation products and solutions. We specialize in Motion Control products, Electrical Panels, and System Integration.</p>
        </div>
        
        <div class="services-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; margin-top: 50px;">
            ${categories.map(cat => `
                <div class="service-card-new" style="background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: all 0.3s ease; border: 1px solid #eee;">
                    <div class="card-img" style="height: 200px; overflow: hidden; position: relative;">
                        <img src="${cat.image}" alt="${cat.title}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='images/Installation-and-Commissioning.jpg'">
                        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(0deg, rgba(0,0,0,0.4) 0%, transparent 50%);"></div>
                    </div>
                    <div class="card-body" style="padding: 25px; text-align: center;">
                        <h3 style="font-size: 1.25rem; margin-bottom: 15px; color: #0c1728; font-weight: 700;">${cat.title}</h3>
                        <p style="font-size: 0.9rem; color: #666; margin-bottom: 20px; line-height: 1.6;">Premium industrial solutions and integration services for ${cat.title}.</p>
                        <a href="${cat.slug}.html" class="btn-outline-small" style="padding: 10px 25px; border: 1px solid #006DE4; color: #006DE4; border-radius: 5px; text-decoration: none; display: inline-block; transition: all 0.3s ease; font-weight: 600; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px;">Explore Details <i class="fa-solid fa-arrow-right" style="margin-left: 8px;"></i></a>
                    </div>
                </div>
            `).join('')}
        </div>

        <div class="extra-products section-padding" style="margin-top: 80px; background: #f8f9fa; border-radius: 20px; padding: 60px 40px;">
            <div class="row" style="display: flex; flex-wrap: wrap; gap: 50px; align-items: center;">
                <div class="col" style="flex: 1; min-width: 320px;">
                    <div style="position: relative;">
                        <img src="images/System-Integration.jpg" alt="Integration" style="width: 100%; border-radius: 15px; box-shadow: 0 20px 50px rgba(0,0,0,0.12);">
                        <div style="position: absolute; -bottom: 20px; -right: 20px; background: var(--primary-blue); color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 10px 20px rgba(0,0,0,0.2);">
                            <h4 style="margin: 0; font-size: 1.5rem;">15+</h4>
                            <p style="margin: 0; font-size: 0.8rem; opacity: 0.9;">Years Experience</p>
                        </div>
                    </div>
                </div>
                <div class="col" style="flex: 1.5; min-width: 320px;">
                    <span style="color: #e31e24; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; font-size: 0.85rem; display: block; margin-bottom: 10px;">Authorized Partner</span>
                    <h2 style="margin-bottom: 25px; font-size: 2.2rem; color: #0c1728;">Motion Control & Automation Center</h2>
                    <p style="margin-bottom: 30px; line-height: 1.8; color: #555;">We are authorized channel partners of Danfoss and Vacon, providing top-tier products and technical support. Our team of experienced engineers ensures that every project is executed with precision and quality.</p>
                    <ul class="activity-list" style="list-style: none; padding: 0;">
                        <li style="margin-bottom: 18px; display: flex; align-items: center; font-weight: 500; color: #333;"><i class="fa-solid fa-circle-check" style="color: #006DE4; margin-right: 15px; font-size: 1.3rem;"></i> 24*7 Technical Support & Service Help Desk</li>
                        <li style="margin-bottom: 18px; display: flex; align-items: center; font-weight: 500; color: #333;"><i class="fa-solid fa-circle-check" style="color: #006DE4; margin-right: 15px; font-size: 1.3rem;"></i> Professional Installation & Commissioning</li>
                        <li style="margin-bottom: 18px; display: flex; align-items: center; font-weight: 500; color: #333;"><i class="fa-solid fa-circle-check" style="color: #006DE4; margin-right: 15px; font-size: 1.3rem;"></i> Annual Maintenance Contract (AMC) Solutions</li>
                        <li style="margin-bottom: 0; display: flex; align-items: center; font-weight: 500; color: #333;"><i class="fa-solid fa-circle-check" style="color: #006DE4; margin-right: 15px; font-size: 1.3rem;"></i> Custom Control Panel Design & Manufacturing</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
`;
fs.writeFileSync('products.html', sharedHeaderHead.replace('{{TITLE}}', 'Products') + servicesContent + sharedFooterParts);

// 2. Generate Category Pages
categories.forEach(cat => {
    const catContent = `
        ${generateBanner(cat.title)}
        <div class="container">
            <div class="products-layout">
                ${generateSidebar(cat.slug)}
                <div class="products-main-content">
                    <h2>${cat.title}</h2>
                    <div class="product-detail-grid">
                        <div class="product-image-box">
                            <img src="${cat.image}" alt="${cat.title}" onerror="this.src='images/Installation-and-Commissioning.jpg'">
                        </div>
                        <div class="product-info-box">
                            <p>We provide high-quality ${cat.title} solutions tailored to your industrial needs. Our products are sourced from world-class manufacturers and integrated with precision.</p>
                            <p>Explore our range of products in this category using the sidebar menu.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    fs.writeFileSync(`${cat.slug}.html`, sharedHeaderHead.replace('{{TITLE}}', cat.title) + catContent + sharedFooterParts);
});

// 3. Generate Subpages
subpages.forEach(sp => {
    const spContent = `
        ${generateBanner(sp.title)}
        <div class="container">
            <div class="products-layout">
                ${generateSidebar(sp.slug)}
                <div class="products-main-content">
                    <h2>${sp.title}</h2>
                    <div class="product-detail-grid">
                        <div class="product-image-box">
                            <img src="images/${sp.slug}.jpg" alt="${sp.title}" loading="lazy" onerror="this.src='images/vlt-compact-starter-mcd-201-202.jpg'">
                        </div>
                        <div class="product-info-box">
                            <h3>Product Overview</h3>
                            <p>The ${sp.title} is designed for high performance and reliability in demanding industrial environments. It offers advanced features for precise control and energy efficiency.</p>
                            <div class="product-specs">
                                <h3>Technical Specifications</h3>
                                <table class="specs-table">
                                    <tr><td>Model</td><td>${sp.title}</td></tr>
                                    <tr><td>Manufacturer</td><td>Danfoss / Vacon</td></tr>
                                    <tr><td>Application</td><td>Industrial Automation</td></tr>
                                    <tr><td>Warranty</td><td>Standard Manufacturer Warranty</td></tr>
                                </table>
                            </div>
                            <a href="contact-us.html" class="btn-primary" style="display:inline-block; margin-top:30px;">Request A Quote</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    fs.writeFileSync(`${sp.slug}.html`, sharedHeaderHead.replace('{{TITLE}}', sp.title) + spContent + sharedFooterParts);
});

console.log("All products and subpages generated successfully.");
