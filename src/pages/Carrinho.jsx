import React, { useState } from "react"
import { getItem } from "../services/LocalStorageFuncs"

const Carrinho = () => {
    const [data, setData]= useState(getItem('carrinho') || [])

        // if (element) {
        //     const arrFilter = cart.filter((e) => e.id !== obj.id)
        //     setCart(arrFilter)
        //     setItem('carrinho', arrFilter)
        // } else {
        //     setCart([...cart, obj])
        //     setItem('carrinho', [...cart, obj])
        // }

    return (
        <>
            <h1>cart</h1>
            <div>
                {
                    data.map((e) => (
                        <div key={e.id}>
                            <h4>{e.nome}</h4>
                            <img src={e.imgUrl} alt={e.descricao} />
                            <br />
                            <p>{e.nome}</p>
                            <h6>❤️ likes ({e.likes})</h6>
                            <h5>R$ {e.preco}</h5>
                            <button>Excluir</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Carrinho