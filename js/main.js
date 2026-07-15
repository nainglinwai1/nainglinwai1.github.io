/**
 * AI Engineer Portfolio — Main JavaScript
 * Features: particles, typing effect, scroll animations, theme toggle,
 *           navigation, testimonial carousel, counter animation, smooth scroll
 * Vanilla JS — zero dependencies
 */

(function () {
    'use strict';

    /* ================================================================
       INITIALIZATION
       ================================================================ */
    document.addEventListener('DOMContentLoaded', function () {
        // Remove preload class to enable transitions
        setTimeout(function () {
            document.body.classList.remove('is-preload');
        }, 100);

        initTheme();
        initNavigation();
        initParticles();
        initTypingEffect();
        initScrollAnimations();
        initCounterAnimation();
        initTestimonialCarousel();
        initSmoothScroll();
        initContactForm();
        initBackToTop();
        handleInitialHash();
    });

    /* ================================================================
       THEME TOGGLE (Dark/Light Mode)
       ================================================================ */
    function initTheme() {
        var toggle = document.getElementById('theme-toggle');
        var html = document.documentElement;

        // Load saved theme preference
        var savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            html.setAttribute('data-theme', savedTheme);
        } else {
            // Default to dark
            html.setAttribute('data-theme', 'dark');
        }

        if (toggle) {
            toggle.addEventListener('click', function () {
                var current = html.getAttribute('data-theme');
                var next = current === 'dark' ? 'light' : 'dark';
                html.setAttribute('data-theme', next);
                localStorage.setItem('theme', next);
            });
        }
    }

    /* ================================================================
       NAVIGATION (Sticky, Active Section, Mobile Menu)
       ================================================================ */
    function initNavigation() {
        var navbar = document.getElementById('navbar');
        var hamburger = document.getElementById('hamburger');
        var navLinks = document.getElementById('nav-links');
        var allNavLinks = document.querySelectorAll('.nav-link');

        // Sticky navbar shadow on scroll
        var lastScroll = 0;
        window.addEventListener('scroll', function () {
            var currentScroll = window.pageYOffset;
            if (navbar) {
                if (currentScroll > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }
            lastScroll = currentScroll;
            updateActiveNavLink();
        }, { passive: true });

        // Mobile menu toggle
        if (hamburger && navLinks) {
            hamburger.addEventListener('click', function () {
                hamburger.classList.toggle('active');
                navLinks.classList.toggle('active');
                var expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
                hamburger.setAttribute('aria-expanded', !expanded);
            });

            // Close menu when a link is clicked
            allNavLinks.forEach(function (link) {
                link.addEventListener('click', function () {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', 'false');
                });
            });
        }
    }

    /* Highlight active nav link based on scroll position */
    function updateActiveNavLink() {
        var sections = document.querySelectorAll('section[id], footer[id]');
        var navLinks = document.querySelectorAll('.nav-link');
        var scrollY = window.pageYOffset + 100;

        var current = '';
        sections.forEach(function (section) {
            var sectionTop = section.offsetTop;
            var sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    /* ================================================================
       FLOATING PARTICLES (Canvas)
       ================================================================ */
    function initParticles() {
        var canvas = document.getElementById('particles-canvas');
        if (!canvas) return;

        var ctx = canvas.getContext('2d');
        var particles = [];
        var particleCount = 60;
        var connectionDistance = 120;

        function resize() {
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        // Create particles
        for (var i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 0.5,
                alpha: Math.random() * 0.5 + 0.2
            });
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (var i = 0; i < particles.length; i++) {
                var p = particles[i];

                // Update position
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off edges
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(0, 212, 255, ' + p.alpha + ')';
                ctx.fill();

                // Draw connections
                for (var j = i + 1; j < particles.length; j++) {
                    var p2 = particles[j];
                    var dx = p.x - p2.x;
                    var dy = p.y - p2.y;
                    var dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        var lineAlpha = (1 - dist / connectionDistance) * 0.08;
                        ctx.strokeStyle = 'rgba(0, 212, 255, ' + lineAlpha + ')';
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(animate);
        }

        animate();
    }

    /* ================================================================
       TYPING EFFECT
       ================================================================ */
    function initTypingEffect() {
        var el = document.getElementById('typing-text');
        if (!el) return;

        var phrases = [
            'Computer Vision • Edge AI • Robotics • Machine Learning',
            'Building AI That Works In The Real World',
            'From Prototype to Production • End-to-End AI Solutions'
        ];
        var phraseIndex = 0;
        var charIndex = 0;
        var isDeleting = false;
        var typingSpeed = 60;
        var deletingSpeed = 30;
        var pauseDelay = 2500;

        function type() {
            var current = phrases[phraseIndex];

            if (isDeleting) {
                el.textContent = current.substring(0, charIndex - 1);
                charIndex--;
            } else {
                el.textContent = current.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === current.length) {
                // Finished typing — pause then start deleting
                setTimeout(function () {
                    isDeleting = true;
                    type();
                }, pauseDelay);
                return;
            }

            if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(type, 500);
                return;
            }

            setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
        }

        // Start typing after a short delay
        setTimeout(type, 500);
    }

    /* ================================================================
       SCROLL ANIMATIONS (AOS — Animate On Scroll)
       ================================================================ */
    function initScrollAnimations() {
        var elements = document.querySelectorAll('[data-aos]');
        if (elements.length === 0) return;

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var el = entry.target;
                    var delay = el.getAttribute('data-aos-delay') || 0;

                    setTimeout(function () {
                        el.classList.add('aos-animate');
                    }, parseInt(delay));

                    // Only animate once
                    observer.unobserve(el);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(function (el) {
            observer.observe(el);
        });
    }

    /* ================================================================
       ANIMATED COUNTERS
       ================================================================ */
    function initCounterAnimation() {
        var counters = document.querySelectorAll('.stat-number[data-count]');
        if (counters.length === 0) return;

        var animated = new Set();

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting && !animated.has(entry.target)) {
                    animated.add(entry.target);
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(function (counter) {
            observer.observe(counter);
        });
    }

    function animateCounter(el) {
        var target = parseInt(el.getAttribute('data-count'));
        var current = 0;
        var duration = 2000; // ms
        var step = target / (duration / 16); // ~60fps
        var suffix = el.getAttribute('data-suffix') || '';

        if (step < 1) step = 1;

        function update() {
            current += step;
            if (current >= target) {
                el.textContent = target + suffix;
                return;
            }
            el.textContent = Math.floor(current) + suffix;
            requestAnimationFrame(update);
        }

        update();
    }

    /* ================================================================
       TESTIMONIAL CAROUSEL
       ================================================================ */
    function initTestimonialCarousel() {
        var track = document.getElementById('testimonial-track');
        var prevBtn = document.getElementById('testimonial-prev');
        var nextBtn = document.getElementById('testimonial-next');
        var dotsContainer = document.getElementById('testimonial-dots');

        if (!track || !prevBtn || !nextBtn || !dotsContainer) return;

        var cards = track.querySelectorAll('.testimonial-card');
        var totalSlides = cards.length;
        var currentSlide = 0;

        // Create dots
        for (var i = 0; i < totalSlides; i++) {
            var dot = document.createElement('button');
            dot.className = 'testimonial-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
            dot.addEventListener('click', (function (index) {
                return function () { goToSlide(index); };
            })(i));
            dotsContainer.appendChild(dot);
        }

        var dots = dotsContainer.querySelectorAll('.testimonial-dot');

        function goToSlide(index) {
            currentSlide = index;
            track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';

            dots.forEach(function (d, i) {
                d.classList.toggle('active', i === currentSlide);
            });
        }

        prevBtn.addEventListener('click', function () {
            var next = currentSlide - 1;
            if (next < 0) next = totalSlides - 1;
            goToSlide(next);
        });

        nextBtn.addEventListener('click', function () {
            var next = currentSlide + 1;
            if (next >= totalSlides) next = 0;
            goToSlide(next);
        });

        // Auto-advance every 5 seconds
        setInterval(function () {
            var next = (currentSlide + 1) % totalSlides;
            goToSlide(next);
        }, 5000);
    }

    /* ================================================================
       SMOOTH SCROLL (with offset for sticky nav)
       ================================================================ */
    function initSmoothScroll() {
        // All internal anchor links
        document.addEventListener('click', function (e) {
            var link = e.target.closest('a[href^="#"]');
            if (!link) return;

            var targetId = link.getAttribute('href');
            if (targetId === '#') return;

            var target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();

            var navHeight = document.getElementById('navbar') ?
                document.getElementById('navbar').offsetHeight : 72;
            var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    }

    /* ================================================================
       CONTACT FORM (Display-Only Handler)
       ================================================================ */
    function initContactForm() {
        var form = document.getElementById('contact-form');
        if (!form) return;

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            // This is a static form — show a friendly message
            var btn = form.querySelector('button[type="submit"]');
            var originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> Message Sent! (Demo)';
            btn.style.background = '#22c55e';

            setTimeout(function () {
                btn.innerHTML = originalText;
                btn.style.background = '';
                form.reset();
            }, 3000);
        });
    }

    /* ================================================================
       BACK TO TOP BUTTON
       ================================================================ */
    function initBackToTop() {
        var btn = document.getElementById('back-to-top');
        if (!btn) return;

        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 500) {
                btn.classList.add('visible');
            } else {
                btn.classList.remove('visible');
            }
        }, { passive: true });
    }

    /* ================================================================
       HANDLE INITIAL HASH (if URL has #section on load)
       ================================================================ */
    function handleInitialHash() {
        if (window.location.hash) {
            setTimeout(function () {
                var target = document.querySelector(window.location.hash);
                if (target) {
                    var navHeight = document.getElementById('navbar') ?
                        document.getElementById('navbar').offsetHeight : 72;
                    var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    window.scrollTo({ top: targetPosition, behavior: 'instant' });
                }
            }, 200);
        }
    }

})();
