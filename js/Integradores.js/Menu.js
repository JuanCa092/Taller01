let productos = [];

// Agregar
productos.push("Teclado");
productos.push("Mouse");

// Listar
console.log("Listado:");
console.log(productos);

// Actualizar
productos[0] = "Teclado Gamer";

// Eliminar
productos.splice(1, 1);

console.log("Resultado final:");
console.log(productos);