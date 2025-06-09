




























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