import React, { useEffect, useState } from "react"
import { getItem, setItem } from "../services/LocalStorageFuncs"
import { CartArea, DivFinal } from "../css/CartArea"
import Cabecalho from "../components/Cabecalho"
import Rodape from "../components/Rodape"
import { useHistory } from "react-router-dom"
import api from "../api/api"

const Carrinho = () => {
    const history = useHistory();
    const [data, setData] = useState(() => {
        const initialData = getItem('carrinho') || [];
        return (
            initialData.map(e => ({ ...e, qtdItens: e.qtdItens || 1 }))
        )
            
    });

    useEffect(() => {
        setItem('carrinho', data);
    }, [data]);

    const removeItem = (obj) => {
        const arrFilter = data.filter((e) => e.id !== obj.id)
        setData(arrFilter)
        setItem('carrinho', arrFilter)
    }
    
    const subTotal = data.reduce((acc, cur) => acc + cur.preco, 0)

    const aumentar = (id) => {
        setData(data.map(e =>
            e.id === id ? { ...e, qtdItens: e.qtdItens + 1 } : e
        ));
    };

    const diminuir = (id) => {
        setData(data.map(e =>
            e.id === id ? { ...e, qtdItens: Math.max(e.qtdItens - 1, 1) } : e
        ));
    };

    const finalizarCompra = async () => {
        const usuarioLogado = getItem('usuarioLogado');
            
        if (!usuarioLogado) {
            alert('Você precisa estar logado para finalizar a compra.');
            history.push('/login'); // Redirecionar para a página de login
            return;
        }

        const usuarioLogadoString = JSON.stringify(getItem('usuarioLogado'));
        // console.log('Usuário logado como string:', usuarioLogadoString); 

        // Encontre e extraia o valor do ID da string
        const userId = usuarioLogadoString.split('"id":"')[1].split('"')[0];
        // console.log('ID do usuário:', userId); // so pra confirmar e ver no console

        const pedido = {
            valorTotal: subTotal,
            userId: userId,
            itens: data.map(e => ({ idProduto: e.id, quantidade: e.qtdItens }))
        };

        try {
            const response = await api.post('/pedido', pedido);
            console.log('Pedido criado com sucesso:', response.data);
            // Limpar o carrinho após finalizar a compra
            setData([]);
            history.push('/compra-realizada'); // Redirecionar para a página de confirmação de compra
        } catch (error) {
            console.error('Erro ao criar pedido:', error);
        }
    };

    return (
        <>
            <Cabecalho />
            <h1>Carrinho</h1>
            <CartArea>
                {data.length === 0 ? (
                    <>
                        <p>O carrinho está vazio.</p>
                        <a href='/'><h2>Voltar a pagina principal</h2></a>
                    </>
                ) : (
                    data.map((e) => (
                        <div key={e.id}>
                            <img src={e.imgUrl} alt={e.descricao} />
                            <h4>{e.nome}</h4>
                            <h5>R$ {e.preco}</h5>
                            <span>
                                <label htmlFor={`quantidade-${e.id}`}>Quantidade: </label>
                                <input onClick={() => diminuir(e.id)} type="button" value="-" />
                                <input
                                    id={`quantidade-${e.id}`}
                                    name="quantidade"
                                    className="text"
                                    size="1"
                                    type="text"
                                    maxLength="5"
                                    value={e.qtdItens}
                                    readOnly
                                />
                                <input onClick={() => aumentar(e.id)} type="button" value="+" />
                            </span>
                            <button onClick={() => removeItem(e)}>x</button>
                        </div>
                    ))
                )}
            </CartArea>
            {data.length > 0 && (
                <DivFinal>
                    <h3>{`SubTotal: R$ ${subTotal.toFixed(2)}`}</h3>
                    <br />
                    <button onClick={finalizarCompra}>Finalizar Compra</button>
                </DivFinal>
            )}
            <Rodape />
        </>
    )
}

export default Carrinho