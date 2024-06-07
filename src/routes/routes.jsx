import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/Cadastro' component={Cadastro} />
                <Route exact path='/Login' component={Login} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;