let slideIndex = 0;
showSlide(slideIndex);

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    // Loop through the slides to display the current one
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'flex' : 'none';
    });
    
    // Update the dots' active state
    dots.forEach((dot, i) => {
        dot.className = dot.className.replace(' active', '');
        if (i === index) {
            dot.className += ' active';
        }
    });
}

// Auto slide every 3 seconds
setInterval(() => {
    slideIndex = (slideIndex + 1) % 4;
    showSlide(slideIndex);
}, 3000);
