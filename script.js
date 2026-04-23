// ==========================================
// STARFIELD GENERATION
// ==========================================

function generateStarfield() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;

    // Generate random stars
    const starCount = 150;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        star.style.left = x + '%';
        star.style.top = y + '%';

        // Random size
        const sizeRandom = Math.random();
        if (sizeRandom < 0.7) {
            star.classList.add('small');
        } else if (sizeRandom < 0.9) {
            star.classList.add('medium');
        } else {
            star.classList.add('large');
        }

        // Random colors - mostly white, some cyan/blue
        const colorRandom = Math.random();
        if (colorRandom < 0.1) {
            star.classList.add('cyan');
        } else if (colorRandom < 0.2) {
            star.classList.add('blue');
        }

        // Random twinkle effect
        const twinkleRandom = Math.random();
        if (twinkleRandom < 0.4) {
            const twinkling = ['twinkle', 'slow-twinkle', 'fast-twinkle'];
            star.classList.add(twinkling[Math.floor(Math.random() * twinkling.length)]);
        }

        fragment.appendChild(star);
    }

    starfield.appendChild(fragment);
}

// Generate starfield on page load
window.addEventListener('load', generateStarfield);

// Also generate if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', generateStarfield);
} else {
    generateStarfield();
}

// ==========================================
// DEVICE DETECTION & OPTIMIZATION
// ==========================================

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const isMobile = isMobileDevice();

// ==========================================
// ZERO GRAVITY FLOATING PARTICLES (OPTIMIZED)
// ==========================================

function createFloatingParticles(section) {
    // Skip if section is not visible or doesn't have enough space
    if (!section || !section.offsetHeight) return;
    
    // Reduce particle count significantly for better performance
    const particleCount = isMobile ? 2 : 3;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 3 + 1.5;
        const delay = Math.random() * 1.5;
        const duration = Math.random() * 2 + 4;
        const startX = Math.random() * 100;
        const animationType = Math.random() > 0.5 ? 'floatParticle' : 'floatParticleLeft';

        particle.className = 'zero-gravity-particle';
        particle.style.position = 'absolute';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.backgroundColor = 'rgba(6, 182, 212, 0.4)';
        particle.style.borderRadius = '50%';
        particle.style.left = startX + '%';
        particle.style.bottom = '-20px';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '5';
        particle.style.boxShadow = '0 0 12px rgba(6, 182, 212, 0.7)';
        particle.style.willChange = 'transform, opacity';
        particle.style.backfaceVisibility = 'hidden';
        particle.style.perspective = '1000px';
        
        // Apply animation
        particle.style.animation = `${animationType} ${duration}s ease-out forwards`;
        particle.style.animationDelay = delay + 's';

        section.style.position = 'relative';
        section.style.overflow = 'hidden';
        section.appendChild(particle);

        // Remove particle after animation completes
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, (duration + delay) * 1000);
    }
}

// Initialize floating particles on all sections when DOM is ready
function initializeFloatingParticles() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        // Create initial particles
        createFloatingParticles(section);
        
        // Regenerate particles periodically - less frequent for better performance
        const regenerateInterval = isMobile ? 8000 : 6000;
        setInterval(() => {
            createFloatingParticles(section);
        }, regenerateInterval);
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeFloatingParticles);
} else {
    initializeFloatingParticles();
}

// ==========================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Stagger animations for child elements with smoother timing
            const children = entry.target.querySelectorAll('[data-stagger]');
            children.forEach((child, index) => {
                child.style.animationDelay = `${index * 0.05}s`;
                child.classList.add('visible');
            });
        }
    });
}, observerOptions);

// Observe all elements with animation classes
document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .zoom-in').forEach(el => {
    observer.observe(el);
});

// ==========================================
// SMOOTH SCROLL FOR NAVIGATION
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// ==========================================
// ACTIVE NAV LINK INDICATOR
// ==========================================

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-cyan-400');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('text-cyan-400');
        }
    });
});

// ==========================================
// PARALLAX SCROLL EFFECT
// ==========================================

const parallaxElements = document.querySelectorAll('[data-parallax]');

