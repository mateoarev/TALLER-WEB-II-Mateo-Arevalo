const jugador = {
    nombre: "Damián Emiliano Martínez",
    edad: 32,
    equipo: "Aston Villa",
    posicion: "Arquero",
    get datos() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Equipo: ${this.equipo}, Posición: ${this.posicion}`;
    },
    set calcularEdad(actualidad) {
        const edadEn2027 = this.edad + (2027 - actualidad);
        console.log(`Edad en 2027: ${edadEn2027} años`);
    }
};

console.log(jugador.datos);
jugador.calcularEdad = 2024;