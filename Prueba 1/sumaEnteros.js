function sumaEnteros(numero) {
  let suma = 0;
  for (let i = 1; i <= numero; i++) {
    suma += i;
  }
  return suma;
}

module.exports = sumaEnteros;