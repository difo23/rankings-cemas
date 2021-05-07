import { useState } from 'react';
import { useAuthState } from './hooks';
import { firebase } from "./config/firebase"; // Import firebaseConfig
import { signInWithGoogle } from "./login"; // Import Sign In With Google
import { ButtonSingIn, ListaBoletines, SearchBar, Menu } from './components'; // Import Components

function App() {
  const [state, setState] = useState(null);
  const [ordenar, setOrdenar] = useState("num-lista")

  


  const handleUrl = (url, ordenar) => {
    setState(url);
    setOrdenar(ordenar);
  };


  const { user, itializing } = useAuthState(firebase.auth());
  const renderLoading = () => {
    if (itializing)
      return (
        <div>
          <h3>Loading...</h3>
        </div>
      );
  };
  return (
    <div>
      {renderLoading()}
      { user ? (
        <>
          <Menu />
          <div className="container" id="ranking">
            <SearchBar handleUrl={handleUrl} />
            {/* <h3>Lista de boletines de {curso} {periodo}:</h3> */}
            {/* <hr /> */}
            {state && <ListaBoletines url={state} orden={ordenar} />}
          </div>
        </>
      ) : (
        <ButtonSingIn onClick={signInWithGoogle}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png" alt=""></img>
            Sign in with Google
        </ButtonSingIn>
      )}
    </div>
  );
}

export default App;
