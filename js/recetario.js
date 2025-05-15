/*const recetas = [
    { id: 'birria-de-res', receta: 'birria-de-res-fit' },
    { id: 'albondigas-en-caldo', receta: 'albondigas-en-caldo' },
    { id: 'caldo-de-pescado', receta: 'caldo-de-pescado' },
    { id: 'tortitas-de-eljote', receta: 'tortitas-de-eljote' },
    { id: 'zanahorias-en-vinagre', receta: 'zanahorias-en-vinagre' },
    { id: 'ensalada-de-betabel', receta: 'ensalada-de-betabel' }
  ];
*/

const sectionMenuRecetas = document.getElementById("menu-recetas");
const recetaBirriaDeRes = document.getElementById('birria-de-res-fit');
const recetaAlbondigasEnClado = document.getElementById('albondigas-en-caldo');
const recetaCaldoDePescado = document.getElementById('caldo-de-pescado');
const recetaTortitasDeEjote = document.getElementById('tortitas-de-ejote');
const recetaZanahoriasEnVinagre = document.getElementById('zanahorias-en-vinagre');
const recetaEnsaladaDeBetabel = document.getElementById('ensalada-de-betabel');


const botonBirriaDeRes= document.getElementById('boton-birria-de-res');
const botonAlbondigasEnCaldo = document.getElementById('boton-albondigas-en-caldo');
const botonCaldoDePescado = document.getElementById('boton-caldo-de-pescado');
const botonTortitasDeEjote = document.getElementById('boton-tortitas-de-ejote');
const botonZanahoriasEnVinagre = document.getElementById('boton-zanahorias-en-vinagre');
const botonEnsaladaDeBetabel = document.getElementById('boton-ensalada-de-betabel');
const botonRegresar = document.getElementById('regresar');

function iniciar() {
    estadoInicial();

    botonBirriaDeRes.addEventListener('click',() => {verReceta(recetaBirriaDeRes)} );
    botonAlbondigasEnCaldo.addEventListener('click', () => {verReceta(recetaAlbondigasEnClado)});
    botonCaldoDePescado.addEventListener('click', () => {verReceta(recetaCaldoDePescado)});
    botonTortitasDeEjote.addEventListener('click', () => {verReceta(recetaTortitasDeEjote)});
    botonZanahoriasEnVinagre.addEventListener('click', function() {verReceta(recetaZanahoriasEnVinagre)});
    botonEnsaladaDeBetabel.addEventListener('click', () => {verReceta(recetaEnsaladaDeBetabel)});
    botonRegresar.addEventListener('click',regresar);

}

function verReceta(menu) {
    sectionMenuRecetas.style.display = 'none';
    menu.style.display = 'flex';
    console.log(menu);
    botonRegresar.style.display = 'block'
}

function regresar () {
    estadoInicial();
    
}

function estadoInicial(){
    recetaBirriaDeRes.style.display = 'none';
    recetaAlbondigasEnClado.style.display = 'none';
    recetaCaldoDePescado.style.display = 'none';
    recetaTortitasDeEjote.style.display = 'none';
    recetaZanahoriasEnVinagre.style.display = 'none';
    recetaEnsaladaDeBetabel.style.display = 'none';
    sectionMenuRecetas.style.display = 'grid';
    botonRegresar.style.display = 'none'
}

window.addEventListener('load',iniciar);