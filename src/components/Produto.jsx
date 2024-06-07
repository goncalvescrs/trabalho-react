import { Link } from 'react-router-dom';
import { } from 'react-icons'

const Produto = ({ id, nome, imgUrl, descricao, preco, likes, clickCarrinho }) => {
    

    return (
        <>
            <div className='produto_area'>
                <Link to={`/produto/${id}`}>
                    <img src={imgUrl} alt={descricao} />
                    <br />
                    <p>{nome}</p>
                </Link>
                <h6>❤️ likes ({likes})</h6>
                <h5>R$ {preco}</h5>
                <h6>com pix ou 12x no cartão</h6>
                <button onClick={clickCarrinho}>Adicionar ao Carrinho</button>
                <p>---------------------------------</p>
            </div>
        </>
    )
}
export default Produto