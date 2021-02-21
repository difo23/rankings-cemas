import React, { useState } from 'react'

export default function ItemBoletin({ data }) {

    const [active, setactive] = useState('')

    return (
        <div>
            <li className={`list-group-item list-group-item-action ${active}`}>
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{data.nombre_estudiante}</h5>
                    <small>{data.numero_estudiante}</small>
                </div>
                <p className="mb-1"> Asignaturas: {data.asignaturas.map(asignatura => <small>{asignatura.codigo_asignatura} </small>)}</p>

                <p className="mb-1"> Modulos: {data.modulos.map(modulo => <small>{modulo.codigo_asignatura} </small>)}</p>



                <p className="mb-1"> Promedio Academico : 92.56345 </p>
                <p className="mb-1"> Promedio Tecnico : 92.56345 </p>
                <p className="mb-1"> Promedio General : 92.56345 </p>

                <small>Titular: {data.nombre_titular}</small>
                <div className="mt-3">
                    <button className="btn btn-outline-success " >Buscar</button>

                </div>
            </li>
        </div>
    )
}
