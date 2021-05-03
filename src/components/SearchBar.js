import React from 'react'
import getReportsURL from '../api/getReportsURL';
import { useForm } from '../hooks/useForm'

export default function SearchBar({ handleUrl }) {

    const initialForm = {
        curso: '',
        periodo: ''
    };


    const [formValues, handleInputChange, reset] = useForm(initialForm);

    const { curso, periodo } = formValues;


    const loadRecords = (e) => {
        e.preventDefault();
        console.info("Form Values: ", curso, periodo);

        const url = getReportsURL(curso, periodo);
        console.info("URL: ", url);

        handleUrl(url);
        reset();

    }

    return (
        <nav>
            <form onSubmit={loadRecords} autoComplete="off">
                <div className="form-row">

                    <label class="col-md-3 col-sm-6">
                        <span>Curso</span>
                        <input
                            type="text"
                            className="curso"
                            placeholder="6D"
                            name="curso"
                            value={curso}
                            onChange={handleInputChange}
                        />
                    </label>

                    <label class="col-md-3 col-sm-6">
                        <span>Periodo</span>
                        <input
                            type="text"
                            className="periodo"
                            placeholder="2020-2021"
                            name="periodo"
                            value={periodo}
                            onChange={handleInputChange}
                        />
                    </label>

                    <label class="col-md-4 col-sm-6">
                        <span>Ordenar</span>
                        <select id="filter" className="dropdown">
                            <option value="num-lista">Número (Defecto)</option>
                            <option value="idx-academico">Indice Académico</option>
                            <option value="idx-tecnico">Indice Técnico</option>
                            <option value="idx-general">Indice General</option>
                        </select>
                    </label>

                    <div class="container-button col-md-2 col-sm-6">
                        <button className="buscar" type="submit">Buscar</button>
                    </div>
                </div>
            </form>
        </nav>
    )
}
