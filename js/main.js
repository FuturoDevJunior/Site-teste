document.addEventListener('DOMContentLoaded', () => {
    // Controle do Menu Mobile
    const menuButton = document.querySelector('.navbar-toggler');
    const navbar = document.querySelector('.navbar');

    menuButton.addEventListener('click', () => {
        const expanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !expanded);
        navbar.classList.toggle('active');
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Exemplo: comportamento do formulário de contato
    const form = document.querySelector('.contato-form form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensagem enviada! Em breve entraremos em contato.');
            form.reset();
        });
    }
}); 