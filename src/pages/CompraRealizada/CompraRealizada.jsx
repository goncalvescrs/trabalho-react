import { Link } from "react-router-dom";
import Cabecalho from "../../components/cabecalho/Cabecalho";
import api from "../../api/api";
import { useEffect, useState } from "react";
import { getItem } from "../../services/LocalStorageFuncs";
import "./CompraRealizada.css";

const CompraRealizada = () => {
  const [pedidos, setPedidos] = useState([]);

  const TodosOsPedidos = async () => {
    const usuarioLogadoString = JSON.stringify(getItem("usuarioLogado"));
    console.log("Usuário logado como string:", usuarioLogadoString);

    // Encontre e extraia o valor do ID da string
    const userId = usuarioLogadoString.split('"id":"')[1].split('"')[0];
    console.log("ID do usuário:", userId); // so pra confirmar e ver no console

    try {
      const response = await api.get("/pedido");
      const todosPedidos = response.data;

      const pedidosDoUsuario = todosPedidos.filter(
        (pedido) => pedido.userId === userId
      );
      setPedidos(pedidosDoUsuario);
      console.log("Pedidos do usuário:", pedidosDoUsuario);
    } catch (error) {
      console.error("Erro ao recuperar pedidos do usuário:", error);
    }
  };

  useEffect(() => {
    TodosOsPedidos();
  }, []);

  return (
    <div className="compra-realizada-container">
      <Cabecalho />
      <main>
        <div className="RealPed">
          <div className="compra-realizada-header">
            <h2 className="compra-realizada-title">
              Pedido realizado com sucesso!
            </h2>
            <p className="compra-realizada-txt">
              Obrigado por fazer uma compra conosco.
            </p>
            <p className="compra-realizada-txt">Seu pedido foi processado.</p>
          </div>
          <div className="compra-realizada-actions">
            <Link to="/" className="compra-realizada-btn">
              Voltar para a página inicial
            </Link>
          </div>
        </div>
        <div className="CodPed">
        <h2 className="compra-realizada-title">
              Esses são os seus pedidos:
            </h2>
          <div className="compra-realizada-pedidos">
            {pedidos.length > 0 ? (
              <ul className="pedido-list">
                {pedidos.map((pedido) => (
                  <li key={pedido.id} className="pedido-item">
                    <hr />
                    Código Pedido: {pedido.id} <br />
                    <br /> <br />
                    <ul>
                      {pedido.itens.map((item) => (
                        <li key={item.idProduto} className="pedido-item-info">
                          Código produto: {item.idProduto} <br />
                          Quantidade: {item.quantidade}
                        </li>
                      ))}
                      <hr />
                      TOTAL: R$ {pedido.valorTotal} 
                      <br />
                    </ul>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Nenhum pedido encontrado.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CompraRealizada;
