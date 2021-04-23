import { useFetch } from "../hooks/useFetch";
import ItemBoletin from "./ItemBoletin";
import {
    getIdxAcademico,
    getIdxGeneral,
    getIdxTecnico,
    orderByIdx
} from "./helpers";

export default function ListaBoletines({ url }) {

    console.log("Lista Boletines URL: ", url);
    //{ data: null, loading: true, error: null }

    const { data, loading, error } = useFetch(url);

    if (loading && url) {

        return <h1>Loading</h1>
    } else if (error) {
        console.log(error);
        return <h3>{error}</h3>
    }



    console.log("Datos: ", data)

    // Algoritmo de ranking sobre data
    const algoritmoRanking = (json) => {

        const valid = json.data.filter(dato => (dato.asignaturas.length > 2));

        const ranking_desorder = valid.map(estudiante => {


            //obtener idx_academico
            const idx_academico = getIdxAcademico(estudiante.asignaturas);

            //obtener idx_tecnico
            const idx_tecnico = getIdxTecnico(estudiante?.modulos, estudiante?.curso);

            //obtener idx_general
            const idx_general = getIdxGeneral(idx_academico, idx_tecnico);

            return {
                ...estudiante,
                idx_academico,
                idx_tecnico,
                idx_general
            }

        })


        const ranking_order = orderByIdx(ranking_desorder);

        return ranking_order;
    }

    //llamo el algoritmo

    const ranking = algoritmoRanking(data);


    return (
        <div>
            <div className="list-group">
                {ranking.map(estudiante => <ItemBoletin key={estudiante._id} estudiante={estudiante} />)}

            </div>
        </div>
    )
}
