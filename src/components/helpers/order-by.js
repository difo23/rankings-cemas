import { getByLabelText } from "@testing-library/dom";

const orderBy = (ranking) => {
  const filter = (a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0; // a must be equal to b
  };

  // idx_academico: 49.75
  // idx_general: 58
  // idx_tecnico: 66.25
  // numero_estudiante: "4" = 4

  return ranking.sort((a, b) => {
    // let selected = "idx-academico";
    let selected = document.getElementById("filter").value;

    switch (selected) {
      case "num-lista":
        selected = null;
        let numA = parseFloat(a.numero_estudiante),
          numB = parseFloat(b.numero_estudiante);
        return filter(numB, numA);

      case "idx-academico":
        selected = null;

        return filter(a.idx_academico, b.idx_academico);

      case "idx-tecnico":
        selected = null;
        return filter(a.idx_tecnico, b.idx_tecnico);

      case "idx-general":
        selected = null;
        return filter(a.idx_general, b.idx_general);

      default:
        return null;
    }
  });
};

export default orderBy;
