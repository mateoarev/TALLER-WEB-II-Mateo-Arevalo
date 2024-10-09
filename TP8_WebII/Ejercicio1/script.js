const album = {
    artista: "Cigarettes After Sex",
    titulo: "Cigarettes After Sex",
    anio: 2017,
    genero: "Dream pop",
    get info() {
        return `Artista: ${this.artista}, Álbum: ${this.titulo}, Año: ${this.anio}, Género: ${this.genero}`;
    },
    set actualizar(nuevoTitulo) {
        this.titulo = nuevoTitulo;
        console.log(`El álbum se actualizó a: ${this.titulo}`);
    }
};

console.log(album.info);
album.actualizar = "Cry";