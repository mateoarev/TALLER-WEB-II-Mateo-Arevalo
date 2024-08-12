var arregloEdades = ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
document.write(arregloEdades.join(', ') + '<br>');

// Elimina los primeros cinco elementos del arreglo usando shift() cinco veces
arregloEdades.shift();
arregloEdades.shift();
arregloEdades.shift();
arregloEdades.shift();
arregloEdades.shift();
document.write(arregloEdades.join(', '));