/* ============================================
   سید محمود موسویان پور - Personal Website
   Main JavaScript - Animations & Interactions
   ============================================ */

(function () {
    'use strict';

    /* ============================================
       Navigation - Mobile Menu Toggle
       ============================================ */
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(function (link) {
            link.addEventListener('click', function () {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    /* ============================================
       Navigation - Scroll Effect
       ============================================ */
    const navbar = document.getElementById('navbar');
    const scrollProgress = document.getElementById('scrollProgress');

    function handleScroll() {
        // Navbar background
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Scroll progress bar
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        if (scrollProgress) {
            scrollProgress.style.width = scrollPercent + '%';
        }

        // Active nav link based on scroll position
        const sections = document.querySelectorAll('section[id]');
        let currentSection = '';

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-link').forEach(function (link) {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    /* ============================================
       Scroll Animations - Intersection Observer
       ============================================ */
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry, index) {
            if (entry.isIntersecting) {
                setTimeout(function () {
                    entry.target.classList.add('animated');
                }, index * 50);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(function (el) {
        observer.observe(el);
    });

    /* ============================================
       Skill Bars Animation
       ============================================ */
    const skillBars = document.querySelectorAll('.skill-progress');

    const skillObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.width = progress + '%';
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    skillBars.forEach(function (bar) {
        skillObserver.observe(bar);
    });

    /* ============================================
       Smooth Scroll for Anchor Links
       ============================================ */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const offsetTop = targetElement.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ============================================
       Contact Form Handling
       ============================================ */
    const contactForm = document.getElementById('contactForm');
    const formNote = document.getElementById('formNote');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const name = formData.get('name').trim();
            const email = formData.get('email').trim();
            const subject = formData.get('subject');
            const message = formData.get('message').trim();

            // Basic validation
            if (!name || !email || !subject || !message) {
                showFormNote('لطفاً همه فیلدهای ضروری را پر کنید.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormNote('ایمیل معتبر نیست.', 'error');
                return;
            }

            // Disable submit button
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>در حال ارسال...</span>';

            // Simulate sending (replace with actual endpoint if needed)
            // For static hosting, use Formspree, Getform, or EmailJS
            setTimeout(function () {
                // Build mailto link as fallback for static hosting
                const mailtoLink = 'mailto:mohandes.moosavian@gmail.com' +
                    '?subject=' + encodeURIComponent('تماس از وب‌سایت: ' + subject) +
                    '&body=' + encodeURIComponent(
                        'نام: ' + name + '\n' +
                        'ایمیل: ' + email + '\n' +
                        'موبایل: ' + (formData.get('phone') || 'نامشخص') + '\n' +
                        'موضوع: ' + subject + '\n\n' +
                        'پیام:\n' + message
                    );

                // Open email client
                window.location.href = mailtoLink;

                // Show success message
                showFormNote('درخواست شما آماده ارسال شد. برنامه ایمیل شما باز می‌شود.', 'success');
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }, 1000);
        });
    }

    function showFormNote(message, type) {
        if (!formNote) return;
        formNote.textContent = message;
        formNote.className = 'form-note ' + (type || '');
        setTimeout(function () {
            formNote.textContent = '';
            formNote.className = 'form-note';
        }, 5000);
    }

    /* ============================================
       Typing Effect for Hero Subtitle
       Uses a stable container with cursor to prevent layout shift
       ============================================ */
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const texts = [
            'مهندس نرم‌افزار و توسعه‌دهنده فول‌استک',
            'متخصص وردپرس شرکتی و فروشگاهی',
            'پیاده‌ساز قالب‌های اختصاصی وردپرس',
            'طراح پنل‌های اختصاصی سازمانی'
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        // Build the structure: <span class="typing-text"></span><span class="typing-cursor"></span>
        // In RTL, the text span appears on the right, cursor on the left (visually at end of text)
        heroSubtitle.innerHTML = '';
        const textSpan = document.createElement('span');
        textSpan.className = 'typing-text';
        textSpan.textContent = '\u00A0'; // non-breaking space to maintain width
        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        cursor.setAttribute('aria-hidden', 'true');
        heroSubtitle.appendChild(textSpan);
        heroSubtitle.appendChild(cursor);

        function typeText() {
            const currentText = texts[textIndex];

            if (isDeleting) {
                charIndex--;
            } else {
                charIndex++;
            }

            // Update text - use nbsp when empty to keep cursor at consistent position
            const newText = currentText.substring(0, charIndex);
            textSpan.textContent = newText || '\u00A0';

            let typeSpeed = isDeleting ? 40 : 90;

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2200;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 400;
            }

            setTimeout(typeText, typeSpeed);
        }

        // Start typing effect after initial delay
        setTimeout(function () {
            typeText();
        }, 2000);
    }

    /* ============================================
       Tilt Effect on Code Window
       ============================================ */
    const codeWindow = document.querySelector('.code-window');
    if (codeWindow && window.innerWidth > 768) {
        const heroVisual = document.querySelector('.hero-visual');

        heroVisual.addEventListener('mousemove', function (e) {
            const rect = heroVisual.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 30;
            const rotateY = (centerX - x) / 30;

            codeWindow.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        heroVisual.addEventListener('mouseleave', function () {
            codeWindow.style.transform = 'perspective(1000px) rotateY(-3deg)';
        });
    }

    /* ============================================
       Console Easter Egg
       ============================================ */
    const styles = [
        'color: #06b6d4',
        'font-size: 16px',
        'font-weight: bold',
        'font-family: monospace',
        'text-shadow: 0 0 10px rgba(6, 182, 212, 0.5)'
    ].join(';');

    console.log('%cسلام! 👋', styles);
    console.log('%cاگه به دنبال یه توسعه‌دهنده فول‌استک می‌گردی، درست اومدی!', 'color: #a1a1b3; font-family: monospace;');
    console.log('%cسید محمود موسویان پور | مهندس نرم‌افزار', 'color: #06b6d4; font-family: monospace;');
    console.log('%c📧 mohandes.moosavian@gmail.com', 'color: #a1a1b3; font-family: monospace;');

})();
