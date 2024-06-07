import { useState } from 'react';
import api from '../api/api';
import { useHistory } from 'react-router-dom'

const Cadastro = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/users', {
        nome: name,
        email: email,
        senha: password,
      });
      console.log('Usuário cadastrado com sucesso:', response.data);

      setName('');
      setEmail('');
      setPassword('');

      if (response.status === 201) {
        history.push('/Login');  // Redirecionar para a página de login após cadastro
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }
  };

  return (
    <>
      <div className="login-form">
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome:</label>
          <br />
          <input id="name" type="text" value={name} onChange={handleNameChange} />
          <p />
          <label htmlFor="email">Email:</label>
          <br />
          <input id="email" type="email" value={email} onChange={handleEmailChange} />
          <p />
          <label htmlFor="password">Senha:</label>
          <br />
          <input id="password" type="password" value={password} onChange={handlePasswordChange} />
          <p />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </>
  );
};

export default Cadastro;
