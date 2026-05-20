let numOriginal = 12345;
let numeroParaInvertir = Math.abs(numOriginal);
let numeroInvertido = 0;

while (numeroParaInvertir > 0) {
    let ultimoDigito = numeroParaInvertir % 10;
    numeroInvertido = (numeroInvertido * 10) + ultimoDigito;
    numeroParaInvertir = Math.floor(numeroParaInvertir / 10);
}

if (numOriginal < 0) {
    numeroInvertido = -numeroInvertido;
}

console.log(`El número original es ${numOriginal} y el invertido es: ${numeroInvertido}`);