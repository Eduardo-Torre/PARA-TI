/*=========================================
          CREAR ESTRELLAS
=========================================*/


const fondo = document.getElementById("estrellas");


const cantidadEstrellas = 180;



for(let i = 0; i < cantidadEstrellas; i++){


    let estrella = document.createElement("span");


    estrella.classList.add("estrella");



    estrella.style.left =
    Math.random()*100 + "%";



    estrella.style.top =
    Math.random()*100 + "%";



    let tamaño =
    Math.random()*3 + 1;



    estrella.style.width =
    tamaño+"px";


    estrella.style.height =
    tamaño+"px";



    let movimiento =
    Math.random()*25 + 10;



    let brillo =
    Math.random()*4 + 2;



    estrella.style.animationDuration =
    movimiento+"s, "+brillo+"s";



    estrella.style.opacity =
    Math.random();



    fondo.appendChild(estrella);


}







/*=========================================
          CAMBIO DE CAPITULOS
=========================================*/


const paginas = document.querySelectorAll(".pagina");


let actual = 0;




function siguientePagina(){


    paginas[actual].classList.remove("activa");



    actual++;




    if(actual < paginas.length){


        paginas[actual].classList.add("activa");


    }


}







/*=========================================
          INICIAR PAGINA + MUSICA
=========================================*/


function iniciarPagina(){


    let musica = document.getElementById("musica");



    if(musica){


        musica.volume = 0.25;


        musica.play();


    }



    siguientePagina();


}







/*=========================================
        EFECTOS BOTONES
=========================================*/


const botones = document.querySelectorAll("button");



botones.forEach(boton=>{


    boton.addEventListener("mouseenter",()=>{


        boton.style.letterSpacing="2px";


    });



    boton.addEventListener("mouseleave",()=>{


        boton.style.letterSpacing="0";


    });


});