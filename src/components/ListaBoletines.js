import { useFetch } from "../hooks/useFetch";
import ItemBoletin from "./ItemBoletin";
import {
  getIdxAcademico,
  getIdxGeneral,
  getIdxTecnico,
  orderBy,
} from "./helpers";

export default function ListaBoletines({ url, orden }) {
  //{ data: null, loading: true, error: null }

  const { data, loading, error } = useFetch(url);

  if (loading && url) {
    return <h1 className="load">Loading..</h1>;
  } else if (error) {
    console.log(error);
    return <h3>{error}</h3>;
  }

  // Algoritmo de ranking sobre data
  const algoritmoRanking = (json) => {
    const valid = json.data.filter((dato) => dato.asignaturas.length > 2);

    const ranking_desorder = valid.map((estudiante) => {
      //obtener idx_academico
      const idx_academico = getIdxAcademico(estudiante.asignaturas);

      //obtener idx_tecnico
      const idx_tecnico = getIdxTecnico(estudiante?.modulos, estudiante?.curso);

      //obtener idx_general
      const idx_general = getIdxGeneral(idx_academico, idx_tecnico);

      //obtener curso
      const curso = estudiante.curso;

      // obtener periodo
      const periodo = estudiante.periodo;

      return {
        ...estudiante,
        idx_academico,
        idx_tecnico,
        idx_general,
        curso,
        periodo,
      };
    });

    const ranking_order = orderBy(ranking_desorder, orden);

    return ranking_order;
  };

  //llamo el algoritmo

  const ranking = algoritmoRanking(data);

  return (
    <>
      <h2>
        <span className="encabezado_boletines">
          Lista de boletines de los estudiantes:
        </span>
        <span className="periodo">
          {ranking.length > 0 ? ranking[0].periodo : ranking}
        </span>
      </h2>
      <hr />
      <div className="list-group">
        {ranking.map((estudiante) => (
          <ItemBoletin key={estudiante._id} estudiante={estudiante} />
        ))}
      </div>
    </>
  );
}
