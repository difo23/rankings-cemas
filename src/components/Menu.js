import ButtonSingOut from './ButtonSignOut';
import singOut from '../login/signOut';

const Menu = () => {
  return (
  <div className="menu container-fluid">
    <div className="row">
      <header className="col-lg-12">
        <div class="cemas">
          <img className="logo" src="https://i.imgur.com/KT8UtmZ.png" alt=""/>
          <h1 className="title">Ranking Cemas</h1>
        </div>
        <ButtonSingOut onClick={ singOut }> Salir </ButtonSingOut> 
      </header>
    </div>  
  </div>
  
  );
};

export default Menu;

