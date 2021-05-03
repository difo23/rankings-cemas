import filter from "./filter";

const orderByIdx = (ranking) => {
  return ranking.sort(function (a, b, selected = "num-lista") {
    switch (selected) {
      // idx_academico: 49.75
      // idx_general: 58
      // idx_tecnico: 66.25
      // numero_estudiante: "4" = 4
      case "num-lista":
        filter(
          parseFloat(a.numero_estudiante),
          parseFloat(b.numero_estudiante)
        );
        break;
      default:
        return null;
    }
  });
};

export default orderByIdx;
