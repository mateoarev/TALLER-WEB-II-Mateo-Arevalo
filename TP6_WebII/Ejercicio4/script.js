const edades = [25, 30, 35, 40, 45];
document.write('<h3>Edades seis años atras</h3>');

edades.forEach(edad => document.write('Hace seis años tenías: ' + (edad - 6) + ' años<br>'));