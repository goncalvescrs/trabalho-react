import { useEffect, useState } from "react"
import api from "../api/api"
import Produto from "../components/Produto"
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";

const Home = () => {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        getTodosOsProdutos()
    }, [])

    const getTodosOsProdutos = async () => {
        
        const response = await api.get('/produto')
        setProdutos(response.data)
    }

    return (
        <>
            <Cabecalho />

            
            {produtos.map((produto)=>
                <Produto
                    key={produto.id}
                    id={produto.id}
                    nome={produto.nome}
                    imgUrl={produto.imgUrl}
                    descricao={produto.descricao}
                    preco={produto.preco}
                    categoria={produto.categoria}
                    quantidade={produto.quantidade}
                    likes={produto.likes}
                />
            )}

            <Rodape />
        </>
    )
}

export default Home