// Arreglos para almacenar las frutas según su tipo
var arregloFrutasCitricas = [];
var arregloFrutasPepitas = [];

// Contador para controlar el número de frutas ingresadas
var cont = 0;

do {
    var fruta = prompt('Ingrese una fruta');
    var tipo = prompt('Ingrese el tipo de fruta (cítrico o pepita)').toLowerCase(); // Acepta mayúsculas o minúsculas

    if (tipo == 'cítrico') {
        arregloFrutasCitricas.push(fruta);
        cont++; // Incrementa el contador
    } else if (tipo == 'pepita') {
        arregloFrutasPepitas.unshift(fruta);
        cont++; // Incrementa el contador
    } else {
        alert('Tipo de fruta no válido')
    }
} while (cont < 5); // Se repite hasta que se ingresen 5 frutas

document.write('Frutas cítricas: ' + arregloFrutasCitricas.join(', ') + '<br>');
document.write('Frutas con pepitas: ' + arregloFrutasPepitas.join(', '));