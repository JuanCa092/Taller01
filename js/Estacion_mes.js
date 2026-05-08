let mes = 7

if (!mes === 12 || mes === 1 || mes === 2) {
    console.log("Es invierno");
} else if ( mes >= 3 && mes < 6) {
    console.log("Es primavera");
} else if (mes >= 6 && mes < 9) {
    console.log("Es verano");
} else if (mes >= 9 && mes < 12) {
    console.log("Es otoño");
} else {
    console.log("Mes no válido");
}