/*
Seleccionar el segundo párrafo por medio de su id
Utilizaremos el selector individual document.getElementById('')
*/

/*Utilizamos la función del botón para seleccionar y escribir texto en el segundo párrafo*/
// function escribirTextoSegundoParrafo() {
//     var segundoP = document.getElementById('segundoParrafo');
//     segundoP.innerHTML = 'En este lugar estará el resultado de la selección';
// }

// function escribirTextoTercerParrafo() {
//     var tercerP = document.getElementById('tercerParrafo');
//     tercerP.innerHTML = 'Tercer párrafo'
// }

// function escribirTextoCuartoParrafo() {
//     var cuartoP = document.getElementById('cuartoParrafo');
//     cuartoP.innerHTML = 'Cuarto párrafo'
// }

/*Selector para seleccionar elementos por medio de su id, clase o etiqueta*/
// var sparrafo = document.querySelector('#segundoParrafo');
// var sparrafo = document.querySelector('.parrafo');
// var sparrafo = documet.querySelector('p');

/*
Cargar el arreglo con nombres de personas:
Luego odenar mediante el método sort()
*/

/*Utilizar un párrafo para mostrar los nombres sin ordenar*/
var arregloNombres = ['Lourdes', 'Ximena', 'Raúl', 'Ana', 'Eliana', 'Paula'];
var sinOrdenar = document.querySelector('#segundoParrafo');
sinOrdenar.innerHTML = arregloNombres.join(', ');

/*Utilizar un párrafo para imprimir los nombres ordenados en un tercer párrafo*/
var ordenar = document.querySelector('#tercerParrafo');
ordenar.innerHTML = arregloNombres.sort().join(', ');

/*Utilizar un párrafo para mostrar los precios sin aumento*/
var arregloPrecios = [600, 400, 300, 200, 100];
var sinAumento = document.querySelector('#quintoParrafo');
sinAumento.innerHTML = arregloPrecios.join(' / ');

/*Utilizar un párrafo para mostrar los precios con aumento*/
var aumento = document.querySelector('#sextoParrafo');
aumento.innerHTML = arregloPrecios.map(precio => (precio * 1.10).toFixed(2)).join(' / ');