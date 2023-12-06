function estudiante(estudiantes) {
    if (estudiantes.length === 0) {
      return false;
    }
  
  let edadMinima = estudiantes[0].edad;
  let edadMaxima = estudiantes[0].edad;

  for (const estudiante of estudiantes) {
    if (estudiante.edad < edadMinima) {
      edadMinima = estudiante.edad;
    }
    if (estudiante.edad > edadMaxima) {
      edadMaxima = estudiante.edad;
    }
  }

  return {
    minima: edadMinima,
    maxima: edadMaxima,
  };
}

module.exports = estudiante;