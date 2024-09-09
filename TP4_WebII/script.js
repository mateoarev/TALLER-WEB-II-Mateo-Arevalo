var precios = [150, 230, 340, 460, 200, 500, 345, 410];
document.write('Precios originales: ' + precios.join(' / ') + '<br><br>');

var preciosConAumento = precios.map(precio => (precio * 1.15).toFixed(2));
document.write('a. Precios con aumento del 15%: ' + preciosConAumento.join(' / ') + '<br>');

var precioIgual230 = preciosConAumento.filter(precio => precio == 230);
document.write('b. Precios iguales a 230: ' + precioIgual230.join(' / ') + '<br>');

var preciosEntre300y500 = preciosConAumento.filter(precio => precio >= 300 && precio <= 500);
document.write('c. Precios entre 300 y 500: ' + preciosEntre300y500.join(' / ') + '<br>');

var preciosMayores400 = preciosConAumento.filter(precio => precio > 400);
document.write('d. Precios mayores a 400: ' + preciosMayores400.join(' / ') + '<br>');

var preciosMenores200 = preciosConAumento.filter(precio => precio < 200);
document.write('e. Precios menores a 200: ' + preciosMenores200.join(' / ') + '<br>');

var preciosDistintos345 = preciosConAumento.filter(precio => precio !== 345);
document.write('f. Precios distintos a 345: ' + preciosDistintos345.join(' / ') + '<br>');

var preciosNo460 = preciosConAumento.filter(precio => precio !== 460);
document.write('g. Precios que no son 460: ' + preciosNo460.join(' / ') + '<br>');

var preciosMayores500oMenores200 = preciosConAumento.filter(precio => precio > 500 || precio < 200);
document.write('h. Precios mayores a 500 o menores a 200: ' + preciosMayores500oMenores200.join(' / ') + '<br>');

var preciosIguales345 = preciosConAumento.filter(precio => precio == 345);
document.write('i. Precios iguales a 345: ' + preciosIguales345.join(' / '));