var arregloEstatura = [1.60, 1.61, 1.62, 1.63, 1.64, 1.65, 1.66, 1.67, 1.68, 1.69];
document.write(arregloEstatura.join(', ') + '<br>');

arregloEstatura.push(1.70);
document.write(arregloEstatura.join(', ') + '<br>');

// Elimina los tres últimos elementos del arreglo usando pop() tres veces
arregloEstatura.pop();
arregloEstatura.pop();
arregloEstatura.pop();
document.write(arregloEstatura.join(', '));