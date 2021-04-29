import {db, googleAuthProvider, firebase} from "./config/firebase";
import  ButtonSingIn  from "./components/ButtonSingIn";
import  ButtonSingOut  from "./components/ButtonSignOut";
import { useState } from 'react';
import ListaBoletines from './components/ListaBoletines';
import SearchBar from './components/SearchBar';
import Menu from "./components/Menu";
import { signInWithGoogle, singOut } from "./login";
import './config/firebase';


function App() {
  const [state, setState] = useState(null);

  console.log(state);
  const handleUrl = (url) => {
    setState(url);
  };

  return (
    <div id="ranking">
      <Menu />
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
      </div>

      <div>
        {
          true ? (
          <>
          <ButtonSingIn onClick={signInWithGoogle} > Sign in with Google</ButtonSingIn>
          </>
        ): <ButtonSingOut onClick={ singOut } > Salir </ButtonSingOut>
        }
        
      </div>
    </div>
  );
}

export default App;
