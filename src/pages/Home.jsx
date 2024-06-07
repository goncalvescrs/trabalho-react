import { useEffect, useState } from "react"
import api from "../api/api"
import Produto from "../components/Produto"

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
        </>
    )
}

export default Home