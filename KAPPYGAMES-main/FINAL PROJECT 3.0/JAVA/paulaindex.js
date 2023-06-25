
// CARTA 1
let modal1 = document.getElementById("popup1");
let btn1 = document.getElementById("openPopup1");
let modalclose = document.getElementById("fondo1");
let popupclose = document.getElementById("popupclose");
let boton1der1 = document.getElementById("botonder");
let boton2izq1 = document.getElementById("botonizq");
let buscador = document.querySelector(".Busqueda");

btn1.addEventListener("click", function() {
  modal1.style.display = "block";
  buscador.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modal1) {
    modal1.style.display = "none";
    
  }
});
window.addEventListener("click", function(event) {
  if (event.target === modalclose) {
    modal1.style.display = "none";
    buscador.style.display = "grid";
  }
});

window.addEventListener("click", function(event) {
  if (event.target === popupclose) {
    modal1.style.display = "none";
    buscador.style.display = "grid";
  }
});

boton1der1.addEventListener("click", function() {
  modal1.style.display = "none";
  modal2.style.display = "block";
});

boton2izq1.addEventListener("click", function() {
  modal1.style.display = "none";
  modal5.style.display = "block";
});


// CARTA2
let modal2 = document.getElementById("popup2");
let btn2 = document.getElementById("openModal2");
let modalclose2 = document.getElementById("fondo2");
let popupclose2 = document.getElementById("popupclose2");
let boton1der2 = document.getElementById("botonder2");
let boton2izq2 = document.getElementById("botonizq2");

btn2.addEventListener("click", function() {
  modal2.style.display = "block";
  buscador.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modal2) {
    modal2.style.display = "none";
  }
});
window.addEventListener("click", function(event) {
  if (event.target === modalclose2) {
    modal2.style.display = "none";
    buscador.style.display = "grid";
  }
});

window.addEventListener("click", function(event) {
  if (event.target === popupclose2) {
    modal2.style.display = "none";
    buscador.style.display = "grid";
  }
});

boton1der2.addEventListener("click", function() {
  modal2.style.display = "none";
  modal3.style.display = "block";
});

boton2izq2.addEventListener("click", function() {
  modal2.style.display = "none";
  modal1.style.display = "block";
});


// CARTA3
let modal3 = document.getElementById("popup3");
let btn3 = document.getElementById("openModal3");
let modalclose3 = document.getElementById("fondo3");
let popupclose3 = document.getElementById("popupclose3");
let boton1der3 = document.getElementById("botonder3");
let boton2izq3 = document.getElementById("botonizq3");

btn3.addEventListener("click", function() {
  modal3.style.display = "block";
  buscador.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modal3) {
    modal3.style.display = "none";
  }
});

window.addEventListener("click", function(event) {
  if (event.target === modalclose3) {
    modal3.style.display = "none";
    buscador.style.display = "grid";
  }
});

window.addEventListener("click", function(event) {
  if (event.target === popupclose3) {
    modal3.style.display = "none";
    buscador.style.display = "grid";
  }
});

boton1der3.addEventListener("click", function() {
  modal3.style.display = "none";
  modal4.style.display = "block";
});

boton2izq3.addEventListener("click", function() {
  modal3.style.display = "none";
  modal2.style.display = "block";
});


// CARTA4
let modal4 = document.getElementById("popup4");
let btn4 = document.getElementById("openModal4");
let modalclose4 = document.getElementById("fondo4");
let popupclose4 = document.getElementById("popupclose4");
let boton1der4 = document.getElementById("botonder4");
let boton2izq4 = document.getElementById("botonizq4");

btn4.addEventListener("click", function() {
  modal4.style.display = "block";
  buscador.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modal4) {
    modal4.style.display = "none";
  }
});

window.addEventListener("click", function(event) {
  if (event.target === modalclose4) {
    modal4.style.display = "none";
    buscador.style.display = "grid";
  }
});

window.addEventListener("click", function(event) {
  if (event.target === popupclose4) {
    modal4.style.display = "none";
    buscador.style.display = "grid";
  }
});

boton1der4.addEventListener("click", function() {
  modal4.style.display = "none";
  modal5.style.display = "block";
  
} );

boton2izq4.addEventListener("click", function() {
  modal4.style.display = "none";
  modal3.style.display = "block";
});


// CARTA5
let modal5 = document.getElementById("popup5");
let btn5 = document.getElementById("openModal5");
let modalclose5 = document.getElementById("fondo5");
let popupclose5 = document.getElementById("popupclose5");
let boton1der5 = document.getElementById("botonder5");
let boton2izq5 = document.getElementById("botonizq5");

btn5.addEventListener("click", function() {
  modal5.style.display = "block";
  buscador.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modal5) {
    modal5.style.display = "none";
  }
});

window.addEventListener("click", function(event) {
  if (event.target === modalclose5) {
    modal5.style.display = "none";
    buscador.style.display = "grid";
  }
});

window.addEventListener("click", function(event) {
  if (event.target === popupclose5) {
    modal5.style.display = "none";
    buscador.style.display = "grid";
  }
});

boton1der5.addEventListener("click", function() {
  modal5.style.display = "none";
  modal1.style.display = "block";
});

boton2izq5.addEventListener("click", function() {
  modal5.style.display = "none";
  modal4.style.display = "block";
});




// CARTA 6
let modal6 = document.getElementById("popup6");
let btn6 = document.getElementById("openModal6");
let modalclose6 = document.getElementById("fondo6");
let popupclose6 = document.getElementById("popupclose6");
let boton1der6 = document.getElementById("botonder6");
let boton2izq6 = document.getElementById("botonizq6");

