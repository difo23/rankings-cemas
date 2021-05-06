// import React, { useState } from 'react'

const ItemBoletin = ({ estudiante }) => {
    // const [active] = useState('')

    return (
            <article>
                <h3 className="nombre">{estudiante.nombre_estudiante} <span className="numero">#{estudiante.numero_estudiante}</span></h3>
                <div className="datos">
                    <p><span>Asignaturas :</span> {estudiante.asignaturas.map(asignatura => <span>{asignatura.codigo_asignatura}</span>)}</p>
                    <p><span>Módulos :</span> {estudiante.modulos.map(modulo => <span>{modulo.codigo_asignatura} </span> )}</p>
                    <p><span>Promedio Acádemico :</span> {`${estudiante.idx_academico}`}</p>
                    <p><span>Promedio Técnico :</span> {`${estudiante.idx_tecnico}`}</p>
                    <p><span>Promedio General :</span> {`${estudiante.idx_general}`}</p>
                    {estudiante.curso}
                </div>
            </article>
    )
}

export default ItemBoletin;
