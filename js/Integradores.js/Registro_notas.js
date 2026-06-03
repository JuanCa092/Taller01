let notas = [4.0, 3.5, 2.8, 4.5, 3.7];

let suma = 0;

for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
}

let promedio = suma / notas.length;

console.log("Promedio:", promedio);

if (promedio >= 3) {
    console.log("Estado: Aprobado");
} else {
    console.log("Estado: Reprobado");
}