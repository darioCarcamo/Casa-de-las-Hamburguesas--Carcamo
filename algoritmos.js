// ***************   Declaración de variables *************
let contadorPedidos = 0;
let cuentaPedidoParcial = 0;
let cuentaPedidoTotal = 0;

// ***************   Objetos   **************
const cliente1 = {
  nombre: "",
  edad: 00,
  telefono: 0,
};
cliente1["nombre"] = "Pablo";
cliente1.edad = 40;
cliente1.telefono = 2994677396;
console.log(cliente1.nombre);
console.log(cliente1.edad);
console.log(cliente1.telefono);

// ***************   Declaracion de function **************

function saludar() {
  alert("Hola " + nombre1 + " 😎!!");
}

alert("Bienvenido a la casa de la Hamburguesas. 🍔🍟🍿🥤");
let nombre1 = prompt("Por favor ingrese su nombre:");

saludar();
alert(
  "Sabias " +
    nombre1 +
    " que por elegirnos participas por increibles premios? Bueno, si no lo sabias te doy esa gran noticia, al final de la compra te pediremos algunos datos para poder contactarnos en caso de que hayas resultado ganador."
);
let entradaDatos = prompt("¿Estas listo para ordenar? Si = 1 - Cancelar = 2");

if (entradaDatos == 1) {
  alert("Te mostramos nuestra carta disponible");
  let pedido = parseInt(
    prompt(
      "Seleccionar 1 para el combo DOBLE CUARTO $960,00 - Seleccionar 2 para el combo CHEESE BURGUER $1060,00 - Seleccionar 3 para el combo MEGA BACON $1190;00"
    )
  );

  while (pedido > 0) {
    if (pedido == 1) {
      console.log("Gran elección, seleccionaste el combo DOBLE CUARTO.");
      cuentaPedidoParcial = cuentaPedidoParcial + 960;
    } else if (pedido == 2) {
      console.log("Excelente elección, seleccionaste el combo CHEESE BURGER.");
      cuentaPedidoParcial = cuentaPedidoParcial + 1060;
    } else {
      pedido == 3;
      console.log("Wow! deliciosa elección, seleccionaste el combo MEGA BACON");
      cuentaPedidoParcial = cuentaPedidoParcial + 1190;
    }
    contadorPedidos = contadorPedidos + 1;
    cuentaPedidoParcial = cuentaPedidoTotal + cuentaPedidoParcial;

    console.log("Cantidad de item: " + contadorPedidos);
    console.log("Cuanta parcial a pagar: $" + cuentaPedidoParcial + ",00");

    let agregar = parseInt(
      prompt(
        "Deseas " + nombre1 + " seguir agregando a tu pedido? Si = 1 - No = 2 "
      )
    );
    if (agregar == 1) {
      pedido = parseInt(
        prompt(
          "Seleccionar 1 para el combo DOBLE CUARTO $960,00 - Seleccionar 2 para el combo CHEESE BURGUER $1060,00 - Seleccionar 3 para el combo MEGA BACON $1190;00 - Seleccionar Esc para seleccionar el pedido."
        )
      );
    } else {
      agregar == 2;
      console.log("Perfecto " + nombre1 + " cerramos el pedido.");
      console.log("Total de items: " + contadorPedidos);
      cuentaPedidoTotal = cuentaPedidoParcial;
      console.log("Total a pagar : $" + cuentaPedidoTotal + ",00");
      break;
    }
  }
  let seccionPago = parseInt(
    prompt(
      "Como desea abonar? Efectivo = 1 (10% descuento) - Tarjeta Debito = 2 (sin descuento/recargo) - Tarjeta Credito = 3 (con recargo 10%)"
    )
  );
  if (seccionPago == 1) {
    pagoEfectivo = cuentaPedidoTotal - cuentaPedidoTotal * 0.1;
    console.log("El total a pagar en efectivo es : $" + pagoEfectivo);
    console.log("Gracias por elegirnos, que lo disfrutes!");
  } else if (seccionPago == 2) {
    pagoTarjDebito = cuentaPedidoTotal;
    console.log(
      "El total a pagar con tarjeta de débito es: $" + pagoTarjDebito
    );
    console.log("Gracias por elegirnos, que lo disfrutes!");
  } else {
    seccionPago == 3;
    pagoTarjCred = cuentaPedidoTotal + cuentaPedidoTotal * 0.1;
    console.log("El total a pagar es $" + pagoTarjCred);
    console.log("Gracias por elegirnos, que lo disfrutes!");
  }
} else {
  entradaDatos == 2;
  console.log("Se cancelo la orden " + nombre1 + ", te esperamos pronto!");
}