window.addEventListener('scroll', () => {
    parallaxElements.forEach(el => {
        const scrollPosition = window.pageYOffset;
        const speed = el.getAttribute('data-parallax') || 0.5;
        el.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
});

// ==========================================
// SKILL BARS ANIMATION ON SCROLL
// ==========================================

const skillBars = document.querySelectorAll('.skill-bar');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Trigger width animation
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            
            setTimeout(() => {
                entry.target.style.width = width;
            }, 100);
            
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ==========================================
// DOWNLOAD CV AS PDF
// ==========================================

document.getElementById('download-cv-btn').addEventListener('click', () => {
    const btn = document.getElementById('download-cv-btn');

    // Show loading state
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';
    btn.disabled = true;

    // Create a hidden iframe
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.top = '-10000px';
    iframe.style.left = '-10000px';
    iframe.style.width = '210mm';   // A4 width
    iframe.style.height = '297mm';  // A4 height
    iframe.style.border = 'none';
    document.body.appendChild(iframe);

    iframe.onload = () => {
        setTimeout(() => {
            // Trigger the browser's native print-to-PDF dialog
            iframe.contentWindow.focus();
            iframe.contentWindow.print();

            // Restore button and clean up
            setTimeout(() => {
                document.body.removeChild(iframe);
                btn.innerHTML = '<i class="fas fa-download group-hover:-translate-y-1 transition-transform"></i> Download CV';
                btn.disabled = false;
            }, 1000);
        }, 500); // wait for iframe styles to fully load
    };

    iframe.src = 'cv.html';
});

// ==========================================
// CV DOWNLOAD FUNCTIONALITY
// ==========================================

const downloadCvBtn = document.getElementById('download-cv-btn');

if (downloadCvBtn) {
    downloadCvBtn.addEventListener('click', generateAndDownloadCV);
}

async function generateAndDownloadCV() {
    const cvBtn = document.getElementById('download-cv-btn');
    const originalText = cvBtn.innerHTML;
    
    try {
        // Show loading state
        cvBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating CV...';
        cvBtn.disabled = true;
        
        // Fetch the CV HTML
        const response = await fetch('cv.html');
        const cvHtml = await response.text();
        
        // Create a temporary container
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = cvHtml;
        
        // Load html2pdf library from CDN
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
        
        script.onload = () => {
            try {
                // Extract just the CV container
                const cvElement = tempDiv.querySelector('.cv-container');
                
                const opt = {
                    margin: 10,
                    filename: 'Ashraful_Haque_Akash_CV.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 2 },
                    jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
                };
                
                html2pdf().set(opt).from(cvElement).save();
                
                // Reset button
                setTimeout(() => {
                    cvBtn.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
                    setTimeout(() => {
                        cvBtn.innerHTML = originalText;
                        cvBtn.disabled = false;
                    }, 2000);
                }, 500);
                
            } catch (error) {
                console.error('PDF generation error:', error);
                cvBtn.innerHTML = originalText;
                cvBtn.disabled = false;
                alert('Error generating CV. Please try again.');
            }
        };
        
        script.onerror = () => {
            console.error('Failed to load html2pdf library');
            cvBtn.innerHTML = originalText;
            cvBtn.disabled = false;
            alert('Error loading PDF library. Please try again.');
        };
        
        document.head.appendChild(script);
        
    } catch (error) {
        console.error('CV download error:', error);
        cvBtn.innerHTML = originalText;
        cvBtn.disabled = false;
        alert('Error downloading CV. Please try again.');
    }
}

// ==========================================
// FORM SUBMISSION
// ==========================================

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        
        // Create a simple feedback
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show success state
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        submitBtn.classList.add('bg-green-500');
        submitBtn.classList.remove('from-cyan-400', 'to-blue-500', 'bg-gradient-to-r');
        submitBtn.disabled = true;
        
        // Reset form
        contactForm.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.classList.remove('bg-green-500');
            submitBtn.classList.add('from-cyan-400', 'to-blue-500', 'bg-gradient-to-r');
            submitBtn.disabled = false;
        }, 3000);
        
        // In a real application, you would send the data to a server here
        console.log('Form submitted with data:', Object.fromEntries(formData));
    });
}

// ==========================================
// TYPEWRITER EFFECT FOR HERO SECTION
// ==========================================

function typeWriter(element, text, speed = 50) {
    let index = 0;
    element.textContent = '';
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect for hero subtitle
window.addEventListener('load', () => {
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const originalText = typingText.textContent;
        typingText.textContent = '';
        
        // Start typing after 0.5 seconds
        setTimeout(() => {
            typeWriter(typingText, originalText, 80);
        }, 500);
    }
});

// Optional: Uncomment to enable typewriter effect on page load
// window.addEventListener('load', () => {
//     const heroTitle = document.querySelector('#home h1');
//     if (heroTitle) {
//         typeWriter(heroTitle, heroTitle.textContent);
//     }
// });



