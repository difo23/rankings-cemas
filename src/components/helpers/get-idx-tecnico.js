const getIdxTecnico = (modulos, curso) => {
  let sum_acumulado_modulos = 0,
    modulos_length = 0,
    idx_tecnico = 0;

    switch (curso[0]) {
      case "4":
      case "5":
        // Código de Vane...
        break;
      case "6":
        // Código de Tesy...
        break;
      default:
        // Si retorna null es porque no exixten materias técnicas.
        return null;
    }
};

 export default  getIdxTecnico;
 