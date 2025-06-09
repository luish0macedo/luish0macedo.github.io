//Luís Macedo | 3220554 | Portfolio | 3º 2024/2025 | 2º semestre | Laboratório de Projeto II | Design Gráfico e Multimédia | ESAD.CR | Professor Marco Heleno | 09-06-2025

document.addEventListener('DOMContentLoaded', function() {
    // Menu versão mobile
    // Ativa a navbar quando este é clicado
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});