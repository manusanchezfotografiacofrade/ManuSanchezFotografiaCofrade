document.addEventListener('DOMContentLoaded', () => {
    // 1. Efecto Scroll en Navbar (Solo para el index)
    const navbar = document.querySelector('.navbar');
    if (document.body.classList.contains('home-body')) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 2. Menú Móvil
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 3. Sistema Lightbox para Galería
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-lightbox');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const images = document.querySelectorAll('.gallery-img');
    
    let currentIndex = 0;

    if (lightbox) {
        images.forEach((img, index) => {
            img.addEventListener('click', () => {
                lightbox.classList.add('active');
                lightboxImg.src = img.src;
                currentIndex = index;
            });
        });

        closeBtn.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) lightbox.classList.remove('active');
        });

        const showImage = (index) => {
            if (index >= images.length) currentIndex = 0;
            if (index < 0) currentIndex = images.length - 1;
            lightboxImg.src = images[currentIndex].src;
        };

        nextBtn.addEventListener('click', () => {
            currentIndex++;
            showImage(currentIndex);
        });

        prevBtn.addEventListener('click', () => {
            currentIndex--;
            showImage(currentIndex);
        });

        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') lightbox.classList.remove('active');
            if (e.key === 'ArrowRight') { currentIndex++; showImage(currentIndex); }
            if (e.key === 'ArrowLeft') { currentIndex--; showImage(currentIndex); }
        });
    }
});