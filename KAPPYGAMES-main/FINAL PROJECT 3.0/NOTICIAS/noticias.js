// Obtener la referencia al elemento contenedor de las noticias
const noticiasContainer = document.getElementById('noticias');

// Array de noticias
const noticias = [
  {
    href: 'htpps://google.com',
    imagen: 'https://media.vandal.net/i/1280x720/6-2023/20236131304011_1.jpg.webp',
    titulo: 'Blizzard desvela qué precio tendrán las misiones de historia de Overwatch 2',
    descripcion: 'Aunque se eliminó el modo PvE, Overwatch 2 contará con un seguido de misiones de historia que tendrán un coste 15 euros, además de un lote premium especial.'
  },
  {
    imagen: 'https://media.vandal.net/i/1280x720/6-2023/20236131158426_1.jpg.webp',
    titulo: 'El tráiler de Fable causa división entre los fans por su protagonista',
    descripcion: 'Microsoft abrió su Xbox Games Showcase con Fable de Playground Games, mostrando a sus personajes principales y un poco de combate. La protagonista no ha convencido a parte de la comunidad.'
  },
  {
    imagen: 'https://media.vandal.net/i/1280x720/143296/mega-man-x-dive-offline-202361310114043_1.jpg.webp',
    titulo: 'Mega Man X DiVE Offline anunciado para PC, iOS y Android',
    descripcion: 'Se trata de una versión de Mega Man X DiVE sin funciones online que llegará a lo largo de 2023; perderá algunas de las colaboraciones con otros juegos.'
  },
  {
    imagen: 'https://media.vandal.net/i/1280x720/121126/dragons-dogma-2-20236139503271_1.jpg.webp',
    titulo: 'El mundo de Dragons Dogma 2 será cuatro veces más grande que el de la primera entrega',
    descripcion: 'Capcom presenta nuevo gameplay e imágenes de esta secuela del RPG de acción en mundo abierto, detalles de sus peones y más.'
  },
  {
    imagen: 'https://media.vandal.net/i/1280x720/6-2023/20236131304011_1.jpg.webp',
    titulo: 'Blizzard desvela qué precio tendrán las misiones de historia de Overwatch 2',
    descripcion: 'Aunque se eliminó el modo PvE, Overwatch 2 contará con un seguido de misiones de historia que tendrán un coste 15 euros, además de un lote premium especial.'
  },
  {
    imagen: 'https://media.vandal.net/i/1280x720/6-2023/20236131158426_1.jpg.webp',
    titulo: 'El tráiler de Fable causa división entre los fans por su protagonista',
    descripcion: 'Microsoft abrió su Xbox Games Showcase con Fable de Playground Games, mostrando a sus personajes principales y un poco de combate. La protagonista no ha convencido a parte de la comunidad.'
  },
  {
    imagen: 'https://media.vandal.net/i/1280x720/143296/mega-man-x-dive-offline-202361310114043_1.jpg.webp',
    titulo: 'Mega Man X DiVE Offline anunciado para PC, iOS y Android',
    descripcion: 'Se trata de una versión de Mega Man X DiVE sin funciones online que llegará a lo largo de 2023; perderá algunas de las colaboraciones con otros juegos.'
  },
  {
    imagen: 'https://media.vandal.net/i/1280x720/121126/dragons-dogma-2-20236139503271_1.jpg.webp',
    titulo: 'El mundo de Dragons Dogma 2 será cuatro veces más grande que el de la primera entrega',
    descripcion: 'Capcom presenta nuevo gameplay e imágenes de esta secuela del RPG de acción en mundo abierto, detalles de sus peones y más.'
  },
  {
    imagen: 'https://media.vandal.net/i/1280x720/6-2023/20236131304011_1.jpg.webp',
    titulo: 'Blizzard desvela qué precio tendrán las misiones de historia de Overwatch 2',
    descripcion: 'Aunque se eliminó el modo PvE, Overwatch 2 contará con un seguido de misiones de historia que tendrán un coste 15 euros, además de un lote premium especial.'
  },
  {
    imagen: 'https://media.vandal.net/i/1280x720/6-2023/20236131158426_1.jpg.webp',
    titulo: 'El tráiler de Fable causa división entre los fans por su protagonista',
    descripcion: 'Microsoft abrió su Xbox Games Showcase con Fable de Playground Games, mostrando a sus personajes principales y un poco de combate. La protagonista no ha convencido a parte de la comunidad.'
  },
  {
    imagen: 'https://media.vandal.net/i/1280x720/143296/mega-man-x-dive-offline-202361310114043_1.jpg.webp',
    titulo: 'Mega Man X DiVE Offline anunciado para PC, iOS y Android',
    descripcion: 'Se trata de una versión de Mega Man X DiVE sin funciones online que llegará a lo largo de 2023; perderá algunas de las colaboraciones con otros juegos.'
  },
  {
    imagen: 'https://media.vandal.net/i/1280x720/121126/dragons-dogma-2-20236139503271_1.jpg.webp',
    titulo: 'El mundo de Dragons Dogma 2 será cuatro veces más grande que el de la primera entrega',
    descripcion: 'Capcom presenta nuevo gameplay e imágenes de esta secuela del RPG de acción en mundo abierto, detalles de sus peones y más.'
  },
  {
    imagen: 'https://media.vandal.net/i/1280x720/6-2023/20236131304011_1.jpg.webp',
    titulo: 'Blizzard desvela qué precio tendrán las misiones de historia de Overwatch 2',
    descripcion: 'Aunque se eliminó el modo PvE, Overwatch 2 contará con un seguido de misiones de historia que tendrán un coste 15 euros, además de un lote premium especial.'
  },
  {
    imagen: 'https://media.vandal.net/i/1280x720/6-2023/20236131158426_1.jpg.webp',
    titulo: 'El tráiler de Fable causa división entre los fans por su protagonista',
    descripcion: 'Microsoft abrió su Xbox Games Showcase con Fable de Playground Games, mostrando a sus personajes principales y un poco de combate. La protagonista no ha convencido a parte de la comunidad.'
  },
  {
    imagen: 'https://media.vandal.net/i/1280x720/143296/mega-man-x-dive-offline-202361310114043_1.jpg.webp',
    titulo: 'Mega Man X DiVE Offline anunciado para PC, iOS y Android',
    descripcion: 'Se trata de una versión de Mega Man X DiVE sin funciones online que llegará a lo largo de 2023; perderá algunas de las colaboraciones con otros juegos.'
  },
  {
    imagen: 'https://media.vandal.net/i/1280x720/121126/dragons-dogma-2-20236139503271_1.jpg.webp',
    titulo: 'El mundo de Dragons Dogma 2 será cuatro veces más grande que el de la primera entrega',
    descripcion: 'Capcom presenta nuevo gameplay e imágenes de esta secuela del RPG de acción en mundo abierto, detalles de sus peones y más.'
  },
  {
    imagen: 'https://media.vandal.net/i/1280x720/6-2023/20236131304011_1.jpg.webp',
    titulo: 'Blizzard desvela qué precio tendrán las misiones de historia de Overwatch 2',
    descripcion: 'Aunque se eliminó el modo PvE, Overwatch 2 contará con un seguido de misiones de historia que tendrán un coste 15 euros, además de un lote premium especial.'
  },
  {
    imagen: 'https://media.vandal.net/i/1280x720/6-2023/20236131158426_1.jpg.webp',
    titulo: 'El tráiler de Fable causa división entre los fans por su protagonista',
    descripcion: 'Microsoft abrió su Xbox Games Showcase con Fable de Playground Games, mostrando a sus personajes principales y un poco de combate. La protagonista no ha convencido a parte de la comunidad.'
  },
  {
    imagen: 'https://media.vandal.net/i/1280x720/143296/mega-man-x-dive-offline-202361310114043_1.jpg.webp',
    titulo: 'Mega Man X DiVE Offline anunciado para PC, iOS y Android',
    descripcion: 'Se trata de una versión de Mega Man X DiVE sin funciones online que llegará a lo largo de 2023; perderá algunas de las colaboraciones con otros juegos.'
  },
  {
    imagen: 'https://media.vandal.net/i/1280x720/121126/dragons-dogma-2-20236139503271_1.jpg.webp',
    titulo: 'El mundo de Dragons Dogma 2 será cuatro veces más grande que el de la primera entrega',
    descripcion: 'Capcom presenta nuevo gameplay e imágenes de esta secuela del RPG de acción en mundo abierto, detalles de sus peones y más.'
  },
  {
    imagen: 'https://media.vandal.net/i/1280x720/6-2023/20236131304011_1.jpg.webp',
    titulo: 'Blizzard desvela qué precio tendrán las misiones de historia de Overwatch 2',
    descripcion: 'Aunque se eliminó el modo PvE, Overwatch 2 contará con un seguido de misiones de historia que tendrán un coste 15 euros, además de un lote premium especial.'
  },
  {
    imagen: 'https://media.vandal.net/i/1280x720/6-2023/20236131158426_1.jpg.webp',
    titulo: 'El tráiler de Fable causa división entre los fans por su protagonista',
    descripcion: 'Microsoft abrió su Xbox Games Showcase con Fable de Playground Games, mostrando a sus personajes principales y un poco de combate. La protagonista no ha convencido a parte de la comunidad.'
  },
  {
    imagen: 'https://media.vandal.net/i/1280x720/143296/mega-man-x-dive-offline-202361310114043_1.jpg.webp',
    titulo: 'Mega Man X DiVE Offline anunciado para PC, iOS y Android',
    descripcion: 'Se trata de una versión de Mega Man X DiVE sin funciones online que llegará a lo largo de 2023; perderá algunas de las colaboraciones con otros juegos.'
  },
  {
    imagen: 'https://media.vandal.net/i/1280x720/121126/dragons-dogma-2-20236139503271_1.jpg.webp',
    titulo: 'El mundo de Dragons Dogma 2 será cuatro veces más grande que el de la primera entrega',
    descripcion: 'Capcom presenta nuevo gameplay e imágenes de esta secuela del RPG de acción en mundo abierto, detalles de sus peones y más.'
  },
  // Agrega más noticias según sea necesario
];
//buclefor para noticas
const botonMasCont = document.createElement('button');
botonMasCont.className = "noticiaMas";

