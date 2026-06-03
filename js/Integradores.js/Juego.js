let numeroSecreto = 7;

let intentos = [3, 5, 8, 7, 2];

let ganado = false;

for (let i = 0; i < 5; i++) {

    if (intentos[i] === numeroSecreto) {

        console.log(
            "Ganó en el intento " +
            (i + 1)
        );

        ganado = true;
        break;
    }
}

if (!ganado) {
    console.log("Perdió");
}