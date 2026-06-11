function calcularPrecioFinal(precio, tipoCliente) {
  if (precio < 0) {
    throw new Error("El precio no puede ser negativo");
  }
  let total = precio;
  if (tipoCliente === "estudiante") {
    total -= precio * 0.15;
  }
  return total;
}

module.exports = { calcularPrecioFinal };
