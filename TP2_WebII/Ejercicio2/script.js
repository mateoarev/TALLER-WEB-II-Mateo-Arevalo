var numeros = [];

for (let i = 0; i < 15; i++) {
    numeros[i] = prompt('Ingrese un número');
    numeros.sort((a, b) => a - b);
}
console.log(numeros);