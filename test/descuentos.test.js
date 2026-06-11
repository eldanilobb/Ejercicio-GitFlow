const assert = require("assert");
const { calcularPrecioFinal } = require("../src/descuentos");

assert.strictEqual(calcularPrecioFinal(10000, "estudiante"), 8500);

console.log("Tests ejecutados correctamente");
