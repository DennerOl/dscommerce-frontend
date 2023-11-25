import './styles.css';
import ButtonInverse from '../../../components/ButtonInverse';
import ButtonPrimary from '../../../components/ButtonPrimary';
import ProductDetailsCard from '../../../components/ProductDetailsCard';
import * as productservice from '../../../Services/product-service'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';




export default function ProductDetails() {

  /* uso o params para redenrizar um produto pelo id dele*/
  const params = useParams();
  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    productservice.findById(Number(params.productId))
      .then(resposta => {
        setProduct(resposta.data);
      });

  }, []);



  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product &&
          <ProductDetailsCard product={product} />
        }
        <div className="dsc-btn-page-container">
          <ButtonPrimary text="Comprar" />
          <Link to="/">
            <ButtonInverse text="Início" />
          </Link>

        </div>
      </section>

    </main>


  );

}

