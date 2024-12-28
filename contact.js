// Obtener referencias a elementos DOM
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

// Función para alternar la visibilidad del menú
function toggleMenu() {
    navbar.classList.toggle('show');
}

// Event listener para el botón de hamburguesa
menuToggle.addEventListener('click', toggleMenu);

// Referencias a los elementos
const onePropertyBtn = document.getElementById('one-property');
const multiplePropertiesBtn = document.getElementById('multiple-properties');
const formContainer = document.getElementById('form-container');
const formOneProperty = document.getElementById('form-one-property');
const formMultipleProperties = document.getElementById('form-multiple-properties');
const contactOptions = document.getElementById('contact-options');

// Verifica si los elementos existen antes de usar eventos
if (onePropertyBtn && multiplePropertiesBtn && formContainer && formOneProperty && formMultipleProperties) {
    // Manejador para mostrar el formulario de 1 vivienda
    onePropertyBtn.addEventListener('click', () => {
        formContainer.classList.remove('hidden');
        formOneProperty.classList.remove('hidden');
        formMultipleProperties.classList.add('hidden');
        contactOptions.classList.add('hidden');
    });

    // Manejador para mostrar el formulario de 2 o más viviendas
    multiplePropertiesBtn.addEventListener('click', () => {
        formContainer.classList.remove('hidden');
        formMultipleProperties.classList.remove('hidden');
        formOneProperty.classList.add('hidden');
        contactOptions.classList.add('hidden');
    });
} else {
    console.error('Uno o más elementos no se encontraron en el DOM.');
}