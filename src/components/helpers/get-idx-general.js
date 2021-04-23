const getIdxGeneral = (idxAcademico, idxTecnico) => {
  // Calculamos idx general si idx academica y idx tecnica existen.
  if (idxAcademico && idxTecnico) return (idxTecnico + idxAcademico) / 2;
  // Calculamos idx general si idx academica existe y idx tecnica no existe.
  if (idxAcademico && !idxTecnico) return idxAcademico;
  // De lo contrario retornamos 0 para evitar errores.
  return 0;
};

export default getIdxGeneral;
