var numeros = [];
for (let i = 0; i < 10; i++) {
    numeros[i] = Math.floor(Math.random() * 10);
}
document.write('Números: ' + numeros.join(' ') + '<br>');

var numerosAlCubo = numeros.map((elem) => Math.pow(elem, 3));
document.write('Números elevados al cubo: ' + numerosAlCubo.join(' '));