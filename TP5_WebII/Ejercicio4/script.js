var ingresos = [];

for (var i = 0; i < 5; i++) {
    ingresos[i] = parseFloat(prompt('Ingrese el ingreso de día ' + (i + 1)));
}
document.write('Ingresos: ' + ingresos.join(' / ') + '<br>');

var totalMensual = ingresos.reduce((acumulador, ingreso) => acumulador + ingreso, 0);
document.write('El total de ingresos mensuales es: $' + totalMensual.toFixed(2));