import Salir from './signOut';

const Menu = () => {
  return (
  <header>
    <nav>
    <div class="cemas">
          <img class="logo" src="../../assets/imgs/logo.png" alt="" />
          <h1 class="title">Ranking Cemas</h1>
        </div>
        <div>
        <Salir />
        </div>
    </nav>
  </header>
  );
};

export default Menu;
