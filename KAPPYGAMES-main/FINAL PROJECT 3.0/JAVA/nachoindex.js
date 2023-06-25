const gridContainer = document.querySelector('.carrusel');
const items1 = document.querySelectorAll('.row1');
const items2 = document.querySelectorAll('.row2');
const items3 = document.querySelectorAll('.row3');
const items4 = document.querySelectorAll('.row4');
const items5 = document.querySelectorAll('.row5');

items1.forEach(item => {
  item.addEventListener('mouseover', () => {
    gridContainer.style.gridTemplateColumns = '6fr 1fr 1fr 1fr 1fr ';
   
  });

  item.addEventListener('mouseout', () => {
    gridContainer.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr';
  });
});

items2.forEach(item => {
    item.addEventListener('mouseover', () => {
      gridContainer.style.gridTemplateColumns = '1fr 6fr 1fr 1fr  1fr';
    });
  
    item.addEventListener('mouseout', () => {
      gridContainer.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr';
    });
  });
  
  items3.forEach(item => {
    item.addEventListener('mouseover', () => {
      gridContainer.style.gridTemplateColumns = '1fr 1fr 6fr 1fr  1fr';
    });
  
    item.addEventListener('mouseout', () => {
      gridContainer.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr';
    });
  });

  items4.forEach(item => {
    item.addEventListener('mouseover', () => {
      gridContainer.style.gridTemplateColumns = '1fr 1fr 1fr 6fr  1fr';
    });
  
    item.addEventListener('mouseout', () => {
      gridContainer.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr';
    });
  });

  items5.forEach(item => {
    item.addEventListener('mouseover', () => {
      gridContainer.style.gridTemplateColumns = '1fr 1fr 1fr 1fr  6fr';
    });
  
    item.addEventListener('mouseout', () => {
      gridContainer.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr';
    });
  });

  $(window).on("load", function () {
    setTimeout(function () {
      $(".loader-wrapper").fadeOut("slow");
    }, 2000); //tiempo de carga de la pagina de carga en ms

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