

//Slider de generos
$(document).ready(function () {
	$('#autoWidth').lightSlider({
		autoWidth: true,
		loop: true,
		onSliderLoad: function () {
			$('#autoWidth').removeClass('cS-hidden');
		}
	});
});




// Permite mover las flechas/botones donde se quiera + 
//CSS ligthslider .lSAction > a
jQuery(document).ready(function ($) {
	$('.lSAction').insertBefore('.lSSlideOuter');
});

//---------------------------------------------------------------------------



// NAVEGACION


const dropdowns = document.querySelectorAll('.menuSeleccion');

dropdowns.forEach(dropdown => {
    const selecionar = dropdown.querySelector('.selecionar');
    const flechaSeleccion = dropdown.querySelector('.flechaSeleccion');
    const elementosSeleccion = dropdown.querySelector('.elementosSeleccion');
    const opciones = dropdown.querySelectorAll('.elementosSeleccion li');
    const seleccionado = dropdown.querySelector('.seleccionado');

    // Elemento de click del elemento selecionado
    selecionar.addEventListener('click', () => {
        // Añadir estilo al elemento click
        selecionar.classList.toggle('selecionar-clicked');
        // Añadir estilo a la flecha
        // flechaSeleccion.classList.toggle('flechaSeleccion-rotate');
        // Añadir estilo al menú
        elementosSeleccion.classList.toggle('elementosSeleccion-open');
    });

    // Loop con las opciones del dropdown
    opciones.forEach(option => {
        option.addEventListener('click', () => {
            seleccionado.innerText = option.innerText;
            selecionar.classList.remove('selecionar-clicked');
            flechaSeleccion.classList.remove('flechaSeleccion-rotate');
            elementosSeleccion.classList.remove('elementosSeleccion-open');
            opciones.forEach(option => {
                option.classList.remove('activaSeleccion');
            });
            option.classList.add('activaSeleccion');
        });
    });
});




//TAGS

var dropdown = document.getElementById("contenidoTags");
  var isOpen = false;

  function toggleDropdown() {
    if (isOpen) {
      dropdown.style.display = "none";
      isOpen = false;
    } else {
      dropdown.style.display = "block";
      isOpen = true;
    }
  }

 


const tagsContainer = document.getElementById("contenedorTags");


function addTag(tag) {
  const tagElement = document.createElement("div");
  tagElement.classList.add("tag");
  tagElement.textContent = tag;

  const closeIcon = document.createElement("span");
  closeIcon.classList.add("tag-close");
  closeIcon.innerHTML = "&#x2716;";

  closeIcon.addEventListener("click", function () {
    tagElement.remove();
  });

  tagElement.appendChild(closeIcon);
  tagsContainer.appendChild(tagElement);
}


//BOTON TAGS ILUMINA
function changeColor(div) {
	div.classList.toggle("clicked");
};



//Rotar FLECHATAGS
// function changeColor(div) {
// 	div.classList.toggle("clicked");
// };







//-------------------------------------------------------------------------

//CARATULAS DE GENEROS

// Mantener el color blanco cuando se hace click en el corazon de gustar
function changeColor(button) {
	button.classList.toggle("clicked");
};

//   En esta versión actualizada, se ha agregado el parámetro this en la función
//    changeColor(this) para pasar el elemento del botón como argumento.Luego, 
//    dentro de la función changeColor, utilizamos button para referirnos 
//    al botón y aplicar la clase.clicked utilizando classList.toggle().
//    Esto asegurará que el cambio de color se aplique correctamente al botón 
//    cuando se haga clic en él.






//Ocultar el enlace de "ver mas"

	let boton = document.querySelector(".masGeneros");
  let masgeneros = document.querySelector('.caratulasJuegos2')

  boton.addEventListener('click',function(){
    boton.style.display = 'none';
    masgeneros.style.display = 'flex';
  })

// En este caso, el selector CSS .botonOculto se utiliza para
// aplicar la propiedad display: none; a cualquier elemento
// que tenga la clase botonOculto en su lista de clases. 
// La función ocultarBoton() se encarga de agregar esta 
// clase al botón cuando se hace clic en él.



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