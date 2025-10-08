// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    
    // In a real application, you would send this data to a server
    // For now, we'll just show a success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and property cards
document.querySelectorAll('.service-card, .property-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Mobile menu toggle (for future implementation)
const createMobileMenu = () => {
    const navbar = document.querySelector('.navbar .container');
    const navLinks = document.querySelector('.nav-links');
    
    // Create hamburger menu
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '☰';
    hamburger.style.display = 'none';
    hamburger.style.fontSize = '1.5rem';
    hamburger.style.cursor = 'pointer';
    
    // Check if screen is mobile
    if (window.innerWidth <= 768) {
        hamburger.style.display = 'block';
        navbar.appendChild(hamburger);
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
};

// Initialize on load
window.addEventListener('load', createMobileMenu);
window.addEventListener('resize', createMobileMenu);

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});

// Counter animation for stats
const animateCounters = () => {
    const stats = document.querySelectorAll('.stat h3');
    
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            stat.textContent = stat.textContent; // Keep original text
                            clearInterval(counter);
                        } else {
                            if (stat.textContent.includes('+')) {
                                stat.textContent = Math.floor(current) + '+';
                            } else if (stat.textContent.includes('%')) {
                                stat.textContent = Math.floor(current) + '%';
                            } else {
                                stat.textContent = Math.floor(current);
                            }
                        }
                    }, 16);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(stat.parentElement);
    });
};

animateCounters();
