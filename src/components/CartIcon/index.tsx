import cartIcon from '../../assets/imagens/imagemCarrinho.svg';
import './styles.css';
import { useContext } from 'react';
import { ContextCartCount } from '../../utils/context-cart';


export default function CartIcon() {

  const { contextCartCount } = useContext(ContextCartCount);


  return (
    <>
      <img src={cartIcon} alt="carrinhoCompras" />
      {
        contextCartCount > 0 &&
        <div className='dsc-cart-count'> {contextCartCount}</div>

      }
    </>
  );
}