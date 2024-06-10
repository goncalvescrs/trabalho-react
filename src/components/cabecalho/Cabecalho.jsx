import { Link } from "react-router-dom";
import "./cabecalho.css"

const Cabecalho = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to={'/categoria/eletronico'}>Eletronico</Link></li>
          <li><Link to={'/categoria/teclado'}>Teclado</Link></li>
        </ul>
        <ul>
          <li><Link to='/Login'> Login |</Link></li>
          <li><Link to='/cadastro'> Cadastro |</Link></li>
          <li><Link to='/carrinho'> Carrinho</Link></li>
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

export default Cabecalho;