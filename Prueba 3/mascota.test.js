const mascota = require('./mascota');

test('Calcular la edad promedio de las mascotas', () => {
  const mascotas = [
    { nombre: 'Luna', edad: 5 },
    { nombre: 'Max', edad: 3 },
    { nombre: 'Coco', edad: 7 },
  ];

  expect(mascota(mascotas)).toBe(5); 
});

test('Calcular la edad promedio de un grupo vacío de mascotas', () => {
  const mascotas = [];
  expect(mascota(mascotas)).toBe(0); 
});