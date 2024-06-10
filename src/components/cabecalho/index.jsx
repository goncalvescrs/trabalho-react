import "./style.css"

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Produtos</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
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