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
                <form onSubmit={loadRecords}>
                    <div className="form-row ml-5">

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



                </div>
                
            </form>
        </nav> 
    )
}
