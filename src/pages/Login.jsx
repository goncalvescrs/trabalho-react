import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState({ email: "", senha: "" });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("", login);
      alert("Login realizado com sucesso!");
    } catch (error) {
      console.error("Erro ao realizar login", error);
    }
  };

  const handleZerar = () => {
    setLogin("");
  };

  return (
    <>
      <div className="login-form">
        <form onSubmit={handleSubmit} onReset={handleZerar}>
          <h2 className="title">Acesse o sistema</h2>
          <input
            required
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handleChange}
            className="input-field"
          />
          <p />
          <input
            required
            type="password"
            name="senha"
            placeholder="Senha"
            onChange={handleChange}
            className="input-field"
          />
          <p />
          <label className="checkbox-label">
            <input type="checkbox" />
            Lembre de mim
          </label>
          <p />
          <a href="#" className="forgot-password">
            Esqueceu a senha?
          </a>
          <p />
          <div className="container-login-form-btn">
            <button className="login-form-btn">Login</button>
          </div>
          <br />
          Não tem conta?{" "}
          <Link to="/Cadastro" className="register-link">
            Registrar
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
