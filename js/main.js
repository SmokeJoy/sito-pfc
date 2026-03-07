// PFC - Paolo Fia Cartongesso
// Main JavaScript

document.addEventListener('DOMContentLoaded', function () {
    // ========================================
    // Header scroll effect
    // ========================================
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // ========================================
    // Mobile menu toggle
    // ========================================
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function () {
            navList.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu when clicking on a link
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function () {
                navList.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // ========================================
    // Smooth scroll for anchor links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // Intersection Observer for animations
    // ========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.service-card, .feature-item, .portfolio-item').forEach(el => {
        observer.observe(el);
    });

    // ========================================
    // Form validation (for future forms)
    // ========================================
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });

            if (!isValid) {
                e.preventDefault();
            }
        });
    });

    // ========================================
    // Lazy loading images
    // ========================================
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }

    // ========================================
    // Dynamic Gallery Loading
    // ========================================
    const portfolioGrid = document.getElementById('portfolio-grid');

    if (portfolioGrid) {
        fetch('photos.json')
            .then(response => response.json())
            .then(photos => {
                portfolioGrid.innerHTML = ''; // Rimuovi loader

                photos.forEach(photo => {
                    const item = document.createElement('div');
                    item.className = 'portfolio-item';
                    item.innerHTML = `
                        <img src="${photo.url}" alt="${photo.title}" loading="lazy">
                        <div class="portfolio-overlay">
                            <h4>${photo.title}</h4>
                            <p>${photo.description}</p>
                        </div>
                    `;

                    // Aggiungi evento di click per il Lightbox
                    item.addEventListener('click', function () {
                        openLightbox(photo.url, photo.title);
                    });

                    portfolioGrid.appendChild(item);

                    // Osserva per animazioni
                    if (typeof observer !== 'undefined') {
                        observer.observe(item);
                    }
                });
            })
            .catch(error => {
                console.error('Errore nel caricamento della galleria:', error);
                portfolioGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: red;">Errore nel caricamento delle foto. Riprova più tardi.</p>';
            });
    }

    // ========================================
    // Professional Lightbox
    // ========================================
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="lightbox-close">&times;</span>
            <img class="lightbox-img" src="" alt="">
            <div class="lightbox-caption"></div>
        </div>
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const lightboxClose = lightbox.querySelector('.lightbox-close');

    function openLightbox(src, title) {
        lightboxImg.src = src;
        lightboxImg.alt = title;
        lightboxCaption.textContent = title;

        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scroll
    }

    // Keep the old selector for compatibility with other pages if any
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', function () {
            const img = this.querySelector('img');
            const title = this.querySelector('h4').textContent;
            openLightbox(img.src, title);
        });
    });

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    // ========================================
    // Console welcome message
    // ========================================
    console.log('%c PFC - Paolo Fia Cartongesso ', 'background: #1a5f7a; color: white; padding: 10px; font-size: 16px;');
    console.log('%c Specialisti in cartongesso nel Lazio ', 'color: #f4a261; font-size: 12px;');
});
