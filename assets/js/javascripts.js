
function calcularSueldoFinal(sueldoBasico, descuentos, presentismo, premio) {
    let descuentoTotal = descuentos.reduce((total, descuento) => total + descuento, 0);
    let sueldoFinal = sueldoBasico + presentismo + premio - descuentoTotal;

    console.log("Descuentos: $" + descuentoTotal);
    console.log("Sueldo Final: $" + sueldoFinal);
  }
  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const numeroDeEmpleados = parseInt(document.querySelector("#numero-empleados").value);
    const empleadosDiv = document.querySelector("#empleados");
    empleadosDiv.innerHTML = "";

    for (let i = 0; i < numeroDeEmpleados; i++) {
      const sueldoBasico = parseFloat(prompt(`Ingrese sueldo básico del empleado ${i+1}:`));
      const descuentos = [];
      descuentos.push(parseFloat(prompt("Ingrese el descuento de jubilación:")));
      descuentos.push(parseFloat(prompt("Ingrese el descuento de obra social:")));
      descuentos.push(parseFloat(prompt("Ingrese otros descuentos adicionales (en caso de no haber, ingrese 0):")));
      const presentismo = parseFloat(prompt(`Ingrese presentismo del empleado ${i+1}:`));
      const premio = parseFloat(prompt(`Ingrese premio del empleado ${i+1}:`));
      const empleadoDiv = document.createElement("div");
      empleadoDiv.innerHTML = `<h2>Empleado ${i+1}</h2>
                                <p>Sueldo básico: ${sueldoBasico}</p>
                                <p>Descuentos: ${descuentos.reduce((total, descuento) => total + descuento, 0)}</p>
                                <p>Presentismo: ${presentismo}</p>
                                <p>Pago del premio: ${premio}</p>
                                <p>Sueldo Final:${(sueldoBasico+premio+presentismo)-(descuentos.reduce((total, descuento) => total + descuento, 0))}</p>`;
       empleadosDiv.appendChild(empleadoDiv);
      
    }
  });
