import './styles.css'
export default function SearchBar() {
  return (

    <form className="dsc-search-bar">
      <button>🔎︎ </button>
      <input type="text" placeholder="Nome do produto" />
      <button type="reset"> 🗙</button>

    </form>

  );
}
