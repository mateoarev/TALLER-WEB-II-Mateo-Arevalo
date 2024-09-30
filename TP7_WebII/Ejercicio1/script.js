const persona = {
    nombre: "María",
    edad: 30,
    profesion: "Ingeniera",
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`);
    }
};

persona.saludar();