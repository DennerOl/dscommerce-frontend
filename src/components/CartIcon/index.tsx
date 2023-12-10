import cartIcon from '../../assets/imagens/imagemCarrinho.svg';
import './styles.css';


export default function CartIcon() {

  return (
    <>
      <img src={cartIcon} alt="carrinhoCompras" />
      <div className='dsc-cart-count'> 2</div>
    </>
  );
}