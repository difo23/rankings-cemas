
import {db, googleAuthProvider, firebase} from "./config/firebase";
import  Button  from "./components/Login";
import { useState } from 'react';
import ListaBoletines from './components/ListaBoletines';
import SearchBar from './components/SearchBar';
import { signInWithGoogle } from "./login";
import './config/firebase';

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
          <h1>Ranking:</h1>
          <hr />
        </div>

      </div>

      <div className="row mt-4">
        <div className="col">
          <SearchBar handleUrl={handleUrl} />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col mt-4 ml-5 mr-5 mb-5">
          <h3>Lista de boletines:</h3>
          <hr />
          {state && <ListaBoletines url={state} />}
        </div>
      </div>

      <div>
         <Button onClick={signInWithGoogle} > Sign in with Google</Button>
      </div>

    </div>
  );
}

export default App;
