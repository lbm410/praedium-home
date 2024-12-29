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

// Seleccionar todas las secciones que deseas animar
const sections = document.querySelectorAll('.fade-in-content');

// Crear el Intersection Observer
function setupObserver() {
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); // Agregar la clase visible
                    observer.unobserve(entry.target); // Detener la observación una vez que se anima
                }
            });
        },
        { threshold: 0.2 } // Activar cuando el 20% de la sección sea visible
    );

    // Observar cada sección
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Esperar a que la página esté completamente cargada
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const body = document.body;

    // Mantener el preloader visible unos segundos más
    setTimeout(() => {
        preloader.style.opacity = '0'; // Animar la opacidad para el desvanecimiento
        preloader.style.transition = 'opacity 1s ease'; // Transición suave

        // Cuando el preloader desaparezca completamente
        setTimeout(() => {
            preloader.style.display = 'none';
            body.classList.remove('preload'); // Eliminar la clase de estado inicial
            body.classList.add('loaded'); // Agregar la clase de contenido visible

            // Iniciar el Observer después de que el preloader desaparezca
            setupObserver();
        }, 1000); // Tiempo para que se complete la animación de desvanecimiento
    }, 500); // Tiempo extra en milisegundos para mostrar el preloader
})
;


