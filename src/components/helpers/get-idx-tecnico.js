
const getIdxTecnico = (modulos, curso) => {
  let sum_acumulado_modulos = 0,
    modulos_length = 0,
    idx_tecnico = 0;

  switch (curso[0]) {
    case "4":
    case "5":
      // Recorrer los modulos
      modulos.forEach((asignatura, index) => {
        sum_acumulado_modulos += parseFloat (asignatura.acumulado);
        modulos_length = index;
      });

      // Obtener el promedio de los modulos
      idx_tecnico = sum_acumulado_modulos / (modulos_length + 1);
      return idx_tecnico;
    case "6":
      // Recorrer los modulos
      modulos.forEach((asignatura, index) => {
        if (asignatura.codigo_asignatura === "MF0000_FCT") {
          let fct_transformado = (parseFloat(asignatura.acumulado) * 100) / asignatura.total;
          let fct_acumulado = fct_transformado;
          sum_acumulado_modulos += fct_acumulado;
        } else sum_acumulado_modulos += parseFloat(asignatura.acumulado);
        modulos_length = index;
      });

      // Calcular el indice tecnico:
      idx_tecnico = sum_acumulado_modulos / (modulos_length + 1);
      return idx_tecnico;
    default:
      // Si retorna null es porque no exixten materias técnicas.
      return null;
  }
};

export default getIdxTecnico;
