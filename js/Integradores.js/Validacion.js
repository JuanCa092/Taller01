let contraseña = "abc12345";

let tieneNumero = false;

for (let i = 0; i < contraseña.length; i++) {

    if (
        contraseña[i] >= "0" &&
        contraseña[i] <= "9"
    ) {
        tieneNumero = true;
    }
}

if (contraseña.length >= 8 && tieneNumero) {
    console.log("Contraseña válida");
} else {
    console.log("Contraseña inválida");
}