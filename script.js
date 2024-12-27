// Obtener referencias a elementos DOM
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

// Función para alternar la visibilidad del menú
function toggleMenu() {
    navbar.classList.toggle('show');
}

// Event listener para el botón de hamburguesa
menuToggle.addEventListener('click', toggleMenu);

    // Obtener referencia al elemento de video
    var myVideo = document.getElementById("myVideo");

    // Función para pausar/reanudar al hacer clic en el video
    function togglePlayPause() {
        if (myVideo.paused) {
            myVideo.play();
        } else {
            myVideo.pause();
        }
    }

    // Asignar la función al evento clic en el video
    myVideo.addEventListener("click", togglePlayPause);

    let lastScrollY = window.scrollY;
const header = document.querySelector('.header');

// Altura desde la cual empieza a funcionar el comportamiento
const activationHeight = 50; 

// Escucha el evento de desplazamiento
window.addEventListener('scroll', () => {
    // Solo aplica en dispositivos móviles
    if (window.innerWidth <= 768) {
        if (window.scrollY <= activationHeight) {
            // Si estamos en la parte superior, el header se queda fijo
            header.style.transform = 'translateY(0)';
        } else {
            if (window.scrollY > lastScrollY) {
                // Si el usuario está desplazándose hacia abajo, oculta el header
                header.style.transform = 'translateY(-100%)';
            } else {
                // Si el usuario está desplazándose hacia arriba, muestra el header
                header.style.transform = 'translateY(0)';
            }
        }
        lastScrollY = window.scrollY;
    }
});
