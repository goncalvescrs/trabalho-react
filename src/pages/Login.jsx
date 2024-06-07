import { useState } from "react"
import axios from "axios"
import { Link } from 'react-router-dom';

const Login = () => {
    const [login, setLogin] = useState({email: '', senha:''})

    const handleChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
      }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('', login)
            alert('Login realizado com sucesso!')
        } catch (error) {
            console.error('Erro ao realizar login', error)
        }
    }
    
    const handleZerar = () => {
       setLogin('')
    }
    return (
        <>
            <div className="login-form">
                <form onSubmit={handleSubmit} onReset={(e) => {
                    handleZerar()
                }}>
                    <h2>Acesse o sistema</h2>
                    <input required type="email" name="email" 
                    placeholder="E-mail" onChange={handleChange}/>
                    <p/>
                    <input required type="password" name="senha" 
                    placeholder="Senha" onChange={handleChange}/>
                    <p/>
                    <label>
                        <input type="checkbox"/>
                        Lembre de mim
                    </label>
                    <p/>
                    <a href="#">Esqueceu a senha?</a>
                    <p/>
                    <button onClick={handleSubmit}>Entrar</button>
                    <br/>
                    Não tem conta? <Link to='/Cadastro'>Registrar</Link>
                </form>
            </div>
        </>
    )
}

export default Login