// Función para crear y agregar una noticia al contenedor
function agregarNoticia(noticia) {
  const noticiaElement = document.createElement('div');
  noticiaElement.className = 'noticia';

  const imagenElement = document.createElement('div');
  imagenElement.className = 'imagen';
  const imagen = document.createElement('img');
  imagen.src = noticia.imagen;
  imagen.alt = 'Imagen de la noticia';
  imagenElement.appendChild(imagen);

  const contenidoElement = document.createElement('div');
  contenidoElement.className = 'contenido';

  const tituloElement = document.createElement('h2');
  tituloElement.textContent = noticia.titulo;

  const descripcionElement = document.createElement('p');
  descripcionElement.textContent = noticia.descripcion;
  const IrNews = document.createElement('A');
  
  IrNews.href = noticia.href;
  IrNews.textContent="ir";
  IrNews.className = "irNews";

  contenidoElement.appendChild(tituloElement);
  contenidoElement.appendChild(descripcionElement);
  contenidoElement.appendChild(IrNews)

  noticiaElement.appendChild(imagenElement);
  noticiaElement.appendChild(contenidoElement);

  noticiasContainer.appendChild(noticiaElement);
}

// Agregar todas las noticias al contenedor

let contadorNoticias = 0;

// Función para agregar las primeras 6 noticias al principio
function agregarPrimerasNoticias() {
  for (let i = contadorNoticias; i < contadorNoticias + 6; i++) {
    if (i < noticias.length) {
      agregarNoticia(noticias[i]);
    }
  }

  contadorNoticias += 6;


}

