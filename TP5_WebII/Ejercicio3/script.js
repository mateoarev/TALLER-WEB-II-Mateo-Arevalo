var pesos = [];
var i = 0;

do {
    pesos[i] = parseFloat(prompt('Ingrese el peso de la bolsa ' + (i + 1) + ' en kg'));
    i++;
} while(i < 6);
document.write('Pesos: ' + pesos.join(' / ') + '<br>');

var sumaTotal = pesos.reduce((acumulador, peso) => acumulador + peso, 0);
document.write('El peso total de las bolsas es: ' + sumaTotal.toFixed(2) + ' kg');