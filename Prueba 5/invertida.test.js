const invertida = require('./invertida');

test('Verifica si una cadena es un palíndromo', () => {
  expect(invertida('anilina')).toBe(true);
  expect(invertida('reconocer')).toBe(true);
  expect(invertida('Hola, mundo')).toBe(false);
  expect(invertida('soMos')).toBe(true);
});