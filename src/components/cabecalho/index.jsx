import { Link } from "react-router-dom";
import "./style.css";

const Cabecalho = () => {
    return (
        <header className="cabecalho">
            <nav>
                <ul className="categorias">
                    <li><Link to="/categoria/eletronicos">Eletrônicos</Link></li>
                    <li><Link to="/categoria/roupas">Roupas</Link></li>
                    <li><Link to="/categoria/livros">Livros</Link></li>
                    <li><Link to="/categoria/alimentos">Alimentos</Link></li>
                    {/* Adicione mais categorias conforme necessário */}
                </ul>
            </nav>
        </header>
    );
};

export default Cabecalho;
