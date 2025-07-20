// nav.js

// Navigation Hamburger button toggle functionality
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-container').classList.toggle('nav-open');
});

// Auto-close mobile menu on window resize
window.addEventListener('resize', function() {
    const navContainer = document.querySelector('.nav-container');
    
    // If window is wider than mobile breakpoint, close the menu
    if (window.innerWidth > 768) {
        navContainer.classList.remove('nav-open');
    }
});