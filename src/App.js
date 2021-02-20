

import SearchBar from './components/SearchBar';

function App() {
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
          <SearchBar />
        </div>

      </div>
    </div>
  );
}

export default App;
