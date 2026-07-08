/*=========================================
          CREAR ESTRELLAS
=========================================*/

const fondo = document.getElementById("estrellas");
const cantidadEstrellas = 180;

for (let i = 0; i < cantidadEstrellas; i++) {

    const estrella = document.createElement("span");

    estrella.classList.add("estrella");

    estrella.style.left = Math.random() * 100 + "%";
    estrella.style.top = Math.random() * 100 + "%";

    const tamaño = Math.random() * 3 + 1;

    estrella.style.width = tamaño + "px";
    estrella.style.height = tamaño + "px";

    const movimiento = Math.random() * 25 + 10;
    const brillo = Math.random() * 4 + 2;

    estrella.style.animationDuration = `${movimiento}s, ${brillo}s`;

    estrella.style.opacity = Math.random();

    fondo.appendChild(estrella);

}


/*=========================================
          CAMBIO DE CAPÍTULOS
=========================================*/

const paginas = document.querySelectorAll(".pagina");

let actual = 0;


/* Muestra una página */
function mostrarPagina(indice) {

    if (indice < 0 || indice >= paginas.length) return;

    paginas.forEach(pagina => {
        pagina.classList.remove("activa");
    });

    paginas[indice].classList.add("activa");

    actual = indice;

    // Llevar siempre al inicio del nuevo capítulo
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* Botón Continuar */
function siguientePagina() {

    if (actual < paginas.length - 1) {

        mostrarPagina(actual + 1);

    }

}


/*=========================================
          INICIAR + MÚSICA
=========================================*/

function iniciarPagina() {

    const musica = document.getElementById("musica");

    if (musica) {

        musica.volume = 0.25;

        // Evita errores del navegador si bloquea autoplay
        musica.play().catch(() => {});

    }

    // Abre directamente el Capítulo I
    mostrarPagina(1);

}


/*=========================================
          EFECTO BOTONES
=========================================*/

const botones = document.querySelectorAll("button");

botones.forEach(boton => {

    boton.addEventListener("mouseenter", () => {

        boton.style.letterSpacing = "2px";

    });

    boton.addEventListener("mouseleave", () => {

        boton.style.letterSpacing = "0";

    });

});


/*=========================================
      REPRODUCIR VIDEO AL ENTRAR
=========================================*/

const video = document.querySelector("video");

if (video) {

    video.setAttribute("playsinline", "");
    video.setAttribute("preload", "metadata");

}


/*=========================================
      ASEGURAR INICIO ARRIBA
=========================================*/

window.addEventListener("load", () => {

    window.scrollTo(0, 0);

});
