let numeroSecreto = 6;
let intentosDelUsuario = [2, 8, 4, 6];

for (let i = 0; i < intentosDelUsuario.length; i++) {
    let intento = intentosDelUsuario[i];
    console.log(`Usuario intenta con el número: ${intento}`);

    if (intento === numeroSecreto) {
        console.log("¡Felicidades! Acertaste el número.");
        break; 
    } else if (intento < numeroSecreto) {
        console.log("Pista: El número secreto es MAYOR.");
    } else {
        console.log("Pista: El número secreto es MENOR.");
    }
}