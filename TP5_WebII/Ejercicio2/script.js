var precios = [];
var i = 0;

while (i < 6) {
    precios[i] = parseFloat(prompt('Ingrese el precio del componente'));
    i++;
}
document.write('Precios: ' + precios.join(' / ') + '<br>');

var sumaTotal = precios.reduce((acumulador, precio) => acumulador + precio, 0);
document.write('El monto total de la compra es: $' + sumaTotal.toFixed(2));