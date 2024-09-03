// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});

// document.addEventListener('mousemove', function(e) {
//     const x = e.clientX / window.innerWidth;
//     const y = e.clientY / window.innerHeight;
//     const red = Math.round(x * 255);
//     const blue = Math.round(y * 255);
//     document.body.style.background = `rgb(${red}, 0, ${blue})`;
// });