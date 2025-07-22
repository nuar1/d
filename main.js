// DOM Content Loaded Event Listener
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initStickyBar();
    initMarquee();
    initCTATracking();
    initLazyLoadPolyfill();
    initPerformanceOptimizations();
});

// Sticky CTA Bar Functionality
function initStickyBar() {
    const stickyBar = document.getElementById('sticky-cta');
    const hero = document.getElementById('hero');
    let isVisible = false;
    
    // Throttle scroll events for better performance
    let ticking = false;
    
    function updateStickyBar() {
        const scrollPosition = window.scrollY;
        const shouldShow = scrollPosition > 200;
        
        if (shouldShow && !isVisible) {
            stickyBar.classList.add('visible');
            stickyBar.setAttribute('aria-hidden', 'false');
            isVisible = true;
        } else if (!shouldShow && isVisible) {
            stickyBar.classList.remove('visible');
            stickyBar.setAttribute('aria-hidden', 'true');
            isVisible = false;
        }
        
        ticking = false;
    }
    
    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(updateStickyBar);
            ticking = true;
        }
    }
    
    // Add scroll listener
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Initial check
    updateStickyBar();
}

// Logo Marquee Functionality
function initMarquee() {
    const marqueeContent = document.querySelector('.marquee-content');
    
    if (!marqueeContent) return;
    
    // Clone the content for seamless loop
    const marqueeItems = marqueeContent.innerHTML;
    marqueeContent.innerHTML = marqueeItems + marqueeItems;
    
    // Handle touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    marqueeContent.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
        marqueeContent.style.animationPlayState = 'paused';
    }, { passive: true });
    
    marqueeContent.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        marqueeContent.style.animationPlayState = 'running';
    }, { passive: true });
    
    // Handle mouse events for desktop
    marqueeContent.addEventListener('mouseenter', function() {
        marqueeContent.style.animationPlayState = 'paused';
    });
    
    marqueeContent.addEventListener('mouseleave', function() {
        marqueeContent.style.animationPlayState = 'running';
    });
}

// CTA Click Tracking with GTM
function initCTATracking() {
    // Track all phone number clicks
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    
    phoneLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            // Push GTM event
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click_to_call', {
                    'event_category': 'engagement',
                    'event_label': 'phone_cta',
                    'phone_number': '+1-888-504-4553'
                });
            }
            
            // Fallback for dataLayer
            if (typeof window.dataLayer !== 'undefined') {
                window.dataLayer.push({
                    'event': 'click_to_call',
                    'event_category': 'engagement',
                    'event_label': 'phone_cta',
                    'phone_number': '+1-888-504-4553'
                });
            }
            
            // Console log for debugging
            console.log('Phone CTA clicked:', link.href);
        });
    });
    
    // Track review badge clicks (outbound links)
    const reviewLinks = document.querySelectorAll('.see-more-link, .google-badge');
    
    reviewLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'outbound',
                    'event_label': 'review_link',
                    'transport_type': 'beacon'
                });
            }
            
            if (typeof window.dataLayer !== 'undefined') {
                window.dataLayer.push({
                    'event': 'outbound_click',
                    'event_category': 'reviews',
                    'event_label': 'review_link'
                });
            }
            
            console.log('Review link clicked');
        });
    });
    
    // Track filter chip interactions
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
            
            if (typeof window.dataLayer !== 'undefined') {
                window.dataLayer.push({
                    'event': 'filter_interaction',
                    'event_category': 'engagement',
                    'filter_type': chipLabel
                });
            }
            
            console.log('Filter chip clicked:', chipLabel);
        });
    });
}

// Lazy Load Polyfill for older Safari
function initLazyLoadPolyfill() {
    // Check if browser supports native lazy loading
    if ('loading' in HTMLImageElement.prototype) {
        // Native lazy loading is supported
        return;
    }
    
    // Polyfill for older browsers
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if (images.length === 0) return;
    
    // Create Intersection Observer
    const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    }, {
        // Load images 50px before they come into view
        rootMargin: '50px 0px',
        threshold: 0.01
    });
    
    images.forEach(function(img) {
        imageObserver.observe(img);
    });
}

