const getIdxAcademico = (asignaturas) => {
  let sum_calificacion_final = 0,
    asignaturas_length = 0,
    idx_academico = 0;

  if (asignaturas) {
    // Recorrer las asignaturas
    asignaturas.forEach((asignatura, index) => {
      sum_calificacion_final += parseFloat(asignatura.cf);
      asignaturas_length = index;
    });

    // Obtener el promedio de las asignaturas
    idx_academico = sum_calificacion_final / (asignaturas_length + 1);
    return idx_academico;
  }
  // Return 0 si asignaturas es null o []
  else return 0;
};

export default getIdxAcademico;
