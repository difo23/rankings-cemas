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
        <div>
            <form onSubmit={loadRecords}>
                <div className="form-row ml-5">
                    <div className="col-5">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Curso"
                            name="curso"
                            value={curso}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-5">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Periodo"
                            name="periodo"
                            value={periodo}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-2">
                        <button className="btn btn-outline-success " type="submit">Buscar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
