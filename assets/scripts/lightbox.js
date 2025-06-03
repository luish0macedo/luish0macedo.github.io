document.addEventListener('DOMContentLoaded', function () {
    // Select images from both .project-images-grid and .project-images-custom-grid
    const images = document.querySelectorAll('.project-images-grid img, .project-images-custom-grid img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');

    images.forEach(img => {
        img.addEventListener('click', function () {
            lightboxImg.src = this.src;
            lightbox.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function () {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
    });

    // Also close when clicking outside the image
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            lightboxImg.src = '';
        }
    });
});