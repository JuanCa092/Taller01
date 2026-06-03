let votos = [
    "Juan",
    "Ana",
    "Juan",
    "Carlos",
    "Juan",
    "Ana"
];

let juan = 0;
let ana = 0;
let carlos = 0;

for (let i = 0; i < votos.length; i++) {

    if (votos[i] === "Juan") {
        juan++;
    }
    else if (votos[i] === "Ana") {
        ana++;
    }
    else if (votos[i] === "Carlos") {
        carlos++;
    }
}

console.log("Juan:", juan);
console.log("Ana:", ana);
console.log("Carlos:", carlos);

if (juan > ana && juan > carlos) {
    console.log("Ganador: Juan");
}
else if (ana > juan && ana > carlos) {
    console.log("Ganador: Ana");
}
else if (carlos > juan && carlos > ana) {
    console.log("Ganador: Carlos");
}
else {
    console.log("Empate");
}