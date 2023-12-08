import './styles.css'
import SearchBar from '../../../components/SearchBar';
import CatalogCard from '../../../components/CatalogCard';
import ButtonNextPage from '../../../components/ButtonNextPage';
import * as productservice from '../../../Services/product-service'
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';


type QueryParams = {
  page: number;
  name: string;
}

export default function Catalog() {


  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    name: ""
  });

  const [isLastPage, setIslastPage] = useState(false);

  useEffect(() => {

    productservice.findPageRequest(queryParams.page, queryParams.name)
      .then(resposta => {
        const nextPage = resposta.data.content;
        setProducts(products.concat(nextPage));
        setIslastPage(resposta.data.last);

      });

  }, [queryParams]);


  function handleSearch(searchText: string) {
    setProducts([]);
    setQueryParams({ ...queryParams, page: 0, name: searchText });
  }

  function handleNextPageClick() {
    setQueryParams({ ...queryParams, page: queryParams.page + 1 });
  }

  return (


    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar onSearch={handleSearch} />
        <div className=" dsc-catalog-cards  dsc-mb20  dsc-mt20">
          { /* renderizo o produto ou seja chamo os dados do produto do service */}
          {
            products.map(
              product => <CatalogCard key={product.id} product={product} />)
          }

        </div>

        {
          !isLastPage &&
          <div onClick={handleNextPageClick}>
            <ButtonNextPage />
          </div>
        }
      </section>

    </main>

  );
}