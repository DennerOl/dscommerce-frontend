import "./styles.css";
import imagemLapis from "../../../assets/imagens/imagemLapis.svg";
import imagemLixo from "../../../assets/imagens/imagemLixo.svg";
import { useEffect, useState } from "react";
import * as productservice from "../../../Services/product-service";
import { ProductDTO } from "../../../models/product";
import SearchBar from "../../../components/SearchBar";
import ButtonNextPage from "../../../components/ButtonNextPage";
import DialogInfo from "../../../components/DialogInfo";
import DialogConfirmation from "../../../components/DialogConfirmation";
import ButtonInverse from "../../../components/ButtonInverse";
import { useNavigate } from "react-router-dom";

export default function ProductListing() {
  type QueryParams = {
    page: number;
    name: string;
  };

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    name: "",
  });

  const [isLastPage, setIslastPage] = useState(false);

  const [dialogInfoData, setDialogInfoData] = useState({
    visible: false,
    message: "Operação Realizada com Sucesso!!",
  });

  const [dialogConfirmationData, setDialogConfirmatioData] = useState({
    visible: false,
    message: "Realmente deseja excluir?",
    id: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    productservice
      .findPageRequest(queryParams.page, queryParams.name)
      .then((resposta) => {
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

  function handleDialogInfoClose() {
    setDialogInfoData({ ...dialogInfoData, visible: false });
  }

  function handleDeleteClick(productId: number) {
    setDialogConfirmatioData({
      ...dialogConfirmationData,
      id: productId,
      visible: true,
    });
  }
  function handleUpdateClick(productId: number) {
    navigate(`/admin/products/${productId}`);
  }

  function handleNewProductClick() {
    navigate("/admin/products/create");
  }

  function handleDialogConfirmationAnswer(answer: boolean, productId: number) {
    if (answer === true) {
      productservice
        .deleteById(productId)
        .then((response) => {
          setProducts([]);
          setQueryParams({ ...queryParams, page: 0 });
        })
        .catch((error) => {
          setDialogInfoData({
            visible: true,
            message: error.response.data.error,
          });
        });
    }

    setDialogConfirmatioData({ ...dialogConfirmationData, visible: false });
  }

  return (
    <main>
      <section id="product-listing-section" className="dsc-container">
        <h2 className="dsc-section-title  dsc-mb20"> Cadastro de produtos</h2>

        <div className="dsc-btn-page-container dsc-mb20">
          <div onClick={handleNewProductClick}>
            <ButtonInverse text="Novo" />
          </div>
        </div>

        <SearchBar onSearch={handleSearch} />

        <table className="dsc-table dsc-mb20 dsc-mt20">
          <thead>
            <th className="dsc-tb576">ID</th>
            <th></th>
            <th className="dsc-tb768">Preço</th>
            <th className="dsc-txt-left">Nome</th>
            <th></th>
            <th></th>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="dsc-tb576">{product.id}</td>
                <td>
                  <img
                    className="dsc-product-listing-image"
                    src={product.imgUrl}
                    alt={product.name}
                  />
                </td>
                <td className="dsc-tb768">{product.price.toFixed(2)}</td>
                <td className="dsc-txt-left">{product.name}</td>
                <td>
                  {" "}
                  <img
                    onClick={() => handleUpdateClick(product.id)}
                    className="dsc-product-listing-btn"
                    src={imagemLapis}
                    alt="Editar"
                  />{" "}
                </td>
                <td>
                  {" "}
                  <img
                    onClick={() => handleDeleteClick(product.id)}
                    className="dsc-product-listing-btn"
                    src={imagemLixo}
                    alt="Deletar"
                  />{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!isLastPage && <ButtonNextPage onNextPage={handleNextPageClick} />}
      </section>
      {dialogInfoData.visible && (
        <DialogInfo
          message={dialogInfoData.message}
          onDialogClose={handleDialogInfoClose}
        />
      )}
      {dialogConfirmationData.visible && (
        <DialogConfirmation
          id={dialogConfirmationData.id}
          message={dialogConfirmationData.message}
          onDialogAnswer={handleDialogConfirmationAnswer}
        />
      )}
    </main>
  );
}
