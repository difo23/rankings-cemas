import React, { useState } from 'react'

const ItemBoletin = ({ estudiante }) => {
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

                <article>
                <b className="nombre">NOMBRE COMPLETO DEL ESTUDIANTE <b className="numero">01</b></b>
                <ul><b>
                    <li>Asignaturas: INTE006 EDFI006 EDAR006 MATE006 CSOC006 CNAT006 FIHR006 LENG006</li>
                    <li>Modulos: MF0603_DISWM MF0553_IMASI MF0000_FCT MF0043_EMPR</li>
                    <li>{`Promedio Academico : ${estudiante.idx_academico}`}</li>
                    <li>{`Promedio Tecnico : ${estudiante.idx_tecnico}`}</li>
                    <li>{`Promedio General : ${estudiante.idx_general}`}</li>
                </b></ul>    
            </article>

                {/* <small>Titular: {estudiante.nombre_titular}</small> */}
                {/* <div className="mt-3">
                    <button className="btn btn-outline-success " >Buscar</button>

                </div> */}
            </li>
        </div>
    )
}

export default ItemBoletin;
