const sumaEnteros = require('./sumaEnteros');

test('Calcula la suma de enteros hasta un número dado', () => {
  expect(sumaEnteros(4)).toBe(10); 
  expect(sumaEnteros(6)).toBe(21); 
});