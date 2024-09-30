const empleado = {
    nombre: "Abigaíl",
    edad: 21,
    puesto: "Desarrolladora",
    salario: 600000,
    mostrarInfo: function() {
        console.log(`Empleado: ${this.nombre}, Edad: ${this.edad}, Puesto: ${this.puesto}, Salario: ${this.salario}`);
    },
    aumentarSalario: function(porcentaje) {
        this.salario += this.salario * (porcentaje / 100);
        console.log(`El nuevo salario es: ${this.salario}`);
    }
};

empleado.mostrarInfo();
empleado.aumentarSalario(10);
empleado.mostrarInfo();