const estudiante = require('./estudiante');

test('Obtiene edad mínima y máxima de los estudiantes', () => {
  const estudiantes = [
    { nombre: 'Mari', edad: 17 },
    { nombre: 'Deivid', edad: 20 },
    { nombre: 'Pablo', edad: 18 },
  ];

  expect(estudiante(estudiantes)).toEqual({
    minima: 17,
    maxima: 20,
  });
});