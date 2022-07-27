// *******************************************  Declaración de variables *************
let contadorPedidos = 0;
let cuentaPedidoParcial = 0;
let cuentaPedidoTotal = 0;
let valorCajasorpresa = 250;
let pagoEfectivo = 0;
let pagoTarjDebito = 0;
let pagoTarjCred = 0;
let agregarCombo = 0;
let valorPrecioParcial = 0;

// *******************************************   Declaracion de function **************

function saludar() {
  alert("Hola " + nombre1 + " 😎!!");
}

function agregarCajitaSorpresa(
  agregarCombo,
  array,
  cuentaPedidoParcial,
  valorCajasorpresa,
  array
) {
  if (agregarCombo == 1) {
    // Uso del array para agregar o no producto a la lista
    array.push(" Cajita sorpresa.");
    console.log(
      "Perfecto! Agregamos la cajita sorpresa, la orden de esté combo queda así: " +
        array
    );
    valorPrecioParcial = cuentaPedidoParcial + valorCajasorpresa;
  } else {
    agregarCombo == 2;
    console.log("Perfecto! No se agregó cajita sorpresa!");
    array.pop("Cajita sorpresa.");
    console.log("Esté combo queda compuesto por : " + array);
  }
}

function despedir() {
  console.log(
    "Ya podes pasar por caja y retirar tu orden, gracias por elegirnos 💖"
  );
}
function totalAPagarFinal(mediodepago) {
  console.log("El total a pagar es: $" + mediodepago);
}

//******************************************** Declaracion de Clases *************************
class Combos {
  Combos(nombre, cantIngredientes, tamaño, cantItemTotalxCombo) {
    this.nombre = nombre.toUpperCase();
    this.cantIngredientes = cantIngredientes;
    this.tamaño = tamaño;
    this.cantItemTotalxCombo = cantItemTotalxCombo;
  }
}

//******************************************** Declaración de Objetos ****************
// Combo 1 Doble cuarto
const combo1 = new Combos({
  nombre: "Doble cuarto",
  cantIngredientes: 5,
  tamaño: "Mediana",
  cantItemTotalxCombo: 7,
});
console.log(combo1.nombre);

// Combo 2 Cheese burger
const combo2 = new Combos({
  nombre: "Cheese burger",
  cantIngredientes: 7,
  tamaño: "Mediana",
  cantItemTotalxCombo: 9,
});

// Combo 3 Mega bacon
const combo3 = new Combos({
  nombre: "Doble cuarto",
  cantIngredientes: 8,
  tamaño: "Grande",
  cantItemTotalxCombo: 10,
});

//******************************************** Declaración de Arrays ******************
// Combo1 Doble cuarto
//Ingredientes Combo1 Doble hamburguesa con queso cheddar, barbacoa, pepino y cebolla. Acompañada con papas fritas y gaseosa a elección chica
const arrayCombo1ingredientes = [
  "Doble de hamburguesas",
  " queso cheddar",
  " barbacoa",
  " pepino",
  " cebolla",
  " papas fritas",
  " gaseosa chica",
];

// Combo2 Chesse burger
//Ingredientes Doble hamburguesa con extra queso cheddar,  barbacoa, pepino, cebolla caramelizada, salsa big eme y lechuga rallada. Acompañada con papas fritas y gaseosa a elección chica
const arrayCombo2ingredientes = [
  "Doble de hamburguesas",
  " extra queso cheddar",
  " barbacoa",
  " pepino",
  " cebolla caramelizada",
  " salsa eme",
  " lechuga rallada",
  " papas fritas",
  " gaseosa chica",
];

// Combo3 Mega bacon
//Ingredientea Doble hamburguesa con extra queso cheddar, bacon,  barbacoa, pepino, cebolla caramelizada, salsa big eme y lechuga rallada. Acompañada con papas fritas y gaseosa a elección chica
const arrayCombo3ingredientes = [
  " Doble de hamburguesas",
  " bacon",
  " barbacoa",
  " pepino",
  " cebolla caramelizada",
  " salsa big eme",
  " lechuga rallada",
  " papas fritas",
  " gaseosa chica",
];

