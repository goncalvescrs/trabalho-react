import { Link } from "react-router-dom"

const Cabecalho = () => {
    return (
        <>
            <div>
                <h3>Ecommerce</h3>
                {/* liks das categorias */}
                <Link to={`/Login`}>Login  | </Link>
                <Link to={`/cadastro`}>Cadastro  </Link>
            </div>

            <p>=================================</p>

        </>
    )
}
export default Cabecalho