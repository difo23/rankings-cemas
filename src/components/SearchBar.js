import React from 'react'

export default function SearchBar() {
    return (
        <div>
            <form>
                <div class="form-row">
                    <div class="col">
                        <input type="text" className="form-control" placeholder="Curso" />
                    </div>
                    <div class="col">
                        <input type="text" className="form-control" placeholder="Periodo" />
                    </div>
                    <div class="col-2">
                        <button className="btn btn-outline-success " type="submit">Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
