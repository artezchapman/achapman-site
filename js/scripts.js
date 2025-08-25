function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(15, 23, 42, 0.98)';
    } else {
        nav.style.background = 'rgba(15, 23, 42, 0.95)';
    }
});

// Terminal cursor animation enhancement
setInterval(function() {
    const cursors = document.querySelectorAll('.terminal-cursor');
    cursors.forEach(cursor => {
        cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
    });
}, 1000);

// Add some interactive elements
document.querySelectorAll('.cert-card, .project-card, .experience-item').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add particle effect on scroll
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const elements = document.querySelectorAll('.floating-element');
    elements.forEach((element, index) => {
        const speed = 1 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed * 0.1}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Artez Chapman Portfolio Loaded');
    
    // Add smooth scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});