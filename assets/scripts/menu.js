document.addEventListener('DOMContentLoaded', function() {
    // Menu versão mobile
    // Ativa a navbar quando este é clicado
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});