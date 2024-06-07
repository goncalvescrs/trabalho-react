import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import ProdutoEspecifico from '../pages/ProdutoEspecifico'
import Carrinho from '../pages/Carrinho'
import Categoria from '../pages/Categoria'
import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'

const Routes = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/cadastro' component={Cadastro} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/:categoria' component={Categoria} />
                    <Route exact path='/produto/:id' component={ProdutoEspecifico} />
                    <Route exact path='/carrinho' component={Carrinho} />
                    {/* <Route exact path='/fim' component={PedidoRealizado} /> */}
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Routes