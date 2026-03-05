// Contact Form Submission

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for contacting PrimeEstates! We will get back to you soon.");
});

// Optional: Pause testimonial animation on hover
const testimonialTrack = document.querySelector('.testimonial-track');

testimonialTrack.addEventListener('mouseenter', () => {
    testimonialTrack.style.animationPlayState = 'paused';
});

testimonialTrack.addEventListener('mouseleave', () => {
    testimonialTrack.style.animationPlayState = 'running';
});

