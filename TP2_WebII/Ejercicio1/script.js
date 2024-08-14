var nombres = [];

for (let i = 0; i < 10; i++) {
    nombres[i] = prompt('Ingrese un nombre');
    nombres.sort();
}
console.log(nombres);