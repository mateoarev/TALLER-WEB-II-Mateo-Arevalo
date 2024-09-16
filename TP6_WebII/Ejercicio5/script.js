// Diferencia entre map y forEach
// forEach recorre el arreglo y ejecuta una función para cada elemento, pero no retorna un nuevo arreglo.
// map también recorre el arreglo, pero retorna un nuevo arreglo con los elementos transformados.

const numeros = [1, 2, 3, 4, 5];

// Ejemplo de forEach:
numeros.forEach(num => document.write(num * 2 + '<br>'));

// Ejemplo de map:
const numerosDuplicados = numeros.map(num => num * 2);
document.write('Nuevos valores con map: ' + numerosDuplicados.join(', '));