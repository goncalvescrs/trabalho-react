import { Link } from "react-router-dom"

const Cabecalho = () => {
    return (
        <>
            <div>
                {/* liks das categorias */}
                <Link to='/'><h3>Ecommerce</h3></Link><br />
                <Link to='/'>Home |</Link>
                <Link to='/Login'> Login |</Link>
                <Link to='/cadastro'> Cadastro |</Link>
                <Link to='/carrinho'> Carrinho</Link>
            </div>
            <br />
        </>
    )
}
export default Cabecalho