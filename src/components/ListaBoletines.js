import { useFetch } from "../hooks/useFetch";
import ItemBoletin from "./ItemBoletin";


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


    return (
        <div>
            <div className="list-group">
                {data.data.filter(dato => (dato.asignaturas.length > 2)).map(dato => <ItemBoletin key={dato._id} data={dato} />)}

            </div>
        </div>
    )
}
