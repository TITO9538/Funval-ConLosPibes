

















































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