agregarPrimerasNoticias();

const botonAgregar = document.querySelector(".agregarmas"); // Asegúrate de usar el selector correcto aquí

botonAgregar.addEventListener("click", function() {
  for (let i = contadorNoticias; i < contadorNoticias + 6; i++) {
    if (i < noticias.length) {
      agregarNoticia(noticias[i]);
    }
  }
  contadorNoticias += 6;
  if (contadorNoticias >= noticias.length) {
    botonAgregar.style.display = "none";
  }
});


// INICIAR SESIÓN

let inicioSesion = document.getElementById("inicioSesion");
let inicioBoton = document.querySelector(".Login2");
let inicioCerrar = document.getElementById("inicioCerrar");


inicioBoton.addEventListener("click", function() {
  inicioSesion.style.display = "block";
  
});

window.addEventListener("click", function(event) {
  if (event.target === inicioSesion) {
    inicioSesion.style.display = "none";
  }
});


window.addEventListener("click", function(event) {
  if (event.target === inicioCerrar) {
    inicioSesion.style.display = "none";
  }
});

// Ir a registro

let registrate = document.getElementById("registrate");
registrate.addEventListener("click", function() {
  registro.style.display = "block";
  
});
window.addEventListener("click", function(event) {
  if (event.target === registrate) {
    inicioSesion.style.display = "none";
  }
});






// REGISTRO

let registro = document.getElementById("registroSesion");
let registroBoton = document.querySelector(".Login3");
let registroCerrar = document.getElementById("registroCerrar");


registroBoton.addEventListener("click", function() {
  registro.style.display = "block";
  
});

window.addEventListener("click", function(event) {
  if (event.target === registro) {
    registro.style.display = "none";
  }
});


window.addEventListener("click", function(event) {
  if (event.target === registroCerrar) {
    registro.style.display = "none";
  }
});


// Ir a iniciar sesion

let inicio = document.getElementById("inicio");
inicio.addEventListener("click", function() {
  inicioSesion.style.display = "block";
  
});
window.addEventListener("click", function(event) {
  if (event.target === inicio) {
    registro.style.display = "none";
  }
});



// BOTONES SUBMIT

let submit = document.querySelector("#submit1");
window.addEventListener("click", function(event) {
  if (event.target === submit) {
    inicioSesion.style.display = "none";
    
  }
  
});

let submit2 = document.querySelector("#submit2");
window.addEventListener("click", function(event) {
  if (event.target === submit2) {
    registro.style.display = "none";
    
  }
  
});



//Ocultar boton de subir//
window.addEventListener("scroll", function () {

  let scrollY = window.scrollY;
  let windowHeight = window.innerHeight;
  let mitadPagina = windowHeight / 2;

  console.log(scrollY)

  if (scrollY < mitadPagina) {
    ocultarBoton();
    console.log("cerrao")
  } else {
    mostrarBoton();
    console.log("abierto")
  }
});

function mostrarBoton() {
  let botonArriba = document.querySelector(".botonArriba");
  botonArriba.style.display = "block";
}

function ocultarBoton() {
  let botonArriba = document.querySelector(".botonArriba");
  botonArriba.style.display = "none";
}
