// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });
}

// Smooth scroll for in-page links
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Carousel
const track = document.querySelector('[data-track]');
const prev = document.querySelector('[data-prev]');
const next = document.querySelector('[data-next]');
let index = 0;
function updateCarousel() {
    if (!track) return;
    const slides = track.children;
    const count = slides.length;
    index = (index + count) % count; // clamp
    track.style.transform = `translateX(-${index * 100}%)`;
}
if (prev && next && track) {
    prev.addEventListener('click', () => { index--; updateCarousel(); });
    next.addEventListener('click', () => { index++; updateCarousel(); });
    setInterval(() => { index++; updateCarousel(); }, 6000);
}

// Sticky CTA (appears after scrolling past hero)
const sticky = document.getElementById('stickyCta');
const hero = document.getElementById('hero');
function onScroll() {
    if (!sticky || !hero) return;
    const reveal = window.scrollY > (hero.offsetHeight * 0.6);
    sticky.setAttribute('aria-hidden', String(!reveal));
    sticky.style.display = reveal ? 'block' : 'none';
}
document.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('load', () => { onScroll(); });

// Cookie bar
const cookieBar = document.getElementById('cookieBar');
const cookieAccept = document.getElementById('cookieAccept');
if (cookieBar && cookieAccept) {
    const KEY = 'yb_cookie_ok';
    const ok = localStorage.getItem(KEY);
    if (!ok) cookieBar.hidden = false;
    cookieAccept.addEventListener('click', () => {
        localStorage.setItem(KEY, '1');
        cookieBar.hidden = true;
    });
}

// Forms (demo-only)
function serializeForm(form) {
    const data = new FormData(form);
    return new URLSearchParams(data).toString();
}

const appraisalForm = document.getElementById('appraisalForm');
if (appraisalForm) {
    appraisalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const q = serializeForm(appraisalForm);
        window.location.href = `mailto:hello@yourbrandpm.com?subject=Rental%20Appraisal%20Request&body=${encodeURIComponent(q)}`;
    });
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const q = serializeForm(contactForm);
        window.location.href = `mailto:hello@yourbrandpm.com?subject=Contact%20Request&body=${encodeURIComponent(q)}`;
    });
}

// Footer year
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
