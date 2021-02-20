

import { useState } from 'react';
import SearchBar from './components/SearchBar';

function App() {

  const [state, setState] = useState(null)

  console.log(state)
  const handleUrl = (url) => {
    setState(url)
  }

  return (
    <div className="container">
      <div className="row mt-4">

        <div className="col">
          <h1>Records:</h1>
          <hr />
        </div>

      </div>

      <div className="row mt-4">
        <div className="col">
          <SearchBar handleUrl={handleUrl} />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col mt-4 ml-5">
          <h3>List of records:</h3>
          <hr />
          {state && <h3>{state}</h3>}
        </div>
      </div>

    </div>
  );
}

export default App;