// Performance Optimizations
function initPerformanceOptimizations() {
    // Preload critical resources
    preloadCriticalResources();
    
    // Optimize images
    optimizeImages();
    
    // Debounce resize events
    debounceResize();
    
    // Monitor Core Web Vitals
    monitorWebVitals();
}

function preloadCriticalResources() {
    // Preload Inter font weights
    const fontPreloads = [
        'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2',
        'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZ9hiJ-Ek-_EeA.woff2'
    ];
    
    fontPreloads.forEach(function(url) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'font';
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
        link.href = url;
        document.head.appendChild(link);
    });
}

function optimizeImages() {
    // Add WebP support detection
    const supportsWebP = (function() {
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        return canvas.toDataURL('image/webp').indexOf('webp') > -1;
    })();
    
    if (supportsWebP) {
        document.documentElement.classList.add('webp');
    }
    
    // Lazy load images that come into view
    const images = document.querySelectorAll('img');
    
    images.forEach(function(img) {
        // Add loading="lazy" if not already present
        if (!img.hasAttribute('loading')) {
            img.loading = 'lazy';
        }
        
        // Add object-fit: cover for hero images
        if (img.closest('.hero-image, .reviewer-avatar')) {
            img.style.objectFit = 'cover';
        }
    });
}

function debounceResize() {
    let resizeTimer;
    
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Recalculate any position-dependent elements
            const stickyBar = document.getElementById('sticky-cta');
            if (stickyBar) {
                // Force re-calculation of sticky position
                const scrollPosition = window.scrollY;
                if (scrollPosition > 200) {
                    stickyBar.classList.add('visible');
                }
            }
        }, 250);
    }, { passive: true });
}

function monitorWebVitals() {
    // Monitor Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
        try {
            const lcpObserver = new PerformanceObserver(function(list) {
                for (const entry of list.getEntries()) {
                    // Track LCP to analytics
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'timing_complete', {
                            'name': 'LCP',
                            'value': Math.round(entry.startTime)
                        });
                    }
                    
                    console.log('LCP:', entry.startTime);
                }
            });
            
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
            
            // Monitor Layout Shifts (CLS)
            const clsObserver = new PerformanceObserver(function(list) {
                let clsValue = 0;
                
                for (const entry of list.getEntries()) {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                    }
                }
                
                if (clsValue > 0) {
                    console.log('CLS:', clsValue);
                    
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'timing_complete', {
                            'name': 'CLS',
                            'value': Math.round(clsValue * 1000)
                        });
                    }
                }
            });
            
            clsObserver.observe({ entryTypes: ['layout-shift'] });
            
        } catch (error) {
            console.log('Performance monitoring not supported');
        }
    }
}

// Utility Functions
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// FAQ Accordion Enhancement
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(function(item) {
        const summary = item.querySelector('summary');
        
        summary.addEventListener('click', function(e) {
            // Track FAQ interactions
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
});

// Error Handling
window.addEventListener('error', function(e) {
    console.log('JavaScript error:', e.error);
    
    // Track errors to analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
            'description': e.error.toString(),
            'fatal': false
        });
    }
});

// Page Visibility API for performance tracking
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
        // Page is being hidden, track engagement time
        const engagementTime = performance.now();
        
        if (typeof gtag !== 'undefined') {
            gtag('event', 'timing_complete', {
                'name': 'engagement_time',
                'value': Math.round(engagementTime)
            });
        }
    }
});

// Service Worker Registration (for caching if needed)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment if you want to add a service worker for caching
        // navigator.serviceWorker.register('/sw.js')
        //     .then(function(registration) {
        //         console.log('SW registered: ', registration);
        //     })
        //     .catch(function(registrationError) {
        //         console.log('SW registration failed: ', registrationError);
        //     });
    });
}