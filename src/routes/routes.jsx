import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Carrinho from '../pages/Carrinho'
import Categoria from '../pages/Categoria'
import CompraRealizada from '../pages/CompraRealizada'
import Home from '../pages/Home'
import ProdutoEspecifico from '../pages/ProdutoEspecifico'

import Cadastro from '../pages/Cadastro'
import Login from '../pages/Login'

const Routes = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/cadastro' component={Cadastro} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/categoria/:id' component={Categoria} />
                    <Route exact path='/produto/:id' component={ProdutoEspecifico} />
                    <Route exact path='/carrinho' component={Carrinho} />
                    <Route exact path="/compra-realizada" component={CompraRealizada} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Routes