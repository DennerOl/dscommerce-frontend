import './styles.css';
import cartIcon from '../../assets//imagens/imagemCarrinho.svg';


export default function HeaderClient() {

  return (
    <header className="dsc-header-client">
      <nav className="dsc-container">
        <h1>DsCommerce</h1>

        <div className="dsc-navbar-right">

          <div className="dsc-menu-items-container">
            <div className="dsc-menu-item">
              <img src={cartIcon} alt="carrinhoCompras" />
            </div>
          </div>
          <a href="#"> Entrar</a>
        </div>
      </nav>
    </header>

  );

}