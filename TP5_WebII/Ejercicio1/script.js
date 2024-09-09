var notas = [];

for (var i = 0; i < 5; i++) {
    notas[i] = parseFloat(prompt('Ingrese una nota'));
}
document.write('Notas: ' + notas.join(' / ') + '<br>');

var sumaTotal = notas.reduce((acumulador, nota) => acumulador + nota, 0);
var promedio = sumaTotal / notas.length;
document.write('La suma total de las notas es: ' + sumaTotal + '<br>');
document.write('Promedio: ' + promedio);