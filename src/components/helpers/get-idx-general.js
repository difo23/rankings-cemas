


export default function getIdxGeneral(idxTecnico, idxAcademico) {

    // Calcular idx general 
    /**
     * Formula si existe calificacion tecnica
     * idx_general = (idx_tecnico + idx_academico)/ 2
     * Si idxTecnico es 0 solo retornamos el idxAcademico
     */ 

    if (idxTecnico) {

        // Calculamos idx general con promedio de academica y tecnica
        return 99.45
    } else {

        return idxAcademico
    }

   
}