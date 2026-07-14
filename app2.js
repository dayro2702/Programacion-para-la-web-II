function saludarUsuario (nombre) {
    console.log(`Hola, ${nombre}`);
}

saludarUsuario("Ana");
saludarUsuario("pepito");

function calcularPrecio (precio) {
    let impuesto = precio * 0.19;
    let total = precio + impuesto;

    return total;
}

let precioComputador = calcularPrecio(2500000);
let precioMouse = calcularPrecio(100000);
console.log(`Pagaras en total: $${precioComputador + precioMouse}`);

//Funcion clasica
const multiplicarClasica = function (a, b){
    return a * b;
}
//Funcion flecha (Arrow Function)
const multiplicarFlecha = (a, b) => {
    return a * b;
}
//Funcion flecha optimizada
const multiplicarOptimizada = (a, b) => a * b;
console.log(multiplicarOptimizada(5, 5));