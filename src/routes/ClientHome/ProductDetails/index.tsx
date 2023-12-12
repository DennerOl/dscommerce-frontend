import './styles.css';
import ButtonInverse from '../../../components/ButtonInverse';
import ButtonPrimary from '../../../components/ButtonPrimary';
import ProductDetailsCard from '../../../components/ProductDetailsCard';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';
import * as productservice from '../../../Services/product-service';
import * as cartService from '../../../Services/cart-service';
import { ContextCartCount } from '../../../utils/context-cart';




export default function ProductDetails() {

  /* uso o params para redenrizar um produto pelo id dele*/
  const params = useParams();
  const [product, setProduct] = useState<ProductDTO>();

  const navigate = useNavigate();

  const { setContextCartCount } = useContext(ContextCartCount);

  useEffect(() => {
    productservice.findById(Number(params.productId))
      .then(resposta => {
        setProduct(resposta.data);
      })
      // se acontecer algum erro eu vou para a pagina catalog ou notfound  
      .catch(() => { navigate("/catalog") });

  }, []);

  function handleByClick() {

    if (product) {
      cartService.addProduct(product);
      setContextCartCount(cartService.getCart().items.length);
      navigate("/cart");
    }
  }

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product &&
          <ProductDetailsCard product={product} />
        }
        <div className="dsc-btn-page-container">

          <div onClick={handleByClick}>
            <ButtonPrimary text="Comprar" />
          </div>

          <Link to="/">
            <ButtonInverse text="Início" />
          </Link>

        </div>
      </section>

    </main>


  );

}

