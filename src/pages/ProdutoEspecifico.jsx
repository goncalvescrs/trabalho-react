import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import api from "../api/api"
import { ProdutoPage } from "../css/ProdutoPage"
import Cabecalho from "../components/Cabecalho"
import { setItem, getItem } from "../services/LocalStorageFuncs"

const ProdutoEspecifico = () => {
    const { id } = useParams()
    const [produto, setProduto] = useState({})
    const [cart, setCart] = useState([])

    useEffect(() => {
        const storedCart = getItem('carrinho');
        if (storedCart) {
        setCart(storedCart);
        }
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

    const handleClickCarrinho = (obj) => {
        const element = cart.find((e) => e.id == obj.id)
        
        if (!element) {
            const updatedCart = [...cart, obj];
            setCart(updatedCart)
            setItem('carrinho', updatedCart)
        }
    }


    return (
        <>
            <Cabecalho />

            <ProdutoPage>
                <div>
                    <img src={produto.imgUrl} alt={produto.descricao} />
                    <p>{produto.nome}</p>
                    <p>{produto.descricao}</p>
                    <h5>R$ {produto.preco}</h5>
                    <h6>{produto.categoria}</h6>
                    <h6>Estoque: {produto.quantidade}</h6>
                    <button className='likes' onClick={handleLikeClick}>❤️ Curtir ({produto.likes})</button>
                    <button onClick={() => handleClickCarrinho(produto)}>Adicionar ao Carrinho</button>
                    
                    <button onClick={() => handleClickCarrinho(produto)}>
                        <a href='/carrinho'>Finalizar compra</a>
                    </button>
                </div>
            </ProdutoPage>
        </>
    )
}

export default ProdutoEspecifico