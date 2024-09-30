const libro = {
    titulo: "Dune",
    autor: "Frank Herbert",
    anioPublicacion: 1965,
    genero: "Ciencia ficción",
    disponible: true,
    mostrarInfo: function() {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Año: ${this.anioPublicacion}, Género: ${this.genero}, Disponible: ${this.disponible}`);
    },
    prestar: function() {
        this.disponible = false;
        console.log("El libro ha sido prestado.");
    },
    devolver: function() {
        this.disponible = true;
        console.log("El libro ha sido devuelto.");
    }
};

libro.mostrarInfo();
libro.prestar();
libro.mostrarInfo();
libro.devolver();
libro.mostrarInfo();