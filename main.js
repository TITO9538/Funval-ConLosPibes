/* suma Pablo */ 
function sumar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Ambos valores deben ser números';
  }
  return a + b;
}