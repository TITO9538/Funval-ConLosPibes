let cliente = promt(`Hola! Bienvenido a nuestra calculadora virtual!
    A continuacion ingrese su Nombre`);
alert(`Hola ${cliente} Vamos a hacer calculos`);
let swich = true
do {
let num1 = parseInt(prompt(`Ingrese su primer numero`));
if (num1 < 0 && isNaN(num1)) {
swich = true;
} else {
    swich = false;
}

} while (swich);

let num2 = parseInt(prompt(`Ahora ingrese su segundo numero`));



num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (isNaN(num1) || isNaN(num2)) {
  alert("Por favor, ingresa solo números.");
} else if (num2 === 0) {
  alert("No se puede dividir entre 0. Intenta con otro número.");
} else {
  let resultado = num1 / num2;
  alert(`El resultado de dividir ${num1} entre ${num2} es: ${resultado}`);
}
/* suma Pablo */ 
function sumar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Ambos valores deben ser números';
  }
  return a + b;
}