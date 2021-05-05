import React, { useState } from 'react'

const ItemBoletin = ({ estudiante }) => {
    const [active] = useState('')

    return (
            <article>
                <h3 className="nombre">{estudiante.nombre_estudiante} <span className="numero">{estudiante.numero_estudiante}</span></h3>
                <ul className="datos">
                    <li><span>Asignaturas :</span> {estudiante.asignaturas.map(asignatura => <span>{asignatura.codigo_asignatura} </span> )}</li>
                    <li><span>Modulos :</span> {estudiante.modulos.map(modulo => <span>{modulo.codigo_asignatura}</span> )}</li>
                    <li><span>Promedio Acádemico :</span> {`${estudiante.idx_academico}`}</li>
                    <li><span>Promedio Técnico :</span> {`${estudiante.idx_tecnico}`}</li>
                    <li><span>Promedio General :</span> {`${estudiante.idx_general}`}</li>
                </ul>
            </article>
    )
}

export default ItemBoletin;
