var arregloNombres = ['Lourdes', 'Ximena', 'Raúl', 'Ana', 'Eliana', 'Paula'];
var sinOrdenar = document.querySelector('#segundoParrafo');
sinOrdenar.innerHTML = arregloNombres.join(', ');

function ordenarNombres() {
    var parrafoOrdenado = document.getElementById('tercerParrafo');
    parrafoOrdenado.style.backgroundColor = 'green';
    parrafoOrdenado.innerHTML = arregloNombres.sort().join(', ');
}

var arregloPrecios = [600, 400, 300, 200, 100];
var sinAumento = document.querySelector('#quintoParrafo');
sinAumento.innerHTML = arregloPrecios.join(' / ');

function aumentarPrecios() {
    var precioConAumento = document.getElementById('sextoParrafo');
    precioConAumento.style.backgroundColor = 'green';
    precioConAumento.innerHTML = arregloPrecios.map(precio => (precio * 1.10).toFixed(2)).join(' / ');
}