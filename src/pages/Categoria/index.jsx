import { useParams } from "react-router-dom"
import api from "../api/api"
import { useEffect, useState } from "react";
import Produto from "../components/Produto";
import Cabecalho from "../components/Cabecalho";
import { ProdutoArea } from "../css/ProdutoArea";

const Categoria = () => {
    const { nomeCategoria } = useParams()
    const [produtos, setProdutos] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProdutos()
    }, [])

    const fetchProdutos = async () => {
        try {
            const response = await api.get('/produto') 
            console.log('Dados API:', response.data); // so pra ver se no console se ta vindo certo
            setProdutos(response.data);
        } catch (error) {
            console.error('Erro ao buscar os produtos:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>Erro: {error}</p>;
    }

    // filtra os produtos pela categoria que vem dos parametros da URL
    const produtosDaCategoria = produtos.filter((produto) => produto.categoria === nomeCategoria);
    console.log('Produtos da categoria:', produtosDaCategoria); // ver se esta correta a filtragem 

    return (
        <>
            <Cabecalho />
            <h2>Categoria {nomeCategoria}</h2>
            <ProdutoArea>
                {produtosDaCategoria.map((produto)=>
                    <Produto
                        key={produto.id}
                        id={produto.id}
                        nome={produto.nome}
                        imgUrl={produto.imgUrl}
                        descricao={produto.descricao}
                        preco={produto.preco}
                        likes={produto.likes}
                    />
                )}
            </ProdutoArea>
        </>
    )
}

export default Categoria