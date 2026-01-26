// ========================================
// PORTFOLIO WEBSITE - JAVASCRIPT
// ========================================

// ========== NAVBAR ACTIVE LINK HIGHLIGHTING ==========
document.addEventListener('DOMContentLoaded', function() {
    initNavbarOffset(); // ensure CSS var matches actual navbar height (fallback for responsive / collapse)
    initNavbarScrolling();
    initSmoothScroll();
    initProjectFiltering();
    initProjectCarousel();
    initContactForm();
    initSkillsAnimation();
    initThemeToggle(); // initialize theme toggle and restore persisted theme
});

/**
 * Highlights the active navbar link based on scroll position
 */
function initNavbarScrolling() {
    const navLinks = document.querySelectorAll('.scroll-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        // Find which section is currently in view
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        // Update active link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * Smooth scrolling for navigation links
 */
function initSmoothScroll() {
    const scrollLinks = document.querySelectorAll('.scroll-link');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const toggleButton = document.querySelector('.navbar-toggler');
                    toggleButton.click();
                }
                
                // Scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Ensure the CSS variable --navbar-height reflects the actual height of the navbar.
 * This keeps `scroll-margin-top` accurate across responsive breakpoints and when the
 * Bootstrap collapse toggles (so headings are never hidden underneath a taller nav).
 * JS is used only as a fallback to update the variable dynamically; the preferred
 * solution is the CSS-only `section { scroll-margin-top: var(--navbar-height) }`.
 */
function initNavbarOffset() {
    const nav = document.querySelector('nav.navbar');
    if (!nav) return;

    const update = () => {
        const height = Math.round(nav.getBoundingClientRect().height);
        document.documentElement.style.setProperty('--navbar-height', height + 'px');
    };

    // Initial set
    update();

    // Keep in sync on resize
    window.addEventListener('resize', update);

    // When the mobile collapse expands/collapses, the navbar height changes — update then.
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse) {
        navbarCollapse.addEventListener('shown.bs.collapse', update);
        navbarCollapse.addEventListener('hidden.bs.collapse', update);
    }
}

// ========== PROJECT FILTERING ==========
/**
 * Handles project filtering based on category
 */
function initProjectFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter') || this.getAttribute('data-category') || 'all';

            // Update active state and aria-pressed
            filterButtons.forEach(btn => { btn.classList.remove('active'); btn.setAttribute('aria-pressed', 'false'); });
            this.classList.add('active');
            this.setAttribute('aria-pressed', 'true');

            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    // Trigger animation
                    setTimeout(() => { card.style.opacity = '1'; }, 10);
                } else {
                    card.classList.add('hidden');
                }
            });

            // Reset carousel to first visible slide
            resetCarousel();
        });
    });
}

// ========== PROJECT CAROUSEL ==========
let currentSlide = 0;
const cardsPerSlide = 1; // Show 1 card at a time on mobile, adjust as needed

/**
 * Initializes project carousel navigation
 */
function initProjectCarousel() {
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');
    const dots = document.querySelectorAll('.dot');
    
    leftArrow.addEventListener('click', previousSlide);
    rightArrow.addEventListener('click', nextSlide);
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide = index;
            updateCarousel();
        });
    });
    
    // Responsive carousel
    updateCarouselOnResize();
    window.addEventListener('resize', updateCarouselOnResize);
}

/**
 * Move to next slide in carousel
 */
function nextSlide() {
    const carousel = document.querySelector('.projects-carousel');
    const visibleCards = Array.from(document.querySelectorAll('.project-card'))
        .filter(card => !card.classList.contains('hidden'));
    
    if (visibleCards.length === 0) return;
    
    currentSlide = (currentSlide + 1) % visibleCards.length;
    updateCarousel();
}

/**
 * Move to previous slide in carousel
 */
function previousSlide() {
    const carousel = document.querySelector('.projects-carousel');
    const visibleCards = Array.from(document.querySelectorAll('.project-card'))
        .filter(card => !card.classList.contains('hidden'));
    
    if (visibleCards.length === 0) return;
    
    currentSlide = (currentSlide - 1 + visibleCards.length) % visibleCards.length;
    updateCarousel();
}

