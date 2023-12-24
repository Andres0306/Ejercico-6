var ventasVendedor1 = [0, 0, 0, 0];

// Nombres de los productos y sus precios
var productos = ["Aqua", "Emoción", "Alegría", "Frescura"];
var precios = [200, 180, 160, 150];

// Función para registrar ventas
function registrarVenta(vendedor) {
  var nombreInput = document.getElementById(`nombreVendedor${vendedor}`);
  var nombre = nombreInput.value;

  if (!isNaN(nombre)) {
    alert("Ingresa un nombre válido.");
    return;
  }

  var cantidadProductos = [];
  for (var i = 0; i < productos.length; i++) {
    var cantidad = prompt(`Ingrese la cantidad vendida de ${productos[i]} por ${nombre}:`);

    if (isNaN(cantidad)) {
      alert("Ingresa una cantidad válida.");
      return;
    }

    cantidadProductos.push(parseInt(cantidad));
  }

  if (vendedor === 1) {
    ventasVendedor1 = cantidadProductos;
  } else {
    ventasVendedor2 = cantidadProductos;
  }
}

// Función para calcular la suma total de ventas
function calcularTotalVentas(ventas) {
  return ventas.reduce((total, cantidad, index) => total + cantidad * precios[index], 0);
}

// Función para determinar el empleado del mes
function empleadoDelMes() {
  var totalVendedor1 = calcularTotalVentas(ventasVendedor1);
  var totalVendedor2 = calcularTotalVentas(ventasVendedor2);

  if (totalVendedor1 === totalVendedor2) {
    return "Hubo un empate entre los vendedores.";
  } else if (totalVendedor1 > totalVendedor2) {
    return `El empleado del mes es el Vendedor 1 con un total de $${totalVendedor1} en ventas.`;
  } else {
    return `El empleado del mes es el Vendedor 2 con un total de $${totalVendedor2} en ventas.`;
  }
}

// Función para mostrar resultado (CONSOLA)
function mostrarResultados() {
  console.log("Ventas Vendedor 1:", ventasVendedor1);
  console.log("Total Ventas Vendedor 1:", calcularTotalVentas(ventasVendedor1));
  console.log("Ventas Vendedor 2:", ventasVendedor2);
  console.log("Total Ventas Vendedor 2:", calcularTotalVentas(ventasVendedor2));
  console.log(empleadoDelMes());
}
// Función para mostrar resultado (DOCUMENTO)
function mostrarResultados() {
    var resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = ""; // Limpiar contenido previo
  
    var resultadoHTML = `<h2>Resultados</h2>`;
    resultadoHTML += `<table>`;
    resultadoHTML += `<tr><th>Producto</th><th>Ventas Vendedor 1</th><th>Ventas Vendedor 2</th></tr>`;
  
    for (var i = 0; i < productos.length; i++) {
      resultadoHTML += `<tr>`;
      resultadoHTML += `<td>${productos[i]}</td>`;
      resultadoHTML += `<td>${ventasVendedor1[i]}</td>`;
      resultadoHTML += `<td>${ventasVendedor2[i]}</td>`;
      resultadoHTML += `</tr>`;
    }
  
    resultadoHTML += `</table>`;
    resultadoHTML += `<p>Total Ventas Vendedor 1: $${calcularTotalVentas(ventasVendedor1)}</p>`;
    resultadoHTML += `<p>Total Ventas Vendedor 2: $${calcularTotalVentas(ventasVendedor2)}</p>`;
    resultadoHTML += `<p>${empleadoDelMes()}</p>`;
  
    resultadosDiv.innerHTML = resultadoHTML;
  }