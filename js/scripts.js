// Toggle Dark/Light Mode
var modeToggle = document.getElementById('modeToggle'); // Get the button element
var modeIcon = document.getElementById('modeIcon'); // Get the image element for the icon
var navbar = document.getElementById('navbar'); // Get the navigation bar

modeToggle.addEventListener('click', function () { // Use a regular function
    'use strict'; // Enable strict mode within this function
    document.body.classList.toggle('dark-mode'); // Toggle the dark mode class
    navbar.classList.toggle('dark-mode'); // Also toggle the navbar background color
    if (document.body.classList.contains('dark-mode')) {
        modeIcon.src = "../assets/img/icons/dark.png"; // Switch to dark mode icon
    } else {
        modeIcon.src = "../assets/img/icons/light.png"; // Switch to light mode icon
    }
});

// Slideshow functionality
(function () {
    'use strict'; // Enable strict mode for this block

    var currentSlide = 0; // Track the current slide index
    var slides = document.querySelectorAll('.slide'); // Select all slides
    var totalSlides = slides.length; // Total number of slides

    // Function to show the current slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active'); // Remove active class from all slides
            if (i === index) {
                slide.classList.add('active'); // Add active class to the current slide
            }
        });
    }

    // Function to show the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides; // Loop back to the first slide
        showSlide(currentSlide);
    }

    // Function to show the previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Loop to the last slide
        showSlide(currentSlide);
    }

    // Attach event listeners to buttons
    document.getElementById('prevButton').addEventListener('click', prevSlide);
    document.getElementById('nextButton').addEventListener('click', nextSlide);

    // Automatically change slide every 5 seconds
    setInterval(nextSlide, 5000); // Change slide every 5000 milliseconds (5 seconds)

    // Initial display
    showSlide(currentSlide);
})();
