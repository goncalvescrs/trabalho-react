import { useEffect, useState } from "react"
import api from "../api/api"
import Produto from "../components/Produto";
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import Banner from "../components/Banner";
import { setItem } from "../services/LocalStorageFuncs";
import { ProdutoArea } from "../css/ProdutoArea";

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

            <Banner
                img={'https://tpc.googlesyndication.com/simgad/15464926730141309314?'}
                descrcao={"descricao do banner"}
            />
            
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
                    />
                )}
            </ProdutoArea>

            <Banner
                img={'https://tpc.googlesyndication.com/simgad/10894917116371607010?'}
                descrcao={"descricao do banner"}
            />

            <Rodape />
        </>
    )
}

export default Home