// ******************************************** COMIENZO DE ALGORITMO     *****************

// alert("Bienvenido a la casa de la Hamburguesas. 🍔🍟🍿🥤");
// let nombre1 = prompt("Por favor ingrese su nombre:");

// saludar();
// let entradaDatos = prompt("¿Estas listo para ordenar? Si = 1 - Cancelar = 2");

if (entradaDatos == 1) {
  alert("Te mostramos nuestra carta disponible");
  alert("Combo 1 $960,00 " + arrayCombo1ingredientes);
  alert("Combo 2 $1060,00 " + arrayCombo2ingredientes);
  alert("Combo 3 $1190,00 " + arrayCombo3ingredientes);

  let pedido = parseInt(
    prompt(
      "Seleccionar 1 = DOBLE CUARTO |1 Seleccionar 2 = CHEESE BURGER || Seleccionar 3 = MEGA BACON $1190;00"
    )
  );

  while (pedido > 0) {
    if (pedido == 1) {
      console.log("Gran elección, seleccionaste el combo DOBLE CUARTO.");
      cuentaPedidoParcial = cuentaPedidoParcial + 960;
      let agregarCombo = prompt(
        "Desea agregar cajita sorpresa al combo por $250,00?  Si = 1 || No = 2"
      );

      //*** Función para saber si agrega o no cajita sorpresa?
      agregarCajitaSorpresa(
        agregarCombo,
        arrayCombo1ingredientes,
        cuentaPedidoParcial,
        valorCajasorpresa,
        arrayCombo1ingredientes
      );
    } else if (pedido == 2) {
      console.log("Excelente elección, seleccionaste el combo CHEESE BURGER.");
      cuentaPedidoParcial = cuentaPedidoParcial + 1060;
      let agregarCombo = prompt(
        "Desea agregar cajita sorpresa al combo por $250,00?  Si = 1 || No = 2"
      );
      //*** Función para saber si agrega o no cajita sorpresa?
      agregarCajitaSorpresa(
        agregarCombo,
        arrayCombo2ingredientes,
        cuentaPedidoParcial,
        valorCajasorpresa,
        arrayCombo2ingredientes
      );
    } else {
      pedido == 3;
      console.log("Wow! deliciosa elección, seleccionaste el combo MEGA BACON");
      cuentaPedidoParcial = cuentaPedidoParcial + 1190;
      let agregarCombo = prompt(
        "Desea agregar cajita sorpresa al combo por $250,00?  Si = 1 || No = 2"
      );
      //*** Función para saber si agrega o no cajita sorpresa?
      agregarCajitaSorpresa(
        agregarCombo,
        arrayCombo3ingredientes,
        cuentaPedidoParcial,
        valorCajasorpresa,
        arrayCombo3ingredientes
      );
    }
    contadorPedidos = contadorPedidos + 1;
    cuentaPedidoParcial = valorPrecioParcial;

    console.log("Cantidad de item: " + contadorPedidos);
    console.log("Subtotal: $" + cuentaPedidoParcial + ",00");

    let agregar = parseInt(
      prompt(
        "Deseas " +
          nombre1 +
          " seguir agregando combos a tu pedido? Si = 1 - No = 2 "
      )
    );
    if (agregar == 1) {
      pedido = parseInt(
        prompt(
          "Seleccionar 1 = DOBLE CUARTO |1 Seleccionar 2 = CHEESE BURGER || Seleccionar 3 = MEGA BACON $1190;00"
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
    totalAPagarFinal(pagoEfectivo);
    despedir();
  } else if (seccionPago == 2) {
    pagoTarjDebito = cuentaPedidoTotal;
    totalAPagarFinal(pagoTarjDebito);
    despedir();
  } else {
    seccionPago == 3;
    pagoTarjCred = cuentaPedidoTotal + cuentaPedidoTotal * 0.1;
    totalAPagarFinal(pagoTarjCred);
    despedir();
  }
} else {
  entradaDatos == 2;
  console.log("Se cancelo la orden " + nombre1 + ", te esperamos pronto!");
}
