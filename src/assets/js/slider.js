document.addEventListener('DOMContentLoaded', function() {
    var slider = document.getElementById('reviewsSlider');
    if (!slider) return;

    var container = document.querySelector('.reviews-slider-container');
    var prevArrow = document.querySelector('.prev-arrow');
    var nextArrow = document.querySelector('.next-arrow');
    var sliderWrapper = document.querySelector('.reviews-slider-wrapper');
    var slides = slider.querySelectorAll('.review-card');

    // Bewegungspräferenz des Nutzers respektieren (WCAG 2.3.3)
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var slideWidth = 320;
    if (window.innerWidth <= 768) {
        slideWidth = sliderWrapper.clientWidth - 20;
    }

    var currentSlide = 0;
    var maxSlides = slides.length;
    var visibleSlides = window.innerWidth < 768 ? 1 : 3;
    var maxPosition = maxSlides - visibleSlides;
    var dots = [];

    function initSlider() {
        var dotsContainer = document.createElement('div');
        dotsContainer.className = 'slider-dots';
        var numberOfDots = Math.ceil(maxSlides / visibleSlides);

        for (var i = 0; i < numberOfDots; i++) {
            var dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'dot';
            dot.setAttribute('aria-label', 'Rezensionsgruppe ' + (i + 1) + ' von ' + numberOfDots + ' anzeigen');
            if (i === 0) {
                dot.classList.add('active');
                dot.setAttribute('aria-current', 'true');
            }
            dot.addEventListener('click', (function(index) {
                return function() { goToSlide(index * visibleSlides); };
            })(i));
            dotsContainer.appendChild(dot);
            dots.push(dot);
        }

        dotsContainer.appendChild(buildPlayPause());
        container.appendChild(dotsContainer);
        updateReviewCardSize();
        updateArrows();
    }

    function updateReviewCardSize() {
        if (window.innerWidth <= 768) {
            slideWidth = sliderWrapper.clientWidth - 20;
            slides.forEach(function(slide) { slide.style.flex = '0 0 ' + slideWidth + 'px'; });
        } else {
            slideWidth = 320;
            slides.forEach(function(slide) { slide.style.flex = '0 0 300px'; });
        }
        slider.style.transform = 'translateX(-' + (slideWidth * currentSlide) + 'px)';
    }

    prevArrow.addEventListener('click', function() { goToSlide(currentSlide - 1); });
    nextArrow.addEventListener('click', function() { goToSlide(currentSlide + 1); });

    function goToSlide(slideIndex) {
        if (slideIndex < 0) slideIndex = maxPosition;
        else if (slideIndex > maxPosition) slideIndex = 0;
        currentSlide = slideIndex;
        slider.style.transition = prefersReducedMotion ? 'none' : 'transform 0.5s ease';
        slider.style.transform = 'translateX(-' + (slideWidth * currentSlide) + 'px)';
        updateDots();
    }

    function updateArrows() {
        prevArrow.style.opacity = '0.7';
        nextArrow.style.opacity = '0.7';
    }

    function updateDots() {
        var activeDotIndex = Math.floor(currentSlide / visibleSlides);
        dots.forEach(function(dot, index) {
            var isActive = index === activeDotIndex;
            dot.classList.toggle('active', isActive);
            if (isActive) dot.setAttribute('aria-current', 'true');
            else dot.removeAttribute('aria-current');
        });
    }

    // --- Autoplay mit expliziter Pause-Steuerung (WCAG 2.2.2) ---
    // userPaused = bewusst per Button pausiert; startet bei reduzierter Bewegung pausiert.
    var autoSlideInterval = null;
    var userPaused = prefersReducedMotion;
    var playPauseBtn;

    function startAutoSlide() {
        if (userPaused || autoSlideInterval) return;
        autoSlideInterval = setInterval(function() { goToSlide(currentSlide + 1); }, 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    }

    function buildPlayPause() {
        playPauseBtn = document.createElement('button');
        playPauseBtn.type = 'button';
        playPauseBtn.className = 'slider-playpause';
        renderPlayPause();
        playPauseBtn.addEventListener('click', function() {
            userPaused = !userPaused;
            if (userPaused) stopAutoSlide();
            else startAutoSlide();
            renderPlayPause();
        });
        return playPauseBtn;
    }

    function renderPlayPause() {
        playPauseBtn.classList.toggle('is-paused', userPaused);
        playPauseBtn.setAttribute('aria-pressed', userPaused ? 'true' : 'false');
        playPauseBtn.setAttribute('aria-label', userPaused
            ? 'Automatischen Wechsel der Rezensionen starten'
            : 'Automatischen Wechsel der Rezensionen pausieren');
        playPauseBtn.textContent = userPaused ? '▶' : '❚❚';
    }

    // Temporäres Pausieren bei Maus-Hover und Tastaturfokus (ohne userPaused zu ändern)
    sliderWrapper.addEventListener('mouseenter', stopAutoSlide);
    sliderWrapper.addEventListener('mouseleave', startAutoSlide);
    container.addEventListener('focusin', stopAutoSlide);
    container.addEventListener('focusout', startAutoSlide);

    var touchStartX = 0, touchEndX = 0;
    slider.addEventListener('touchstart', function(e) { touchStartX = e.changedTouches[0].screenX; stopAutoSlide(); }, {passive: true});
    slider.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        var swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) goToSlide(currentSlide + 1);
        else if (touchEndX > touchStartX + swipeThreshold) goToSlide(currentSlide - 1);
        startAutoSlide();
    }, {passive: true});

    var resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(updateReviewCardSize, 250);
    });

    // FAQ-Accordion nutzt natives <details>/<summary> (Tastatur + Screenreader inklusive)

    initSlider();
    startAutoSlide();
});
