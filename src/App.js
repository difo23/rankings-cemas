import { useState } from 'react';
import { useAuthState } from './hooks';

// Import firebaseConfig
import { firebase } from "./config/firebase.pub";
import './config/firebase.pub';

// Import Sign In With Google
import { signInWithGoogle } from "./login";

// Import Components
import  ButtonSingIn  from "./components/ButtonSingIn";
import ListaBoletines from './components/ListaBoletines';
import SearchBar from './components/SearchBar';
import Menu from "./components/Menu";

function App() {
  const [state, setState] = useState(null);

  console.log(state);
  const handleUrl = (url) => {
    setState(url);
  };
  const { user, itializing } = useAuthState(firebase.auth());
  const renderLoading = () => {
    if (itializing)
      return (
        <div>
          <h3>Loadinng...</h3>
        </div>
      );
  }; 

  return (
    <div>
         {renderLoading()}
      { user? (
          <>
            <Menu />
      <div className="container" id="ranking">
        <SearchBar handleUrl={handleUrl} />

        <h3>Lista de boletines:</h3>
        
        <hr />

        {state && <ListaBoletines url={state} />}
      </div>
          </>
        ): (
          <ButtonSingIn onClick={signInWithGoogle}> 
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png" alt=""></img>
            Sign in with Google
          </ButtonSingIn>
        )}
      </div>
  );
}

export default App;
