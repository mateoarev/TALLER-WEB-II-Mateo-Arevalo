var litros = [];
var i = 0;

while (i < 6) {
    litros[i] = parseFloat(prompt('Ingrese la cantidad de litros del día ' + (i + 1)));
    i++;
}
document.write('Litros: ' + litros.join(' / ') + '<br>');

var totalCombustible = litros.reduce((acumulador, litro) => acumulador + litro, 0);
document.write('El total de combustible ingresado durante la semana es: ' + totalCombustible.toFixed(2) + ' lts');