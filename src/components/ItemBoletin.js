import React, { useState } from 'react'

export default function ItemBoletin({ estudiante }) {

    const [active] = useState('')

    return (
        <div>
            <li className={`list-group-item list-group-item-action ${active}`}>
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{estudiante.nombre_estudiante}</h5>
                    <small>{estudiante.numero_estudiante}</small>
                </div>
                <p className="mb-1"> Asignaturas: {estudiante.asignaturas.map(asignatura => <small>{asignatura.codigo_asignatura} </small>)}</p>

                <p className="mb-1"> Modulos: {estudiante.modulos.map(modulo => <small>{modulo.codigo_asignatura} </small>)}</p>



                <p className="mb-1"> {`Promedio Academico : ${estudiante.idx_academico}`} </p>
                <p className="mb-1"> {`Promedio Tecnico : ${estudiante.idx_tecnico}`} </p>
                <p className="mb-1"> {`Promedio General : ${estudiante.idx_general}`} </p>

                {/* <small>Titular: {estudiante.nombre_titular}</small> */}
                {/* <div className="mt-3">
                    <button className="btn btn-outline-success " >Buscar</button>

                </div> */}
            </li>
        </div>
    )
}
