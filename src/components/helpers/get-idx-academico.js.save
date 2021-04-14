const getIdxAcademico = (asignaturas) => {
  if (asignaturas) {
    let sum_asignatura = 0;
    let promedio_asignatura = 0;
    let sum_promedio_asignaturas = 0;
    let promedio_academico = 0;

    //Calculamos indx con asignaturas
    asignaturas.forEach((element) => {
      for (let i = 0; i < asignaturas.length; i++) {
        sum_asignatura =
          parseInt(asignaturas[i].ago_sept_oct) +
          parseInt(asignaturas[i].nov_dic_ene) +
          parseInt(asignaturas[i].feb_mar) +
          parseInt(asignaturas[i].abr_may_jun);

        // Suma de todos los meses divididos entre la cantidad de meses.
        promedio_asignatura = sum_asignatura / 4;

        console.log(typeof object, typeof data);
        console.log("getIdxAcademico", asignaturas);
        console.log("promedio de las asignaturas", promedio_asignatura);
      }
      promedio_academico += promedio_asignatura;
    });
    console.log("promedio academico:", promedio_academico);
    return promedio_academico;
  } else {
    // Return 0 si asignaturas es null o []
    return 0;
  }
};

export default getIdxAcademico;
