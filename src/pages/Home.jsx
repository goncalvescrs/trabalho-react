import { useEffect, useState } from "react"
import api from "../api/api"
import Produto from "../components/Produto"
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import Banner from "../components/Banner"
import { setItem } from "../services/LocalStorageFuncs";
import { ProdutoArea } from "../css/ProdutoArea";

const Home = () => {
    const [produtos, setProdutos] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        getTodosOsProdutos()
    }, [])

    const getTodosOsProdutos = async () => {
        
        const response = await api.get('/produto')
        setProdutos(response.data)
    }

    const handleClickCarrinho = (obj) => {
        const element = cart.find((e) => e.id == obj.id)
        
        if (!element) {
            // const updatedCart = [...cart, obj];
            setCart([...cart, obj])
            setItem('carrinho', [...cart, obj])
        }
    }

    return (
        <>
            <Cabecalho />

            <Banner />
            
            <ProdutoArea>
                {produtos.map((produto)=>
                    <Produto
                        key={produto.id}
                        id={produto.id}
                        nome={produto.nome}
                        imgUrl={produto.imgUrl}
                        descricao={produto.descricao}
                        preco={produto.preco}
                        likes={produto.likes}
                        clickCarrinho={()=> handleClickCarrinho(produto)}
                    />
                )}
            </ProdutoArea>

            <Rodape />
        </>
    )
}

export default Home