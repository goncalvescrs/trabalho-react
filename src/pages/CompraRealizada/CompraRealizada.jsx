import { Link } from 'react-router-dom';
import Cabecalho from "../../components/cabecalho/Cabecalho";
import Rodape from '../../components/Footer/Footer';
import api from '../../api/api';
import { useEffect, useState } from 'react';
import { getItem } from '../../services/LocalStorageFuncs';

const CompraRealizada = () => {
  const [pedidos, setPedidos] = useState([]);

  const TodosOsPedidos = async () => {

    const usuarioLogadoString = JSON.stringify(getItem('usuarioLogado'));
    console.log('Usuário logado como string:', usuarioLogadoString); 
  
    // Encontre e extraia o valor do ID da string
    const userId = usuarioLogadoString.split('"id":"')[1].split('"')[0];
    console.log('ID do usuário:', userId); // so pra confirmar e ver no console
  
    try {
      const response = await api.get('/pedido');
      const todosPedidos = response.data;

      const pedidosDoUsuario = todosPedidos.filter(pedido => pedido.userId === userId);
      setPedidos(pedidosDoUsuario);
      console.log('Pedidos do usuário:', pedidosDoUsuario);
    } catch (error) {
      console.error('Erro ao recuperar pedidos do usuário:', error);
    }
  }

  useEffect(() => {
    TodosOsPedidos();
  }, []);

  return (
    <div className="login-form">
      <div className="container">
        <Cabecalho />
        <main>
          <h2 className="login-form-title">Pedido realizado com sucesso!</h2>
          <p className="txt1">Obrigado por fazer uma compra conosco.</p>
          <p className="txt2">Seu pedido foi processado.</p>
          <Link to="/" className="login-form-btn">Voltar para a página inicial</Link>

          <div style={{color: '#fff'}}>
            {pedidos.length > 0 ? (
              <>
                <ul>
                  {pedidos.map(pedido => (
                    <li key={pedido.id}>
                      <hr />
                      Código Pedido: {pedido.id} <br />
                      TOTAL: R$ {pedido.valorTotal} <br /> <br />
                      <ul>
                        {pedido.itens.map(item => (
                          <li key={item.idProduto}>
                            Código produto: {item.idProduto} <br />
                            Quantidade: {item.quantidade}
                          </li>
                        ))}
                        <hr />
                        <br />
                      </ul>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p>Nenhum pedido encontrado.</p>
            )}
          </div>

        </main>


        <Rodape />
      </div>
    </div>
  );
};

export default CompraRealizada;