document.addEventListener('DOMContentLoaded', function() {
    initStickyBar();
    initMarquee();
    initCTATracking();
});

function initStickyBar() {
    const stickyBar = document.getElementById('sticky-cta');
    let isVisible = false;
    
    function updateStickyBar() {
        const scrollPosition = window.scrollY;
        const shouldShow = scrollPosition > 200;
        
        if (shouldShow && !isVisible) {
            stickyBar.classList.add('visible');
            isVisible = true;
        } else if (!shouldShow && isVisible) {
            stickyBar.classList.remove('visible');
            isVisible = false;
        }
    }
    
    window.addEventListener('scroll', updateStickyBar, { passive: true });
    updateStickyBar();
}

function initMarquee() {
    const marqueeContent = document.querySelector('.marquee-content');
    
    if (!marqueeContent) return;
    
    if (!marqueeContent.dataset.cloned) {
        const marqueeItems = marqueeContent.innerHTML;
        marqueeContent.innerHTML = marqueeItems + marqueeItems;
        marqueeContent.dataset.cloned = 'true';
    }
    
    marqueeContent.addEventListener('mouseenter', function() {
        marqueeContent.style.animationPlayState = 'paused';
    });
    
    marqueeContent.addEventListener('mouseleave', function() {
        marqueeContent.style.animationPlayState = 'running';
    });
}

function initCTATracking() {
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    
    phoneLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click_to_call', {
                    'event_category': 'engagement',
                    'event_label': 'phone_cta',
                    'phone_number': '+1-888-504-4553'
                });
            }
            
            console.log('Phone CTA clicked:', link.href);
        });
    });
    
    const chips = document.querySelectorAll('.chip');
    
    chips.forEach(function(chip) {
        chip.addEventListener('click', function(e) {
            const chipLabel = chip.textContent.trim();
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'engagement',
                    'event_label': 'filter_chip',
                    'custom_parameter': chipLabel
                });
            }
            
            console.log('Filter chip clicked:', chipLabel);
        });
    });
    
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(function(item) {
        const summary = item.querySelector('summary');
        
        summary.addEventListener('click', function(e) {
            const question = summary.textContent.trim();
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'faq',
                    'event_label': question,
                    'custom_parameter': item.hasAttribute('open') ? 'close' : 'open'
                });
            }
            
            console.log('FAQ clicked:', question);
        });
    });
}

window.addEventListener('error', function(e) {
    console.log('JavaScript error:', e.error);
});
