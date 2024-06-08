import { Link } from 'react-router-dom';
import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';

const CompraRealizada = () => {
  return (
    <div className="login-form">
      <div className="container">
        <Cabecalho />
        <main>
          <h2 className="login-form-title">Pedido realizado com sucesso!</h2>
          <p className="txt1">Obrigado por fazer uma compra conosco.</p>
          <p className="txt2">Seu pedido foi processado.</p>
          <Link to="/" className="login-form-btn">Voltar para a página inicial</Link>
        </main>
        <Rodape />
      </div>
    </div>
  );
};

export default CompraRealizada;