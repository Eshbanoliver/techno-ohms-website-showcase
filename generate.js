const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

// Replace active nav
html = html.replace(
    '<li><a href="#" class="active">HOME</a></li>\n                <li><a href="#">ABOUT US</a></li>',
    '<li><a href="index.html">HOME</a></li>\n                <li><a href="about.html" class="active">ABOUT US</a></li>'
);

// Extract top and bottom
const top_part = html.split('<!-- Hero Section -->')[0];
const bottom_part = '    <!-- CTA Bar -->' + html.split('<!-- CTA Bar -->')[1];

// New Content
const new_content = `<!-- Page Title Banner -->
    <section class="page-title-banner" style="background-image: url('images/main-slider/1.jpg');">
        <div class="banner-overlay"></div>
        <div class="container banner-content">
            <h1>ABOUT US</h1>
            <p>Home / About Us</p>
        </div>
    </section>

    <!-- About Us Page Content -->
    <section class="about-page-details">
        <div class="container">
            <h2 class="about-heading mb-4">About Us</h2>
            <p class="about-lead"><strong>PSP Techno Engineers Pvt. Ltd came into existence on July 2009.</strong> The organization was established with the objective of providing high quality automation, full turnkey solution and 24*7 service supports to the industries. Our services to customer involved design, supply, manufacturing, installation of Electrical Panels, A.C, PLC, Scada, instrumentation (temperature/flow/pressure, sensor & meter), etc.</p>
            
            <h3 class="auth-partner-left mt-3 mb-3">We are authorized channel partner of <img src="images/danfoss.png" alt="Danfoss"> for motion control products.</h3>
            
            <p class="about-lead">PSP Techno has grown exponentially since its inception. This has been possible due to highly versatile engineers who have proven experience. Our experience in a wide variety of industries provides us with unparalleled knowledge that enables us to undertake your tough design challenges.</p>

            <p class="about-lead mt-3">We are a group specialized in the following activities:</p>
            <ul class="activities-list">
                <li><i class="fa-solid fa-check"></i> Supply, Installation and Commissioning of Danfoss Drives and Soft Starters</li>
                <li><i class="fa-solid fa-check"></i> Design, Manufacturing & Automation of various kind of L.T. Panels.</li>
                <li><i class="fa-solid fa-check"></i> Development of HMI / SCADA software.</li>
                <li><i class="fa-solid fa-check"></i> Flow/temperature/level transmitter and sensor.</li>
                <li><i class="fa-solid fa-check"></i> Upgrading old machinery panel.</li>
            </ul>

            <p class="about-lead mt-4">PSP techno engineers provides you customized & end-to-end solutions. We work as a primary vendor on site as we take full responsibility of design integration panel wiring, testing, and commissioning at site. The ultimate goal of our company is to provide value added services to our customer's value chain. PSP Techno aims to deliver comprehensive solutions ("Total Automation Solution"), and be one Stop Shop for all your process implementation needs. We help our clients achieve best in class process standards and thus making them to gain a competitive edge.</p>

            <p class="about-lead mt-3">Please check out our gallery to see all our hard work we have done in past...<br>
            Please do visit our Products page or Contact Us page with your related enquiries and our experts will attend you further.</p>
        </div>
    </section>

    <!-- Industries Section -->
    <section class="industries-section">
        <div class="container">
            <div class="section-title text-center">
                <h2>Industries</h2>
                <div class="ornament mx-auto"><span></span></div>
            </div>
            <div class="industries-text">
                <p>On OFF/On line Data collection from process, machine, and any related to energy parameter</p>
                <p>All related to control, sequence or automatic mechanism parameter monitoring and control with interlock</p>
                <p class="industries-tags">Packaging &nbsp;&bull;&nbsp; Process &nbsp;&bull;&nbsp; Material handling solution &nbsp;&bull;&nbsp; Transport &nbsp;&bull;&nbsp; Water supply &nbsp;&bull;&nbsp; IT Solution</p>
                <p class="industries-tags">Oil and Gas / Petro chemical &nbsp;&bull;&nbsp; Cement &nbsp;&bull;&nbsp; Metal &nbsp;&bull;&nbsp; Pharma &nbsp;&bull;&nbsp; FMCG &nbsp;&bull;&nbsp; Power</p>
            </div>
        </div>
    </section>

    <!-- Our Products Range -->
    <section class="about-products-section">
        <div class="container details-grid">
            <div class="desc-col">
                <div class="section-title text-left">
                    <h2>Our Products Range</h2>
                    <div class="ornament left-ornament"><span></span></div>
                </div>
                <div class="two-col-list">
                    <ul>
                        <li><i class="fa-solid fa-caret-right"></i> A.C Drives</li>
                        <li><i class="fa-solid fa-caret-right"></i> Automation Panels ( PLC/Drives/Scada)</li>
                        <li><i class="fa-solid fa-caret-right"></i> IOT Base Distribution Panel / Board</li>
                        <li><i class="fa-solid fa-caret-right"></i> Customized Panels ( MCC/PCC/APFC/AMF)</li>
                        <li><i class="fa-solid fa-caret-right"></i> Servo System, Stepper System & Motion Controller</li>
                        <li><i class="fa-solid fa-caret-right"></i> Drives and Accessories</li>
                        <li><i class="fa-solid fa-caret-right"></i> Software / HMI/Scada / PLC</li>
                        <li><i class="fa-solid fa-caret-right"></i> Flow / Temperature</li>
                        <li><i class="fa-solid fa-caret-right"></i> Water Supply, Stepper and PMSM System Motor</li>
                        <li><i class="fa-solid fa-caret-right"></i> SMPS, Encoder Etc.</li>
                    </ul>
                    <ul>
                        <li><i class="fa-solid fa-caret-right"></i> Soft starter / Heavy duty Auto / Transformer</li>
                        <li><i class="fa-solid fa-caret-right"></i> Servo / Synchronization systems</li>
                        <li><i class="fa-solid fa-caret-right"></i> Encoder (Rotary)</li>
                        <li><i class="fa-solid fa-caret-right"></i> AC/DC Motor Integrated panel systems</li>
                        <li><i class="fa-solid fa-caret-right"></i> IOT Base Control Board</li>
                        <li><i class="fa-solid fa-caret-right"></i> Temperature monitoring</li>
                        <li><i class="fa-solid fa-caret-right"></i> VFDs & Accessories</li>
                        <li><i class="fa-solid fa-caret-right"></i> PLC, SCADA, Drives</li>
                    </ul>
                </div>
            </div>
            <div class="img-col">
                <img src="images/Our-Product-Ranges-1.jpg" alt="Products Range" class="full-img">
            </div>
        </div>
        
        <div class="container details-grid pt-5">
            <div class="img-col">
                <img src="images/amf-dg-synchro-panel.jpg" alt="Wiring Panel" class="full-img">
            </div>
            <div class="desc-col policies-col">
                <div class="section-title text-left">
                    <h2>Our Policies</h2>
                    <div class="ornament left-ornament"><span></span></div>
                </div>
                <ul class="policies-list">
                    <li><i class="fa-regular fa-square-check"></i> Quality</li>
                    <li><i class="fa-regular fa-square-check"></i> Consistency</li>
                    <li><i class="fa-regular fa-square-check"></i> Efficiency</li>
                    <li><i class="fa-regular fa-square-check"></i> Delivery</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Our Values -->
    <section class="our-values-section">
        <div class="container text-center">
            <div class="section-title">
                <h2>Our Values</h2>
                <div class="ornament mx-auto"><span></span></div>
            </div>
            <p class="values-desc">Our values are defined by out dedication to produce safe and quality products.<br>We have strict standard for the safe behavior of our employees and the protection of environment.</p>
            <p class="values-list">Reliability &nbsp;&bull;&nbsp; Hard Work &nbsp;&bull;&nbsp; Dedication &nbsp;&bull;&nbsp; Accountability &nbsp;&bull;&nbsp; Ambition &nbsp;&bull;&nbsp; Continuous development</p>
        </div>
    </section>

    <!-- Why Us -->
    <section class="why-us-section">
        <div class="container text-center">
            <div class="section-title">
                <h2>Why Us ?</h2>
                <div class="ornament mx-auto"><span></span></div>
            </div>
            <p class="why-subtitle">What distinguish our company from the rest in the given attribute:</p>
            <p class="why-list mt-3">High Standard &nbsp;&bull;&nbsp; Timely delivery of products &nbsp;&bull;&nbsp; Competitive pricing</p>
            <p class="why-list mt-2">Several branches &nbsp;&bull;&nbsp; 24/7 service Support &nbsp;&bull;&nbsp; Quality service to client</p>
        </div>
    </section>

    <!-- The Future -->
    <section class="future-section">
        <div class="container text-center">
            <div class="section-title">
                <h2>The Future</h2>
                <div class="ornament mx-auto"><span></span></div>
            </div>
            <p class="future-desc">Our aim is to provide complete and cost effective automation, electrical, drives, instrumentation panels, installation, commissioning services, to fulfill required norms of process equipment providing complete technical assistance in choosing the right component matching exact standard policies requiring plant efficiency, this is possible by offering innovative products services having quality & reliability features as parameter.</p>
            <p class="future-desc mt-3">We expect our current products offering to act as catalyst for future business expansion in areas such as turn-key systems, project management, integration and development of software... which will allow us to become your first-choice partner.</p>
        </div>
    </section>
`;

fs.writeFileSync('about.html', top_part + new_content + bottom_part, 'utf-8');
console.log("Written about.html");
