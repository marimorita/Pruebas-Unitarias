const edad = require('./edad');

test('Si edad es =  18 decir "Eres mayor" sino decir "Eres menor"', () => {
  expect(edad(edad)).toBe(18);
});