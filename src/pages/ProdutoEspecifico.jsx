import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import api from "../api/api"
import { ProdutoArea } from "../css/ProdutoArea"

const ProdutoEspecifico = () => {
    const { id } = useParams()
    const [produto, setProduto] = useState({})

    useEffect(() => {
        getProduto()
    }, [])

    const getProduto = async () => {
        const response = await api.get(`/produto/${id}`)
        setProduto(response.data)

    }

    const handleLikeClick = async () => {
        const response = await api.patch(`/produto/${id}`, {
            likes: produto.likes + 1

        })
        window.location.reload()
    }


    return (
        <>
            <ProdutoArea>
                <div>
                    <img src={produto.imgUrl} alt={produto.descricao} />
                    <p>{produto.nome}</p>
                    <p>{produto.descricao}</p>
                    <h5>R$ {produto.preco}</h5>
                    <h6>{produto.categoria}</h6>
                    <h6>Estoque: {produto.quantidade}</h6>
                    <button onClick={handleLikeClick}>❤️ Favoritar ({produto.likes})</button>
                    <button>Adicionar ao Carrinho</button>
                    <hr />
                </div>
            </ProdutoArea>
        </>
    )
}

export default ProdutoEspecifico