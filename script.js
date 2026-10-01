// Simple interactions for Oinance Link

document.addEventListener('DOMContentLoaded', () => {
    // Newsletter form
    const form = document.querySelector('.newsletter-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input').value;
            if (email) {
                alert('Thanks for subscribing to Oinance Link daily news!');
                form.reset();
            }
        });
    }

    // Smooth hover effects already handled by CSS
    // Could add more interactive features later (search modal, theme toggle, etc.)
    
    console.log('Oinance Link loaded successfully');
});
