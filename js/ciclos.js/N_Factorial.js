let numFactorial = 5;
let factorial = 1;

for (let i = 1; i <= numFactorial; i++) {
    factorial *= i;
}

console.log(`El factorial de ${numFactorial} es: ${factorial}`);