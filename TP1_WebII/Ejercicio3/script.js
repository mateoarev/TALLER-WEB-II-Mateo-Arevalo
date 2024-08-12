var arregloJugadores = ['Lionel Messi', 'Alejandro Garnacho', 'Lautaro Martínez', 'Julián Álvarez', 'Lisando Martínez'];
document.write(arregloJugadores.join(', ') + '<br>');

arregloJugadores.unshift('Enzo Fernández'); // Agrega un nombre al principio del arreglo
document.write(arregloJugadores.join(', ') + '<br>');

arregloJugadores.pop(); // Elimina el último elemento del arreglo
document.write(arregloJugadores.join(', '));