/**
 * Update carousel display and dots
 */
function updateCarousel() {
    const carousel = document.querySelector('.projects-carousel');
    const visibleCards = Array.from(document.querySelectorAll('.project-card'))
        .filter(card => !card.classList.contains('hidden'));
    const dots = document.querySelectorAll('.dot');
    
    // Calculate scroll position
    const scrollAmount = currentSlide * (visibleCards[0]?.offsetWidth || 0 + 32); // 32px for gap
    
    carousel.scrollLeft = scrollAmount;
    
    // Update dots - only show dots for visible cards
    const numDots = Math.min(dots.length, visibleCards.length);
    dots.forEach((dot, index) => {
        if (index < numDots) {
            dot.classList.toggle('active', index === currentSlide % numDots);
            dot.style.display = 'block';
        } else {
            dot.style.display = 'none';
        }
    });
}

/**
 * Reset carousel to first slide
 */
function resetCarousel() {
    currentSlide = 0;
    updateCarousel();
}

/**
 * Handle carousel responsiveness
 */
function updateCarouselOnResize() {
    const carousel = document.querySelector('.projects-carousel');
    const width = window.innerWidth;
    
    if (width <= 768) {
        // Mobile: show 1 card
        cardsPerSlide = 1;
    } else if (width <= 1024) {
        // Tablet: show 1-2 cards
        cardsPerSlide = 1;
    } else {
        // Desktop: show 1 card (can be adjusted)
        cardsPerSlide = 1;
    }
    
    resetCarousel();
}

// ========== FEATURED PROJECTS (layout + interactions) ==========
let fprojState = { index: 0, perView: 3 };

function initFeaturedProjects() {
    const filters = document.querySelectorAll('.fproj-filter');
    const carousel = document.querySelector('.featured__carousel');
    const left = document.querySelector('.fproj-arrow.left');
    const right = document.querySelector('.fproj-arrow.right');

    if (!carousel) return;

    updateFeaturedPerView();
    renderFeaturedDots();

    // Filter buttons
    filters.forEach(btn => {
        btn.addEventListener('click', function() {
            filters.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-pressed', 'true');
            const category = this.getAttribute('data-category') || 'all';
            filterFeatured(category);
        });
    });

    left && left.addEventListener('click', () => moveFeatured(-1));
    right && right.addEventListener('click', () => moveFeatured(1));

    // Swipe support
    let startX = 0, isSwiping = false;
    carousel.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; isSwiping = true; });
    carousel.addEventListener('touchmove', (e) => { if (!isSwiping) return; });
    carousel.addEventListener('touchend', (e) => {
        if (!isSwiping) return; let endX = (e.changedTouches && e.changedTouches[0].clientX) || 0; const diff = startX - endX;
        if (Math.abs(diff) > 40) moveFeatured(diff > 0 ? 1 : -1);
        isSwiping = false;
    });

    window.addEventListener('resize', () => { updateFeaturedPerView(); renderFeaturedDots(); setFeaturedPosition(0); });
}

function updateFeaturedPerView() {
    const w = window.innerWidth;
    if (w >= 992) fprojState.perView = 3;
    else if (w >= 768) fprojState.perView = 2;
    else fprojState.perView = 1;
}

function setFeaturedPosition(index) {
    const carousel = document.querySelector('.featured__carousel');
    const card = document.querySelector('.fproj-card');
    if (!carousel || !card) return;
    const gap = parseFloat(getComputedStyle(carousel).gap) || 24;
    const cardWidth = card.offsetWidth + gap;
    const maxIndex = Math.max(0, document.querySelectorAll('.fproj-card:not(.hidden)').length - fprojState.perView);
    index = Math.max(0, Math.min(index, maxIndex));
    carousel.style.transform = 'translateX(' + (-index * cardWidth) + 'px)';
    fprojState.index = index;
    updateFeaturedDotsActive();
}

