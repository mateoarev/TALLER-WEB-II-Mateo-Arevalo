const coche = {
    marca: "Toyota",
    modelo: "Camry",
    anio: 2021,
    mostrarInfo: function() {
        console.log(`Coche: ${this.marca} ${this.modelo}, Año: ${this.anio}`);
    },
    actualizar: function(nuevaMarca, nuevoModelo, nuevoAnio) {
        this.marca = nuevaMarca;
        this.modelo = nuevoModelo;
        this.anio = nuevoAnio;
    }
};

coche.mostrarInfo();
coche.actualizar("Toyota", "RAV4", 2021);
coche.mostrarInfo();