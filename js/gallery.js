// Gallery functionality
document.addEventListener('DOMContentLoaded', function() {
    // Filter gallery items by category
    const categoryButtons = document.querySelectorAll('.gallery-category');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Show/hide gallery items based on filter
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Initialize lightbox for gallery images
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            lightbox.classList.add('active');
            
            const img = document.createElement('img');
            img.src = this.querySelector('img').src;
            img.alt = this.querySelector('.gallery-caption').textContent;
            
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            
            lightbox.appendChild(img);
            
            // Add caption if available
            const caption = this.querySelector('.gallery-caption').textContent;
            if (caption) {
                const captionElement = document.createElement('p');
                captionElement.textContent = caption;
                lightbox.appendChild(captionElement);
            }
        });
    });
    
    lightbox.addEventListener('click', function() {
        this.classList.remove('active');
    });
});