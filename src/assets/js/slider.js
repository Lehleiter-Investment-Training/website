document.addEventListener('DOMContentLoaded', function() {
    var slider = document.getElementById('reviewsSlider');
    var prevArrow = document.querySelector('.prev-arrow');
    var nextArrow = document.querySelector('.next-arrow');
    var sliderWrapper = document.querySelector('.reviews-slider-wrapper');
    var slides = slider.querySelectorAll('.review-card');
    var slideWidth = 320;

    if (window.innerWidth <= 768) {
        slideWidth = sliderWrapper.clientWidth - 20;
    }

    var currentSlide = 0;
    var maxSlides = slides.length;
    var visibleSlides = window.innerWidth < 768 ? 1 : 3;
    var maxPosition = maxSlides - visibleSlides;

    function initSlider() {
        var dotsContainer = document.createElement('div');
        dotsContainer.className = 'slider-dots';
        var numberOfDots = Math.ceil(maxSlides / visibleSlides);

        for (var i = 0; i < numberOfDots; i++) {
            var dot = document.createElement('div');
            dot.className = 'dot';
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', (function(index) {
                return function() { goToSlide(index * visibleSlides); };
            })(i));
            dotsContainer.appendChild(dot);
        }

        document.querySelector('.reviews-slider-container').appendChild(dotsContainer);
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
        slider.style.transition = 'transform 0.5s ease';
        slider.style.transform = 'translateX(-' + (slideWidth * currentSlide) + 'px)';
        updateDots();
    }

    function updateArrows() {
        prevArrow.style.opacity = '0.7';
        nextArrow.style.opacity = '0.7';
    }

    function updateDots() {
        var dots = document.querySelectorAll('.dot');
        var activeDotIndex = Math.floor(currentSlide / visibleSlides);
        dots.forEach(function(dot, index) {
            dot.classList.toggle('active', index === activeDotIndex);
        });
    }

    var autoSlideInterval;
    function startAutoSlide() {
        autoSlideInterval = setInterval(function() { goToSlide(currentSlide + 1); }, 5000);
    }
    function stopAutoSlide() { clearInterval(autoSlideInterval); }

    sliderWrapper.addEventListener('mouseenter', stopAutoSlide);
    sliderWrapper.addEventListener('mouseleave', startAutoSlide);

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

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(function(question) {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('show');
        });
    });

    initSlider();
    startAutoSlide();
});
