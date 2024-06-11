import { Link } from "react-router-dom";
import "./cabecalho.css";
import { TiShoppingCart } from "react-icons/ti";
import { getItem } from "../../services/LocalStorageFuncs";

const Cabecalho = () => {
  const carrinho = getItem("carrinho");

  return (
    <header>
      <div className="logo">
        <Link to="/">LGeez</Link>
      </div>
      <div className="categorias">
        <ul>
          <li>
            <Link to={"/categoria/eletronico"}>Eletronico</Link>
          </li>
          <li>
            <Link to={"/categoria/teclado"}>Teclado</Link>
          </li>
        </ul>
      </div>
      <div className="loginCadastro">
        <ul>
          <li>
            <Link to="/Login"> Login </Link>
          </li>
          <li>
            <Link to="/cadastro">Cadastro </Link>
          </li>
        </ul>
        <div className="cart">
          <Link to={"/carrinho"}>
            <TiShoppingCart />
          </Link>
          <span>{carrinho.length}</span>
        </div>
      </div>
    </header>
  );
};

export default Cabecalho;