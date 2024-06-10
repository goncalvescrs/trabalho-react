import { Link } from "react-router-dom";
import "./style.css"

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="#">Home</Link></li>
          <li><Link to="#">Produtos</Link></li>
          <li><Link to="#">Sobre</Link></li>
          <li><Link to="#">Contato</Link></li>
        </ul>
      </nav>
      <div className="logo">
        <img src="logo.png" alt="Logo da loja" />
      </div>
      <div className="search-bar">
        <input type="search" placeholder="Pesquisar" />
        <button type="submit">Pesquisar</button>
      </div>
      <div className="cart">
        <img src="cart.png" alt="Carrinho de compras" />
        <span>0 itens</span>
      </div>
    </header>
  );
};

export default Header;