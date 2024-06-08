
import { useState } from "react"
import { useHistory } from "react-router-dom"
import api from "../api/api"

const Login = () => {
    const [login, setLogin] = useState({email: '', senha:''})
    const history = useHistory()

const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
    e.preventDefault()
        try {
            const response = await api.get('/users')

            const user = response.data.filter(data => data.email === login.email && data.senha === login.senha)

            if (user.length > 0) {
                alert('Login realizado com sucesso!')
                history.push('/')
            } else {
                alert('Usuário ou senha inválidos')
                handleZerar()
            }

        } catch (error) {
            console.error('Erro ao realizar login', error)
        }
    }
    
    const handleZerar = () => {
        setLogin({
        email: '',
        senha: ''
    })
    }
    return (
        <>
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <h2 className="form-title">Acesse o sistema</h2>
                    <input className="form-input" required value={login.email} type="email" name="email" 
                    placeholder="E-mail" onChange={handleChange}/>
                    <p/>
                    <input className="form-input" required value={login.senha} type="password" name="senha" 
                    placeholder="Senha" onChange={handleChange}/>
                    <p/>
                    <label>
                        <input type="checkbox"/>
                        Lembre de mim
                    </label>
                    <p/>
                    <a href="#">Esqueceu a senha?</a>
                    <p/>
                    <button type="submit">Entrar</button>
                    <p/>
                    <p>Não tem conta? <a href="/cadastro">Registrar</a></p>
                </form>
            </div>
        </>
    )
}

export default Login