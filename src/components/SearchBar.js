import React from 'react'
import getReportsURL from '../api/getReportsURL';
import { useForm } from '../hooks/useForm'

export default function SearchBar({ handleUrl }) {

    const initialForm = {
        curso: '',
        periodo: '',
        ordenar: 'num-lista',

    };


    const [formValues, handleInputChange, reset] = useForm(initialForm);

    const { curso, periodo, ordenar } = formValues;


    const loadRecords = (e) => {
        e.preventDefault();
        
        const url = getReportsURL(curso, periodo);

        handleUrl(url, ordenar);
        reset();

    }

    return (
        <nav>
            <form onSubmit={loadRecords} /* autoComplete="off" */>
                <div className="form-row">

                    <label className="col-md-3 col-sm-6">
                        <span>Curso</span>
                        <input
                            type="text"
                            className="curso"
                            placeholder="6D"
                            required
                            name="curso"
                            value={curso}
                            onChange={handleInputChange}
                        />
                    </label>

                    <label className="col-md-3 col-sm-6">
                        <span>Periodo</span>
                        <input
                            type="text"
                            className="periodo"
                            placeholder="2020-2021"
                            required
                            name="periodo"
                            value={periodo}
                            onChange={handleInputChange}
                        />
                    </label>

                    <label className="col-md-4 col-sm-6">
                        <span>Ordenar</span>
                        <select id="filter" className="filter dropdown" name="ordenar" value={ordenar} onChange={handleInputChange}>
                            <option value="num-lista">Número (Defecto)</option>
                            <option value="idx-academico">Indice Académico</option>
                            <option value="idx-tecnico">Indice Técnico</option>
                            <option value="idx-general">Indice General</option>
                        </select>
                    </label>

                    <div className="container-button col-md-2 col-sm-6">
                        <button className="buscar" type="submit">Buscar</button>
                    </div>
                </div>
            </form>
        </nav>
    )
}
