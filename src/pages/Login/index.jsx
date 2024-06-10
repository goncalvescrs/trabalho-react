import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../api/api";
import "./style.css"

const Login = () => {
  const history = useHistory();

  const [login, setLogin] = useState({ email: "", senha: "" });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var email = "";
    var senha = "";
    
    try {
      const { data } = await api.get("/users");

      for (let i = 0; i < data.length; i++) {
        console.log(data[i].email);
        if (login.email == data[i].email && login.senha == data[i].senha) {
          email = data[i].email;
          senha = data[i].senha;
        }
      }

      if (email != "" && senha != "") {
        history.push("/");
      } else alert("Login não encontrado!");

    } catch (error) {
      console.error("Erro ao realizar login", error);
    }
  };

  const handleZerar = () => {
    setLogin({ email: "", senha: "" });
  };

  const inputFocus = (title) => {
    return <span className="focus-input" data-placeholder={title}></span>;
  };

  return (
    <div className="container-login">
      <div className="wrap-login">
        <form onSubmit={handleSubmit} onReset={handleZerar}>
          <h2 className="login-form-title">
            <img src="" alt="" />
            Entre com seu Login
          </h2>
          <div className="wrap-input">
            <input
              required
              type="email"
              name="email"
              onChange={handleChange}
              className="input"
              value={login.email}
            />
            {inputFocus("E-mail")}
          </div>
          <div className="wrap-input">
            <input
              required
              type="password"
              name="senha"
              onChange={handleChange}
              className="input"
              value={login.senha}
            />
            {inputFocus("Senha")}
          </div>
          <div className="text-center">
            <a href="#" className="txt2">
              Esqueceu a senha?
            </a>

            <span className="txt1">
              Não tem conta?
              <Link to="/Cadastro" className="txt2">
                Registrar
              </Link>
            </span>
          </div>
          <div className="container-login-form-btn">
            <button type="submit" className="login-form-btn">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
