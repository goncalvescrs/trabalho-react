import { Link } from "react-router-dom"

const Cabecalho = () => {
    return (
        <>
            <div>
                {/* liks das categorias */}
                <Link to='/'><h3>Ecommerce</h3></Link><br />
                <Link to='/'>Home |</Link>
                <ul>
                    <li><Link to={`/categoria/eletronico`}>Eletronico</Link></li>
                    <li><Link to={`/categoria/teclado`}>Teclado</Link></li>
                </ul>
                <Link to='/Login'> Login |</Link>
                <Link to='/cadastro'> Cadastro |</Link>
                <Link to='/carrinho'> Carrinho</Link>
            </div>
            <br />
        </>
    )
}
export default Cabecalho