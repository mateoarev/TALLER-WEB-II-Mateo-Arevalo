var alumnos = ["Juan", "María", "Lucía", "Carlos", "Ana", "Luis", "Sofía", "Miguel", "Elena", "Raúl"];
var curso = "5°3";

var alumnosConCurso = alumnos.map((alumno) => `${curso} - ${alumno}`);
console.log(alumnosConCurso);