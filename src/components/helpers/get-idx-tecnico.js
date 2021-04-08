

export default function getIdxTecnico(modulos) {

    // Calcular idx tecnico

    console.log('getIdxTecnico', modulos);

    /**
     * Ejemplo  de los elementos dentro de modulos:
     * {
          "codigo_asignatura": "MF3623_GDD",
          "acumulado": 23,
          "total": 25
        }
     */

    /**
     * Formula:
     * 
     * Para 4to y 5to: 
        calculo en idx directamente con la formula:

        idx_tecnico = (sum_acumulado_modulos)/ (modulos_length)
     
    * Para 6to:
        Es necesario aplicar regla de 3 al acumulado de la asignatura
        Formacion de Centros de trabajos (FCT), su codigo asignatura es MF0000_FCT.

        Ejemplo 6A:
        {
          "codigo_asignatura": "MF0000_FCT",
          "acumulado": 26,
          "total": 30
        },


        fct_transformada = (fct_acumulado * 100) / (fct_total)

        Luego actualizo el valor de fct_acumulado por el nuevo valor transformado.

        fct_acumulado = fct_transformado

        Y calculo el indice tecnico: 

        idx_tecnico = (sum_acumulado_modulos)/ (modulos_length)

     */


    if (modulos) {

        // Calcular el indice 


        return 93.8842;

    } else {

        // Si modulos es null o [] retorna 0
        // Esto sucede cuando no son cursos tecnicos
        return 0;
    }


}