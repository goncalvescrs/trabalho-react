import { Link } from 'react-router-dom';

const Produto = ({ id, nome, imgUrl, descricao, preco, categoria }) => {

    return (
        <>
            <div >
                <Link to={`/produto/${id}`}>
                    <img src={imgUrl} alt={descricao} />
                    <br />
                    <p>{nome}</p>
                </Link>
                <h5>R$ {preco}</h5>
                <h6>{categoria}</h6>
                <button>Adicionar ao Carrinho</button>
                
                <hr />
            </div>
        </>
    )
}
export default Produto
