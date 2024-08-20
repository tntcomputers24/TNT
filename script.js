// Typewriter effect for hero section
document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.hero-content h1');
    const text = "Reliable Repairs, Right When You Need Them";
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    type();
});

// Additional dynamic effects can be added here
