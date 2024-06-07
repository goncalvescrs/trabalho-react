import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/cadastro' component={Cadastro} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/:categoria' component={categoria} />
                {/* <Route exact path='/editar/:id' component={Editar} /> */}
            </Switch>
        </>
    )
}

export default Routes