import ButtonSingOut from './ButtonSignOut';
import singOut from '../login/signOut';

const Menu = () => {
  return (
  <div className="menu container-fluid">
    <div className="row">
      <header className="col-lg-12">
        <div class="cemas">
          <img className="logo" src="../../assets/img/cemas_logo.png" alt=""/>
          <h1 className="title">Ranking Cemas</h1>
        </div>
        <ButtonSingOut onClick={ singOut }> Salir </ButtonSingOut> 
      </header>
    </div>
  </div>
  
  );
};

{/* <div className="container-fluid menu">
  <div className="row">
    <header class="col-lg-12">
      <div class="cemas">
        <img class="logo" src="./images/logo.png" alt="">
        <h1 class="title">Ranking Cemas</h1>
      </div>
      <button class="log_out">Salir</button>
    </header>
  </div>
</div> */}
export default Menu;

