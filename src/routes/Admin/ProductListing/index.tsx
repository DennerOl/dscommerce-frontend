import "./styles.css";
import imagemLapis from "../../../assets/imagens/imagemLapis.svg";
import imagemLixo from "../../../assets/imagens/imagemLixo.svg";
import computer from "../../../assets/imagens/computer.png";

export default function ProductListing() {
  return (
    <main>
      <section id="product-listing-section" className="dsc-container">
        <h2 className="dsc-section-title  dsc-mb20"> Cadastro de produtos</h2>

        <div className="dsc-btn-page-container dsc-mb20">
          <div className="dsc-btn  dsc-btn-white"> Novo </div>
        </div>

        <form className="dsc-search-bar">
          <button>🔎︎ </button>
          <input type="text" placeholder="Nome do produto" />
          <button type="reset"> 🗙</button>
        </form>

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
            <tr>
              <td className="dsc-tb576">341</td>
              <td>
                <img
                  className="dsc-product-listing-image"
                  src={computer}
                  alt="computador"
                />
              </td>
              <td className="dsc-tb768">R$5000,00</td>
              <td className="dsc-txt-left">Computador Gamer XT Plus Ultra</td>
              <td>
                {" "}
                <img
                  className="dsc-product-listing-btn"
                  src={imagemLapis}
                  alt="Editar"
                />{" "}
              </td>
              <td>
                {" "}
                <img
                  className="dsc-product-listing-btn"
                  src={imagemLixo}
                  alt="Deletar"
                />{" "}
              </td>
            </tr>

            <tr>
              <td className="dsc-tb576">341</td>
              <td>
                <img
                  className="dsc-product-listing-image"
                  src={computer}
                  alt="computador"
                />
              </td>
              <td className="dsc-tb768">R$5000,00</td>
              <td className="dsc-txt-left">Computador Gamer XT Plus Ultra</td>
              <td>
                {" "}
                <img
                  className="dsc-product-listing-btn"
                  src={imagemLapis}
                  alt="Editar"
                />{" "}
              </td>
              <td>
                {" "}
                <img
                  className="dsc-product-listing-btn"
                  src={imagemLixo}
                  alt="Deletar"
                />{" "}
              </td>
            </tr>

            <tr>
              <td className="dsc-tb576">341</td>
              <td>
                <img
                  className="dsc-product-listing-image"
                  src={computer}
                  alt="computador"
                />
              </td>
              <td className="dsc-tb768">R$5000,00</td>
              <td className="dsc-txt-left">Computador Gamer XT Plus Ultra</td>
              <td>
                {" "}
                <img
                  className="dsc-product-listing-btn"
                  src={imagemLapis}
                  alt="Editar"
                />{" "}
              </td>
              <td>
                {" "}
                <img
                  className="dsc-product-listing-btn"
                  src={imagemLixo}
                  alt="Deletar"
                />{" "}
              </td>
            </tr>
          </tbody>
        </table>

        <div className="dsc-btn-next-page">carregar mais</div>
      </section>
    </main>
  );
}
