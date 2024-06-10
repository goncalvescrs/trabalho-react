// Importe useEffect e useState
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api";
import Banner from "../../components/Banner";
import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/Rodape";
import Produto from "../../components/CardProduto";
import "./style.css";

const Home = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        getTodosOsProdutos();
    }, []);

    const getTodosOsProdutos = async () => {
        const response = await api.get('/produto');
        setProdutos(response.data);
    };

    return (
        <>
            <Cabecalho /> {/* Corrigido: renderização do componente Cabecalho */}

            <div className="banner">
                <Banner
                    img={'https://tpc.googlesyndication.com/simgad/15464926730141309314?'}
                    descrcao={"descricao do banner"}
                />
            </div>
            
            <div className="ProdutoArea">
                {produtos.map((produto) => (
                    <Link to={`/produto/${produto.id}`} key={produto.id} className="Produto">
                        <Produto
                            id={produto.id}
                            nome={produto.nome}
                            imgUrl={produto.imgUrl}
                            descricao={produto.descricao}
                            preco={produto.preco}
                            likes={produto.likes}
                        />
                    </Link>
                ))}
            </div>

            <div className="banner">
                <Banner
                    img={'https://tpc.googlesyndication.com/simgad/10894917116371607010?'}
                    descrcao={"descricao do banner"}
                />
            </div>

            <Rodape />
        </>
    );
};

export default Home;
