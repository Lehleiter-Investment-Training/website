// Globale UI-Logik: Mobile-Menu, Dropdown-Tastaturbedienung, Smooth-Scroll, Brevo-Formular
document.addEventListener('DOMContentLoaded', function() {
    // Sanftes Scrollen nur, wenn der Nutzer keine reduzierte Bewegung wünscht (WCAG 2.3.3)
    var scrollBehavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

    var mobileMenuToggle = document.getElementById('mobileMenuToggle');
    var navLinks = document.getElementById('navLinks');

    function closeMobileMenu() {
        navLinks.classList.remove('show');
        mobileMenuToggle.classList.remove('open');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = 'auto';
    }

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            var isOpen = navLinks.classList.toggle('show');
            mobileMenuToggle.classList.toggle('open', isOpen);
            mobileMenuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        });

        navLinks.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    closeMobileMenu();
                }
            });
        });

        var resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                if (window.innerWidth > 768 && navLinks.classList.contains('show')) {
                    closeMobileMenu();
                }
            }, 250);
        });
    }

    // Dropdown keyboard accessibility
    document.querySelectorAll('.has-dropdown > a').forEach(function(trigger) {
        trigger.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                var dropdown = this.nextElementSibling;
                if (!dropdown) return;
                var isOpen = this.getAttribute('aria-expanded') === 'true';
                this.setAttribute('aria-expanded', !isOpen);
                if (!isOpen) {
                    dropdown.style.display = 'block';
                    var firstLink = dropdown.querySelector('a');
                    if (firstLink) firstLink.focus();
                } else {
                    dropdown.style.display = '';
                }
                e.preventDefault();
            }
        });
    });

    document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
        menu.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                var trigger = this.parentElement.querySelector('a');
                if (!trigger) return;
                this.style.display = '';
                trigger.setAttribute('aria-expanded', 'false');
                trigger.focus();
            }
        });
    });

    // Anchor scroll adjustment
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var headerHeight = document.querySelector('header').offsetHeight;
            var targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                var targetElement = document.querySelector(targetId);
                if (targetElement) {
                    var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({
                        top: targetPosition - headerHeight - 20,
                        behavior: scrollBehavior
                    });
                    history.pushState(null, null, targetId);
                }
            }
        });
    });

    if (window.location.hash) {
        setTimeout(function() {
            var headerHeight = document.querySelector('header').offsetHeight;
            var targetElement = document.querySelector(window.location.hash);
            if (targetElement) {
                var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: targetPosition - headerHeight - 20,
                    behavior: scrollBehavior
                });
            }
        }, 300);
    }

    // Brevo-Formular: Absenden via verstecktem iframe. Weiterleitung erst, wenn
    // die Antwort von Brevo tatsächlich im iframe geladen ist (statt fixer Wartezeit).
    // Ein Fallback-Timeout greift nur, falls das load-Event ausbleibt.
    var brevoIframe = document.querySelector('iframe[name="brevo-iframe"]');
    document.querySelectorAll('form[data-type="subscription"]').forEach(function(form) {
        form.setAttribute('target', 'brevo-iframe');
        form.addEventListener('submit', function() {
            var btn = form.querySelector('button[type="submit"]');
            if (btn) {
                btn.disabled = true;
                btn.textContent = 'Wird gesendet...';
            }

            var redirected = false;
            function redirect() {
                if (redirected) return;
                redirected = true;
                window.location.href = '/Danke.html';
            }

            if (brevoIframe) {
                brevoIframe.addEventListener('load', redirect, { once: true });
            }
            // Sicherheitsnetz, falls das iframe-load-Event nicht feuert
            setTimeout(redirect, 6000);
        });
    });
});
