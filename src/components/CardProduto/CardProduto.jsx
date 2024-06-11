import { LiaShippingFastSolid } from 'react-icons/lia';
import { CiHeart } from "react-icons/ci";

const CardProduto = ({ id, nome, imgUrl, descricao, preco, likes }) => {
    

    return (
        <>
            <div>
                <div>
                <a href={`/produto/${id}`}/>
                <img src={imgUrl} alt={descricao} />
                </div>
                <div>\
                <span>
                    <h2>{nome}</h2>
                    <h4>R${preco}</h4>
                    <p>No pix ou 12x no cartão</p>
                    <h5>Frete Grátis <LiaShippingFastSolid/></h5>
                    <h6><CiHeart/> Curtidas ({likes})</h6>
                </span>
                </div>
            </div>
        </>
    )
}
export default CardProduto