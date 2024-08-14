var numeros = [];

for (let i = 0; i < 10; i++) {
    numeros[i] = Math.floor(Math.random() * 10);
    numeros.sort((a, b) => a - b);
}
console.log(numeros);