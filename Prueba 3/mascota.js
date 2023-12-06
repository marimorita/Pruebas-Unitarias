function mascota(mascotas) {
    if (mascotas.length === 0) {
      return 0; 
    }
  
    let sumaEdades = 0;
    for (const mascota of mascotas) {
      sumaEdades += mascota.edad;
    }
      const promedio = sumaEdades / mascotas.length;

    return promedio;
  }
  module.exports = mascota;

  
  
  
  
  
  