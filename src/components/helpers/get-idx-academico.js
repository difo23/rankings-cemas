function getIdxAcademico(asignaturas) {
  asignaturas.forEach(element => {
    for (let i = 0; i < asignatura.length; i++) {
      let sum_asignatura = parseInt(asignaturas[i].ago_sept_oct) + parseInt(asignaturas[i].nov_dic_ene) + parseInt(asignaturas[i].feb_mar) + parseInt(asignaturas[i].abr_may_jun);
      // "ago_sept_oct"
      // "nov_dic_ene"
      // "feb_mar"
      // "abr_may_jun"

      // es la suma de los 4 meses dividido entre 4
      let promedio_asignaturas = sum_asignatura / 4;

      console.log('promedio de las asignaturas', promedio_asignaturas)
      return promedio_asignaturas;
    }
  });
}

// const getIdxAcademico = (asignaturas) => {
//   // es la suma de toda las asignaturas divido entre la cantidad de asignaturas
//   let promedio_academico = 0;
//   console.log("getIdxAcademico", asignaturas);

//   // Calcular idx academico

//   /**
//    * Ejemplo  de los elementos dentro de asignaturas:
//    * {
//         "codigo_asignatura": "EDAR004",
//         "ago_sept_oct": "83",
//         "nov_dic_ene": "0",
//         "feb_mar": "0",
//         "abr_may_jun": "0",
//         "cf": 21
//       }
//    */

//   /**
//    * Formula:
//     idx_academico = (sum_cf_asignaturas)/ (asignaturas_length)
//    */

//   if (asignaturas) {
//     //Calculamos index con asignaturas

//     return promedio_academico;
//   } else {
//     // Return 0 si asignaturas es null o []
//     return 0;
//   }
// };

export default getIdxAcademico;
