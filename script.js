// Obtener referencias a elementos DOM
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

// Función para alternar la visibilidad del menú
function toggleMenu() {
    navbar.classList.toggle('show');
}

// Event listener para el botón de hamburguesa
menuToggle.addEventListener('click', toggleMenu);
