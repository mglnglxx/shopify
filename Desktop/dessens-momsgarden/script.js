// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
    const sectionImages = document.querySelectorAll('.section-image');
    
    function updateActiveImage() {
        const windowHeight = window.innerHeight;
        const middleScreen = windowHeight / 2;
        
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const sectionId = section.id;
            const correspondingImage = document.querySelector(`.section-image[data-section="${sectionId}"]`);
            
            if (rect.top <= middleScreen && rect.bottom >= middleScreen) {
                // Remove active class from all images
                sectionImages.forEach(img => img.classList.remove('active'));
                // Add active class to current section's image
                if (correspondingImage) {
                    correspondingImage.classList.add('active');
                }
            }
        });
    }

    // Initial check
    updateActiveImage();
    
    // Update on scroll with requestAnimationFrame for smooth performance
    window.addEventListener("scroll", () => {
        requestAnimationFrame(updateActiveImage);
    });
    
    // Update on resize
    window.addEventListener('resize', () => {
        requestAnimationFrame(updateActiveImage);
    });
}); 