// ==========================================
// SCROLL TO TOP BUTTON
// ==========================================

const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.id = 'scroll-to-top';
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 3rem;
    height: 3rem;
    background: linear-gradient(135deg, rgb(6, 182, 212), rgb(59, 130, 246));
    color: white;
    border: none;
    border-radius: 50%;
    box-shadow: 0 10px 30px rgba(6, 182, 212, 0.4);
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    z-index: 50;
    transition: all 0.3s ease;
`;
scrollToTopBtn.className = 'scroll-to-top-btn';
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.transform = 'scale(1.1)';
    scrollToTopBtn.style.boxShadow = '0 15px 40px rgba(6, 182, 212, 0.6)';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.transform = 'scale(1)';
    scrollToTopBtn.style.boxShadow = '0 10px 30px rgba(6, 182, 212, 0.4)';
});

scrollToTopBtn.addEventListener('click', () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    } else {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});

// ==========================================
// RIPPLE EFFECT ON BUTTONS
// ==========================================

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function (e) {
        const rect = this.getBoundingClientRect();
        const radius = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - radius / 2;
        const y = e.clientY - rect.top - radius / 2;
        
        const ripple = document.createElement('span');
        ripple.style.width = ripple.style.height = radius + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.className = 'absolute bg-white opacity-50 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// ==========================================
// LAZY LOAD IMAGES
// ==========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==========================================
// COUNTER ANIMATION (for stats if added)
// ==========================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ==========================================
// KEYBOARD NAVIGATION
// ==========================================

document.addEventListener('keydown', (e) => {
    // Navigate sections with arrow keys
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const sectionIds = Array.from(sections).map(s => s.id);
        const currentSection = sections.findIndex(s => s.getAttribute('id') === 
            Array.from(sections).find(s => {
                const rect = s.getBoundingClientRect();
                return rect.top >= 0 && rect.top <= window.innerHeight;
            })?.id
        );
        
        if (e.key === 'ArrowDown' && currentSection < sectionIds.length - 1) {
            document.querySelector('#' + sectionIds[currentSection + 1]).scrollIntoView({ behavior: 'smooth' });
        } else if (e.key === 'ArrowUp' && currentSection > 0) {
            document.querySelector('#' + sectionIds[currentSection - 1]).scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// ==========================================
// INITIAL ANIMATIONS ON PAGE LOAD
// ==========================================

window.addEventListener('load', () => {
    // Trigger fade-in animations for initial content
    const initialElements = document.querySelectorAll('.animate-fade-in-down, .animate-fade-in-up');
    initialElements.forEach(el => {
        el.style.animation = 'fadeInDown 0.8s ease-out forwards, fadeInUp 0.8s ease-out forwards';
    });
    
    // Add smooth glow animation to skill cards on load
    document.querySelectorAll('.skill-card').forEach((card, index) => {
        card.style.animation = `fadeInUp 0.8s ease-out forwards`;
        card.style.animationDelay = `${index * 0.05}s`;
    });
});

// ==========================================
// DARK MODE TOGGLE (Optional)
// ==========================================

// Uncomment and customize if you want to add a dark/light mode toggle

// const themeToggle = document.createElement('button');
// themeToggle.id = 'theme-toggle';
// themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
// themeToggle.className = 'fixed top-20 right-8 w-12 h-12 bg-slate-800 text-cyan-400 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 z-40';
// document.body.appendChild(themeToggle);

// themeToggle.addEventListener('click', () => {
//     document.documentElement.classList.toggle('dark');
//     localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
// });

// // Check saved theme preference
// if (localStorage.getItem('theme') === 'dark') {
//     document.documentElement.classList.add('dark');
// }

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================

// Debounce scroll events for better performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}





// ==========================================
// PAGE SCROLL ANIMATIONS WITH FLOATING EFFECT
// ==========================================

const pageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add animations to floating elements
            const floatingCards = entry.target.querySelectorAll('.skill-card, .project-card');
            floatingCards.forEach((card, index) => {
                card.style.animationPlayState = 'running';
            });

            pageObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    pageObserver.observe(section);
});

// ==========================================
// ACCESSIBILITY IMPROVEMENTS
// ==========================================

// Add focus-visible styles
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ==========================================
// PAGE LOAD PERFORMANCE
// ==========================================

// Log page load time
window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('Page load time: ' + pageLoadTime + 'ms');
});

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Get element by ID with fallback
function getElement(id) {
    return document.getElementById(id) || null;
}

// Add/Remove classes helper
function toggleClass(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

console.log('Portfolio website loaded successfully!');
