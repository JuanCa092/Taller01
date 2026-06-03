let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let fila = 0; fila < matriz.length; fila++) {

    let texto = "";

    for (let columna = 0; columna < matriz[fila].length; columna++) {
        texto += matriz[fila][columna] + " ";
    }

    console.log(texto);
}