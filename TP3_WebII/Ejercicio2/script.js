var notas = [7.5, 8.0, 6.5, 9.0, 5.5, 7.0, 8.5, 6.0, 7.8, 8.2, 6.9, 7.3];
document.write('Notas: ' + notas.join(' ') + '<br>');

var suma = notas.map((elem => elem + 2.50));
document.write('Notas actualizadas: ' + suma.join(' '));