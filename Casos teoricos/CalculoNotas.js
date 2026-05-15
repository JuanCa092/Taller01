const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntar(texto) {
    return new Promise((resolve) => {
        rl.question(texto, resolve);
    });
}

async function sistemaNotas() {

    let cantidadEstudiantes = parseInt(
        await preguntar("Ingrese cantidad de estudiantes: ")
    );

    for (let i = 0; i < cantidadEstudiantes; i++) {

        console.log(`\nEstudiante ${i + 1}`);

        let nombre = await preguntar("Ingrese nombre: ");

        let cantidadNotas = parseInt(
            await preguntar("Ingrese cantidad de notas: ")
        );

        let suma = 0;

        for (let j = 0; j < cantidadNotas; j++) {

            let nota;

            do {

                nota = parseFloat(
                    await preguntar(`Ingrese nota ${j + 1}: `)
                );

                if (nota < 0 || nota > 5) {
                    console.log("Error: la nota debe estar entre 0 y 5");
                }

            } while (nota < 0 || nota > 5);

            suma += nota;
        }

        let promedio = suma / cantidadNotas;

        console.log(`Promedio de ${nombre}: ${promedio.toFixed(2)}`);

        if (promedio >= 3.5) {
            console.log("Estado: APRUEBA");
        } else {
            console.log("Estado: REPRUEBA");
        }
    }

    rl.close();
}

sistemaNotas();