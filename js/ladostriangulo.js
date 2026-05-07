let lado1 = 23
let lado2 = 23
let lado3 = 23

if (lado1 === lado2 && lado2 === lado3) {
    console.log("El triángulo es equilátero.");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("El triángulo es isósceles.");
} else {
    console.log("El triángulo es escaleno.");
}

