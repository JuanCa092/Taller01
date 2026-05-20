let numDigitos = 45289;
let copiaNum = Math.abs(numDigitos);
let contadorDigitos = 0;

if (copiaNum === 0) {
    contadorDigitos = 1;
}

while (copiaNum > 0) {
    contadorDigitos++;
    copiaNum = Math.floor(copiaNum / 10);
}

console.log(`El número ${numDigitos} tiene ${contadorDigitos} dígitos.`);