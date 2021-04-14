const getIdxAcademico = (asignaturas) => {
  if (asignaturas) {
    let promedio_asignaturas = 0;
    let sum_asignatura = 0;

    //Calculamos indx con asignaturas
    asignaturas.forEach((element) => {
      for (let i = 0; i < asignatura.length; i++) {
        sum_asignatura =
          parseInt(asignaturas[i].ago_sept_oct) +
          parseInt(asignaturas[i].nov_dic_ene) +
          parseInt(asignaturas[i].feb_mar) +
          parseInt(asignaturas[i].abr_may_jun);
        // "ago_sept_oct"
        // "nov_dic_ene"
        // "feb_mar"
        // "abr_may_jun"

        // es la suma de los 4 meses dividido entre 4
        promedio_asignaturas = sum_asignatura / 4;

        console.log(typeof object, typeof data);
        console.log("getIdxAcademico", asignaturas);
        console.log("promedio de las asignaturas", promedio_asignaturas);
      }
    });
    return promedio_academico;
  } else {
    // Return 0 si asignaturas es null o []
    return 0;
  }
};

export default getIdxAcademico;
