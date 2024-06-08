import { LiaShippingFastSolid } from 'react-icons/lia';
import { CiHeart } from "react-icons/ci";

const Produto = ({ id, nome, imgUrl, descricao, preco, likes }) => {
    

    return (
        <>
            <div>
                <a href={`/produto/${id}`}/>
                <img src={imgUrl} alt={descricao} />
                <span>
                    <h2>{nome}</h2>
                    <h4>R${preco}</h4>
                    <p>No pix ou 12x no cartão</p>
                    <h5>Frete Grátis <LiaShippingFastSolid/></h5>
                    <h6><CiHeart/> Curtidas ({likes})</h6>
                </span>
            </div>
        </>
    )
}
export default Produto