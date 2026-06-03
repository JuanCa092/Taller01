let carrito = [
    { producto: "Mouse", precio: 50000 },
    { producto: "Teclado", precio: 120000 },
    { producto: "Monitor", precio: 800000 }
];

let total = 0;

for (let i = 0; i < carrito.length; i++) {

    total += carrito[i].precio;

    console.log(
        carrito[i].producto +
        " - $" +
        carrito[i].precio
    );
}

console.log("Total: $" + total);