import { useEffect, useState } from "react";
import api from "../../api/api";
import Banner from "../../components/Banner";
import Cabecalho from "../../components/cabecalho/Cabecalho";
import Footer from "../../components/Footer/Footer";
import "./home.css";
import CardProduto from "../../components/CardProduto/CardProduto";

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
            <Cabecalho />
            <div className="teste">
                <div className="banner">
                    <Banner
                        img={'https://tpc.googlesyndication.com/simgad/15464926730141309314?'}
                        descrcao={"descricao do banner"}
                    />
                </div>
                
                <div className="style-produto">
                    {produtos
                        .filter(produto => produto.quantidade > 0)
                        .map((produto) => (
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
                </div>

                <div className="banner">
                    <Banner
                        img={'https://tpc.googlesyndication.com/simgad/10894917116371607010?'}
                        descrcao={"descricao do banner"}
                    />
                </div>
            </div> 
            <Footer/>
        </>
    );
};

export default Home;
