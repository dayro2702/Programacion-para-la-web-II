let saldo = 5000;
let continuar = true;

while (continuar) {
    let opcion = prompt(`
        ---Bienvenido al cajero---
        Saldo disponible: $${saldo}
        
        1. Ver saldo
        2. Retirar dinero
        3.Salir
        
        Escriba el numero de la opcion:
        `);

    switch (opcion) { /*if*/
        case "1":
            alert(`Su saldo actual es: $${saldo}`)
            break;
        case "2":
            let retiro = Number(prompt("Cuanto desea retirar?"));
                
            if (retiro > saldo){
                alert("Fondos insuficientes");
            } else if (retiro <= 0) {
                alert("Por favor ingrese un monto valido");
            } else {
                saldo = saldo - retiro;
                alert(`Retiro exitoso, su nuevo saldo $${saldo}`);
            }
            break;
        case "3":
            alert("Gracias por usar nuestros servicios");
            continuar = false;
            break;
        default:
            alert("opcion no valida");
            break;
    }
}

console.log("Sesion finalizada. ");