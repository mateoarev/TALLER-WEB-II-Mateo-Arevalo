const libro = {
    titulo: "Dune",
    autor: "Frank Herbert",
    anioPublicacion: 1965,
    genero: "Ciencia ficción",
    disponible: true,
    get info() {
        return `Título: ${this.titulo}, Autor: ${this.autor}, Año: ${this.anioPublicacion}, Género: ${this.genero}, Disponible: ${this.disponible}`;
    },
    set prestar(valor) {
        if (valor) {
            this.disponible = true;
            console.log("El libro se ha devuelto.");
        } else {
            this.disponible = false;
            console.log("El libro ha sido prestado.");
        }
    }
};

console.log(libro.info);
libro.prestar = false; // Se presta el libro
console.log(libro.info);
libro.prestar = true; // Se devuelve el libro
console.log(libro.info);