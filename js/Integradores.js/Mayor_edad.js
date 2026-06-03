let usuarios = [
    { nombre: "Juan", edad: 18 },
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 16 }
];

for (let i = 0; i < usuarios.length; i++) {

    if (usuarios[i].edad >= 18) {
        console.log(usuarios[i].nombre);
    }
}