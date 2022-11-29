const usuarioAutorizado = "Coderuser";
const passwordAutorizado = "coderhouse";

let usuarioIngresado = prompt("Por favor ingrese su nombre de usuario");
let passwordIngresado = prompt("Ingrese su contraseña");

for(let i = 0; i <= 2 ; i++) {
    if(usuarioIngresado === usuarioAutorizado && passwordIngresado === passwordAutorizado) {
        alert("Los datos ingresados son correctos, puede continuar");
        operaciones();
        break;
    }else if (i < 2) {
        alert("No se reconocen los datos ingresados.\nPor favor reviselos e intentelo nuevamente.");
        usuarioIngresado = prompt("Por favor ingrese su nombre de usuario");
        passwordIngresado = prompt("Ingrese su contraseña");
        if(usuarioIngresado === usuarioAutorizado && passwordIngresado === passwordAutorizado) {
            alert("Los datos ingresados son correctos, puede continuar");
            operaciones();
            break;
        }
    }else if (i === 2) {
        alert ("Supero el limite de intentos para ingresar.\nPor lo tanto el usuario ha sido bloqueado.");
    }
}


function operaciones() {
    let saldoCuenta = 85000;

    let movimiento = prompt("Bienvenido! Escriba el tipo de operacion que desea realizar.\n\n1)Consultar saldo.\n2)Extraer dinero.\n3)Despositar dinero.");
    
    while (movimiento != "cancelar") {
        switch (movimiento) {
            case "1":
                alert ("Actualmente su saldo disponible es de $"+ saldoCuenta);
                break;
            case "2":
                let extraccion = parseFloat(prompt("Ingrese el monto de deseas extraer:"));
                while(isNaN(extraccion)){
                    extraccion = parseFloat(prompt("Solo se permiten números. Escriba el valor de Ingreso: "));
                };
                alert ("Extraccion exitosa! Su saldo actual es de $" + (saldoCuenta - extraccion));
                break;
            case "3":
                let deposito = parseFloat(prompt("Ingrese el monto que desea depositar:"));
                while(isNaN(deposito)){
                    deposito = parseFloat(prompt("Solo se permiten números. Escriba el valor de Ingreso: "));
                };
                alert ("Deposito exitoso! Su saldo actual es de $" + (saldoCuenta + deposito));
                break;
            default:
                alert ("Opcion inexistente, por favor ingrese una opcion valida.");
                break;
        }
        movimiento = prompt("Bienvenido! Escriba el tipo de operacion que desea realizar.\n\n1)Consultar saldo.\n2)Extraer dinero.\n3)Despositar dinero.");
    }
}