function moveFeatured(delta) {
    const current = fprojState.index;
    setFeaturedPosition(current + delta);
}

function renderFeaturedDots() {
    const container = document.querySelector('.fproj-dots');
    if (!container) return;
    const visibleCount = document.querySelectorAll('.fproj-card:not(.hidden)').length;
    const pages = Math.max(1, Math.ceil(visibleCount / fprojState.perView));
    container.innerHTML = '';
    for (let i = 0; i < pages; i++) {
        const btn = document.createElement('button');
        btn.className = 'dot';
        if (i === fprojState.index) btn.classList.add('active');
        btn.addEventListener('click', () => setFeaturedPosition(i));
        container.appendChild(btn);
    }
}

function updateFeaturedDotsActive() {
    const dots = document.querySelectorAll('.fproj-dots .dot');
    dots.forEach((d, i) => d.classList.toggle('active', i === fprojState.index));
}

function filterFeatured(filter) {
    const cards = document.querySelectorAll('.fproj-card');
    cards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
    // Reset position and dots
    setFeaturedPosition(0);
    renderFeaturedDots();
}

// Initialize featured projects
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFeaturedProjects);
} else {
    initFeaturedProjects();
}

/**
 * THEME TOGGLE (adds light/dark theme switching)
 * - toggles .light-theme / .dark-theme on <body>
 * - updates the icon (moon <-> sun)
 * - persists choice in localStorage
 */
function initThemeToggle() {
    const toggleBtn = document.getElementById('themeToggle');
    if (!toggleBtn) return;

    // Apply stored theme or use system preference if not set
    const stored = localStorage.getItem('theme');
    const defaultTheme = stored || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-theme' : 'light-theme');
    console.log('initThemeToggle: resolved theme =', defaultTheme);
    applyTheme(defaultTheme);

    // Make the button explicit type to avoid accidental form submission
    toggleBtn.setAttribute('type', 'button');

    // Toggle on click (with a debug log)
    toggleBtn.addEventListener('click', function(e) {
        if (e && typeof e.preventDefault === 'function') e.preventDefault();
        const isDark = document.body.classList.contains('dark-theme');
        console.log('themeToggle clicked. isDark=', isDark);
        const next = isDark ? 'light-theme' : 'dark-theme';

        // Add a short animation class for visual feedback when switching icons
        toggleBtn.classList.add('theme-switching');
        setTimeout(() => toggleBtn.classList.remove('theme-switching'), 250);

        applyTheme(next);
        console.log('applyTheme requested:', next, 'body classes:', document.body.className, 'localStorage:', localStorage.getItem('theme'));
    });
}

function applyTheme(themeName) {
    console.log('applyTheme called with', themeName);
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(themeName);
    localStorage.setItem('theme', themeName);
    updateThemeIcon(themeName);
    console.log('applyTheme finished. body classes:', document.body.className, 'localStorage:', localStorage.getItem('theme'));
}

function updateThemeIcon(themeName) {
    const toggleBtn = document.getElementById('themeToggle');
    if (!toggleBtn) return;
    const iconEl = toggleBtn.querySelector('i');
    if (!iconEl) return;

    // Set the icon class explicitly to avoid leaving stale icon classes
    // and ensure the icon always reflects the CURRENT theme (moon = dark, sun = light).
    if (themeName === 'dark-theme') {
        iconEl.className = 'bi bi-moon-fill';
        toggleBtn.setAttribute('aria-label', 'Switch to light theme');
        toggleBtn.setAttribute('title', 'Switch to light theme');
        toggleBtn.setAttribute('aria-pressed', 'true');
        console.log('updateThemeIcon -> set to moon');
    } else {
        iconEl.className = 'bi bi-sun-fill';
        toggleBtn.setAttribute('aria-label', 'Switch to dark theme');
        toggleBtn.setAttribute('title', 'Switch to dark theme');
        toggleBtn.setAttribute('aria-pressed', 'false');
        console.log('updateThemeIcon -> set to sun');
    }

    // For accessibility, ensure the icon is announced as a button.
    toggleBtn.setAttribute('role', 'button');
    console.log('updateThemeIcon finished. icon classes:', iconEl.className);
}

