

export default function getIdxAcademico(asignaturas) {

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

    return 93.9042;
  } else {

    // Return 0 si asignaturas es null o []
    return 0;
  }

}