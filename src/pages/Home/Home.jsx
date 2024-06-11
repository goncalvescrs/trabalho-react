import { useEffect, useState } from "react";
import api from "../../api/api";
import Banner from "../../components/Banner";
import Cabecalho from "../../components/cabecalho/Cabecalho";
import Rodape from "../../components/Rodape";
import "./home.css";
import CardProduto from "../../components/CardProduto/CardProduto";
import { ProdutosStyle } from "../../css/ProdutosStyle";

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
            <Cabecalho /> {}
        <div className="teste">
            <div className="banner">
                <Banner
                    img={'https://tpc.googlesyndication.com/simgad/15464926730141309314?'}
                    descrcao={"descricao do banner"}
                />
            </div>
            
            <ProdutosStyle>
                {produtos.map((produto) => (
                    <CardProduto
                        key={produto.id}
                        id={produto.id}
                        nome={produto.nome}
                        imgUrl={produto.imgUrl}
                        descricao={produto.descricao}
                        preco={produto.preco}
                        likes={produto.likes}
                    />
                ))}
            </ProdutosStyle>

            <div className="banner">
                <Banner
                    img={'https://tpc.googlesyndication.com/simgad/10894917116371607010?'}
                    descrcao={"descricao do banner"}
                />
            </div>
        </div> 
            <Rodape />
        </>
    );
};

export default Home;
