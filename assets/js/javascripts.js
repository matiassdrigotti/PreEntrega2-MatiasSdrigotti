alert("Buenas, esta es la calculadora de Matias Sdrigotti")

let nombreIngresado = String (prompt("Ingresar nombre"));
let apellidoIngresado = String (prompt("Ingresa apellido"));

if (nombreIngresado && apellidoIngresado){
    alert ("Nombre: " + nombreIngresado + " Apellido: " + apellidoIngresado)

    let primerNumero = Number (prompt("ingrese el primer numero"));
    let segundoNumero = Number (prompt("ingrese el segundo numero"));
    let operacion = prompt("ingrese operacion ( +, -, /, * ");


    function calculadora (primerNumero , segundoNumero , operacion){
        switch(operacion){
            case "+":
                return primerNumero + segundoNumero;
                break;
            case "-":
                return primerNumero - segundoNumero;
                break;
            case "*":
                return primerNumero * segundoNumero;
                break;
            case "/":
                return primerNumero / segundoNumero;
                break;
            default:
                return 0;
                break;                               
        }
    }
       
    let resultado = calculadora(primerNumero,segundoNumero, operacion);
    console.log (resultado);
  
    let dias = [ "Lunes: ", "Martes: ", "Miercoles: ", "Jueves: ", "Viernes: ", "Sabado: ", "Domingo: " ]
   
    for ( i = 0 ; i <= dias.length - 1 ; i++) {

        document.write( dias[i] + resultado + "<br>");
    }
    
}

else {
    alert("Error: Ingresar nombre y apellido ")
}




