let numeros = [4, -3, 8, 0, -12, 15, -1];
let positivos = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
        positivos++;
    }
}

console.log(`En la lista hay ${positivos} números positivos.`);