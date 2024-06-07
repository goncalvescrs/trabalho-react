import { Link } from 'react-router-dom';
import { } from 'react-icons'
import { ProdutoArea } from '../css/ProdutoArea';

const Produto = ({ id, nome, imgUrl, descricao, preco, likes, clickCarrinho }) => {
    

    return (
        <>
            <div >
                <h4>{nome}</h4>
                <img src={imgUrl} alt={descricao} />
                <h4>R$ {preco}</h4>
                <h6>com pix ou 12x no cartão</h6>
                <Link to={`/produto/${id}`}>Ver mais</Link>
                {/* <button onClick={clickCarrinho}>Adicionar ao Carrinho</button> */}
                <h6>❤️ likes ({likes})</h6>
            </div>
        </>
    )
}
export default Produto