document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelector('.navlist');
    const connectBtn = document.querySelector('.contact-btn');

    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('mobile-active');
        connectBtn.classList.toggle('mobile-active');
        
        // Toggle menu icon
        const icon = mobileMenu.querySelector('i');
        icon.classList.toggle('bx-menu-wider');
        icon.classList.toggle('bx-x');
    });

    // Close mobile menu when clicking on links
    document.querySelectorAll('.navlist a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('mobile-active');
                connectBtn.classList.remove('mobile-active');
                mobileMenu.querySelector('i').classList.replace('bx-x', 'bx-menu-wider');
            }
        });
    });

    // Skills Infinite Loop
    const track = document.querySelector('.skills-track');
    if (track) {
        track.innerHTML += track.innerHTML; // Duplicate for seamless loop
    }

    // Animate Skill Bars on Scroll
    const strengthBars = document.querySelectorAll('.strength-bar');
    const barObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                bar.style.width = bar.getAttribute('data-width') + '%';
                barObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });

    strengthBars.forEach(bar => barObserver.observe(bar));

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', () => {
        scrollToTopBtn.classList.toggle('show', window.pageYOffset > 300);
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Smooth Scrolling for Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Contact Form Submission
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
        
        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        submitBtn.style.background = '#47a248';

        setTimeout(() => {
            this.reset();
            submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-arrow-right"></i>';
            submitBtn.style.background = '';
        }, 2000);
    });
});