import { useState } from "react"
import axios from "axios"

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
            <div>
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
                    <button>Entrar</button>
                    <p/>
                    <p>Não tem conta? <a href="#">Registrar</a></p>
                </form>
            </div>
        </>
    )
}

export default Login