const getIdxAcademico = (asignaturas) => {
  let promedio_asignaturas = 0;
  let promedio_academico = 0;
  console.log('getIdxAcademico', asignaturas);

  // Calcular idx academico

  /**
   * Ejemplo  de los elementos dentro de asignaturas:
   * {
        "codigo_asignatura": "EDAR004",
        "ago_sept_oct": "83",
        "nov_dic_ene": "0",
        "feb_mar": "0",
        "abr_may_jun": "0",
        "cf": 21
      }
   */

  /**
   * Formula:
    idx_academico = (sum_cf_asignaturas)/ (asignaturas_length)
   */

  if (asignaturas) {
    //Calculamos index con asignaturas

    return promedio_academico;
  } else {

    // Return 0 si asignaturas es null o []
    return 0;
  }

}

export default getIdxAcademico;
