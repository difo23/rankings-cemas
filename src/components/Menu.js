import ButtonSingOut from './ButtonSignOut';
import singOut from '../login/signOut';

const Menu = () => {
  return (
  <header>
    <nav>
    <div class="cemas">
          <img class="logo" src="../../assets/imgs/logo.png" alt="" />
          <h1 class="title">Ranking Cemas</h1>
        </div>
        <div>
        <ButtonSingOut onClick={ singOut } > Salir </ButtonSingOut>
         
        </div>
    </nav>
  </header>
  );
};

export default Menu;
