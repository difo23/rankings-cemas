import React, { useState } from 'react'

const ItemBoletin = ({ estudiante }) => {
    const [active] = useState('')

    return (

            <article>
                <h3 className="nombre">{estudiante.nombre_estudiante}<span className="numero">{estudiante.numero_estudiante}</span></h3>
                <ul>
                    <li>Asignaturas: {estudiante.asignaturas.map(asignatura => <span>{asignatura.codigo_asignatura}</span> )}</li>
                    <li>Modulos: {estudiante.modulos.map(modulo => <span>{modulo.codigo_asignatura}</span> )}</li>
                    <li>{`Promedio Acádemico : ${estudiante.idx_academico}`}</li>
                    <li>{`Promedio Técnico : ${estudiante.idx_tecnico}`}</li>
                    <li>{`Promedio General : ${estudiante.idx_general}`}</li>
                </ul>
            </article>


    )
}

export default ItemBoletin;