// Ensure theme gets applied on script load in case initThemeToggle() isn't executed due to an earlier error.
(function ensureThemeOnLoad() {
    try {
        const stored = localStorage.getItem('theme') || 'light-theme';
        // Apply only if not already applied
        if (!document.body.classList.contains(stored)) {
            applyTheme(stored);
            console.log('ensureThemeOnLoad applied:', stored);
        }
    } catch (err) {
        console.error('Theme apply failed', err);
    }
})();

// ========== CONTACT FORM ==========
/**
 * Handles contact form submission
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const nameEl = document.getElementById('name');
            const emailEl = document.getElementById('email');
            const messageEl = document.getElementById('message');

            const name = nameEl.value.trim();
            const email = emailEl.value.trim();
            const message = messageEl.value.trim();

            // Basic validation
            if (!name) { showToast('Please enter your name', 'error'); nameEl.focus(); return; }
            if (!email) { showToast('Please enter your email', 'error'); emailEl.focus(); return; }
            if (!isValidEmail(email)) { showToast('Please enter a valid email', 'error'); emailEl.focus(); return; }
            if (!message) { showToast('Please enter a message', 'error'); messageEl.focus(); return; }
            
            // Simulate form submission
            console.log('Contact form data:', { name, email, message });
            
            // Show success message
            showToast('Message sent! (simulated)', 'success');
            
            // Reset form
            form.reset();
            
            // In a real application, you would send this data to a backend service
            // Example: sendFormDataToBackend({ name, email, message });
        });
}

/**
 * Initialize skills progress animation (IntersectionObserver)
 */
function initSkillsAnimation() {
    const progressBars = document.querySelectorAll('.skills__progress');
    const cards = document.querySelectorAll('.skills__card');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;

                // Add subtle glowing animation to cards
                if (el.classList && el.classList.contains('skills__card')) {
                    el.classList.add('in-view');
                }

                // Animate the progress bar fill
                if (el.classList && el.classList.contains('skills__progress')) {
                    const fill = el.querySelector('.skills__progress-fill');
                    const level = el.getAttribute('data-level') || '0';
                    // animate width
                    setTimeout(() => {
                        fill.style.width = level + '%';
                    }, 80);
                    el.setAttribute('aria-valuenow', level);
                }

                // Once animated, stop observing this element
                obs.unobserve(el);
            }
        });
    }, { threshold: 0.15 });

    progressBars.forEach(pb => observer.observe(pb));
    cards.forEach(card => observer.observe(card));
}

/**
 * Validate email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Display toast notification
 */
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    toast.textContent = message;
    
    // Add styles
    const style = document.createElement('style');
    if (!document.querySelector('style[data-toast]')) {
        style.setAttribute('data-toast', 'true');
        style.textContent = `
            .toast-notification {
                position: fixed;
                bottom: 2rem;
                right: 2rem;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                color: white;
                font-weight: 600;
                z-index: 9999;
                animation: slideIn 0.3s ease-out;
                max-width: 300px;
            }
            
            .toast-success {
                background-color: #28a745;
            }
            
            .toast-error {
                background-color: #dc3545;
            }
            
            .toast-info {
                background-color: #0d6efd;
            }
            
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
            
            @media (max-width: 576px) {
                .toast-notification {
                    bottom: 1rem;
                    right: 1rem;
                    max-width: 250px;
                    padding: 0.75rem 1rem;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(toast);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ========== UTILITY FUNCTIONS ==========
/**
 * Log page load completion
 */
function logPageReady() {
    console.log('Portfolio website loaded successfully!');
    console.log('Features available:');
    console.log('- Smooth scrolling navigation');
    console.log('- Project filtering by category');
    console.log('- Project carousel with navigation');
    console.log('- Contact form validation');
}

// Log when page is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', logPageReady);
} else {
    logPageReady();
}
