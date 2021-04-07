


export default function getIdxGeneral(idxTecnico, idxAcademico) {

    console.log('getIdxAcademica', idxTecnico, idxAcademico)
    // Calcular idx general 
    /**
     * Formula si existe calificacion tecnica
     * idx_general = (idx_tecnico + idx_academico)/ 2
     * Si idxTecnico es 0 solo retornamos el idxAcademico
     */

    if (idxTecnico) {

        // Calculamos idx general con promedio de academica y tecnica
        // Uso valores random solo para probar el ordernamiento
        return 99.4567 * Math.random();
    } else {

        return idxAcademico
    }


}