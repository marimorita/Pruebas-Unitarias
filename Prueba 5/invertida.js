function invertida(cadena) {
    const cadenaLimpia = cadena.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const cadenaInvertida = cadenaLimpia.split('').reverse().join('');
    return cadenaLimpia === cadenaInvertida;
  }
  
  module.exports = invertida;

