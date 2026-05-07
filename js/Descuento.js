let compra = 120000

if (compra > 10000) {
    let descuento = compra * 0.10;
    let total = compra - descuento;

    console.log("El descuento es: " + descuento);
    console.log("El total a pagar es: " + total);
} else {
    console.log("No se aplica descuento. El total a pagar es: " + compra);
}