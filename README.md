# Algoritmo Ranking:

## Descripcion del algoritmo  
Describimos el algoritmo para crear los rakings de estudiantes a partir de los JSON de reportes.

 ## El primer paso del algoritmo es obtener los reportes por curso y periodo:      
 `4A:2020-2021`
 
 ### Para llevar acabo la peticion de los reportes debemos usar: 
 #### La funcion para crear la URL que solicita los reportes al API: 
 La siguiente funcion nos sirve para formar la URL para el pedido de reportes: 
 ```js
 const getReportsURL = (curso, periodo) => {

	/**
	 * @description: Obtener todos los reportes por curso y periodo. 
	 * @param	{String}	curso Ejemplo: "4A"
	 * @param	{String}	Periodo Ejemplo: "2020-2021"
	 * @URL https://cemasapi.herokuapp.com/reportes/boletin/4A:2020-2021:
	 * @return  {String}	URL	 String URL .
	 */


	const url = `/reportes`;
	let string_params = `/boletin/${curso}:${periodo}:`;
	const URL_API = 'https://cemasapi.herokuapp.com';


	const urlComplete = `${URL_API}${url}${encodeURI(string_params)}`;
	return urlComplete;
};
 ```
 
#### El hook para gestionar los fecth al API:

El hook que creamos es `useFetch`
```js
import { useState, useEffect, useRef } from 'react';


export const useFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])


    useEffect(() => {

        setState({ data: null, loading: true, error: null });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }

            })
            .catch(() => {
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la info'
                })
            })

    }, [url])

    return state;
}
```

## El componente que hace la peticion y usa el useFetch:

```js
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
```





