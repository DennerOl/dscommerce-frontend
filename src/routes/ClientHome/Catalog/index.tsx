import './styles.css'
import SearchBar from '../../../components/SearchBar';
import CatalogCard from '../../../components/CatalogCard';
import ButtonNextPage from '../../../components/ButtonNextPage';
import * as productservice from '../../../Services/product-service'
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';
import { CategoryDTO } from '../../../models/category';





export default function Catalog() {


  const [products, setProducts] = useState<ProductDTO[]>([]);

  /*
    const objTest: CategoryDTO = {
      id: 8,
      name: "Jardinagem"
    }
  */


  useEffect(() => {
    /* ----salva o objeto como string no localStorage
        localStorage.setItem("minhaCategoria", JSON.stringify(objTest));
    
    --- aqui pego um string salvo no localStorage e converto para obj
        const obj = JSON.parse(localStorage.getItem("minhaCategoria")  || "{}" );
    */
    productservice.findAll()
      .then(resposta => {
        setProducts(resposta.data.content);

      });

  }, []);

  return (


    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar />
        <div className=" dsc-catalog-cards  dsc-mb20  dsc-mt20">
          { /* renderizo o produto ou seja chamo os dados do produto do service */}
          {
            products.map(
              product => <CatalogCard key={product.id} product={product} />)
          }

        </div>
        <ButtonNextPage />
      </section>

    </main>

  );
}