btn6.addEventListener("click", function() {
  modal6.style.display = "block";
  buscador.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modal5) {
    modal6.style.display = "none";
  }
});

window.addEventListener("click", function(event) {
  if (event.target === modalclose6) {
    modal6.style.display = "none";
    buscador.style.display = "grid";
  }
});

window.addEventListener("click", function(event) {
  if (event.target === popupclose6) {
    modal6.style.display = "none";
    buscador.style.display = "grid";
  }
});

boton1der6.addEventListener("click", function() {
  modal6.style.display = "none";
  modal7.style.display = "block";
});

boton2izq6.addEventListener("click", function() {
  modal6.style.display = "none";
  modal10.style.display = "block";
});


// CARTA 7
let modal7 = document.getElementById("popup7");
let btn7 = document.getElementById("openModal7");
let modalclose7 = document.getElementById("fondo7");
let popupclose7 = document.getElementById("popupclose7");
let boton1der7 = document.getElementById("botonder7");
let boton2izq7 = document.getElementById("botonizq7");

btn7.addEventListener("click", function() {
  modal7.style.display = "block";
  buscador.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modal7) {
    modal7.style.display = "none";
  }
});

window.addEventListener("click", function(event) {
  if (event.target === modalclose7) {
    modal7.style.display = "none";
    buscador.style.display = "grid";
  }
});

window.addEventListener("click", function(event) {
  if (event.target === popupclose7) {
    modal7.style.display = "none";
    buscador.style.display = "grid";
  }
});

boton1der7.addEventListener("click", function() {
  modal7.style.display = "none";
  modal8.style.display = "block";
});

boton2izq7.addEventListener("click", function() {
  modal7.style.display = "none";
  modal6.style.display = "block";
});



// CARTA 8
let modal8 = document.getElementById("popup8");
let btn8 = document.getElementById("openModal8");
let modalclose8 = document.getElementById("fondo8");
let popupclose8 = document.getElementById("popupclose8");
let boton1der8 = document.getElementById("botonder8");
let boton2izq8 = document.getElementById("botonizq8");

btn8.addEventListener("click", function() {
  modal8.style.display = "block";
  buscador.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modal8) {
    modal8.style.display = "none";
  }
});

window.addEventListener("click", function(event) {
  if (event.target === modalclose8) {
    modal8.style.display = "none";
    buscador.style.display = "grid";
  }
});

window.addEventListener("click", function(event) {
  if (event.target === popupclose8) {
    modal8.style.display = "none";
    buscador.style.display = "grid";
  }
});

boton1der8.addEventListener("click", function() {
  modal8.style.display = "none";
  modal9.style.display = "block";
});

boton2izq8.addEventListener("click", function() {
  modal8.style.display = "none";
  modal7.style.display = "block";
});



// CARTA 9
let modal9 = document.getElementById("popup9");
let btn9 = document.getElementById("openModal9");
let modalclose9 = document.getElementById("fondo9");
let popupclose9 = document.getElementById("popupclose9");
let boton1der9 = document.getElementById("botonder9");
let boton2izq9 = document.getElementById("botonizq9");

btn9.addEventListener("click", function() {
  modal9.style.display = "block";
  buscador.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modal9) {
    modal9.style.display = "none";
  }
});

window.addEventListener("click", function(event) {
  if (event.target === modalclose9) {
    modal9.style.display = "none";
    buscador.style.display = "grid";
  }
});

window.addEventListener("click", function(event) {
  if (event.target === popupclose9) {
    modal9.style.display = "none";
    buscador.style.display = "grid";
  }
});

boton1der9.addEventListener("click", function() {
  modal9.style.display = "none";
  modal10.style.display = "block";
});

boton2izq9.addEventListener("click", function() {
  modal9.style.display = "none";
  modal8.style.display = "block";
});



// CARTA 10
let modal10 = document.getElementById("popup10");
let btn10 = document.getElementById("openModal10");
let modalclose10 = document.getElementById("fondo10");
let popupclose10 = document.getElementById("popupclose10");
let boton1der10 = document.getElementById("botonder10");
let boton2izq10 = document.getElementById("botonizq10");

btn10.addEventListener("click", function() {
  modal10.style.display = "block";
  buscador.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modal10) {
    modal10.style.display = "none";
  }
});

window.addEventListener("click", function(event) {
  if (event.target === modalclose10) {
    modal10.style.display = "none";
    buscador.style.display = "grid";
  }
});

window.addEventListener("click", function(event) {
  if (event.target === popupclose10) {
    modal10.style.display = "none";
    buscador.style.display = "grid";
  }
});

boton1der10.addEventListener("click", function() {
  modal10.style.display = "none";
  modal6.style.display = "block";
});

boton2izq10.addEventListener("click", function() {
  modal10.style.display = "none";
  modal9.style.display = "block";
});





// BLOQUEAR PAGINA CUANDO POPUP JUEGOS

// let bloquear = document.querySelectorAll(".button")
// let cuerpoBloc = document.querySelector(".body")

// bloquear.addEventListener('click', () => {
//   disableTouchScroll();
// })


// selecionar.addEventListener('click', () => {
//   // Añadir estilo al elemento click
//   selecionar.classList.toggle('selecionar-clicked');
//   // Añadir estilo a la flecha
//   // flechaSeleccion.classList.toggle('flechaSeleccion-rotate');
//   // Añadir estilo al menú
//   elementosSeleccion.classList.toggle('elementosSeleccion-open');
// });


const element = document.querySelector(".botonArriba");

function scrollToBottom() {
  element.scrollIntoView(false);
}





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

