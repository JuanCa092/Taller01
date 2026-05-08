let num1 = 6
let num2 = 3
let num3 = 9

let numeros = [num1, num2, num3]

numeros.sort(function(a, b) {
    return a - b;
})

console.log("Numeros en orden ascendente: ");
console.log(numeros);