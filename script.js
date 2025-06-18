// Example of adding interactivity: Alert on click of contact link
document.querySelector('a[href="mailto:shearlerbow@gmail.com"]').addEventListener('click', function() {
    alert('Thank you for reaching out!');
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

