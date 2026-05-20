let terminos = 10;
let a = 0, b = 1;
let serie = [];

for (let i = 1; i <= terminos; i++) {
    serie.push(a);
    let siguiente = a + b;
    a = b;
    b = siguiente;
}

console.log(`Serie Fibonacci (${terminos} términos):`, serie.join(", "));