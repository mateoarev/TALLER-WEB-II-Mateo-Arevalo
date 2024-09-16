const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var x = 7;
document.write('<h3>Tabla del N°: ' + x + '</h3>');

numeros.forEach(num => document.write(x + ' * ' + num + ' = ' + (x * num) + '<br>'));