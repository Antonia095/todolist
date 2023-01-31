import { useEffect, useState } from "react";
import Anotacoes from "./components/anotacoes";
import { listarAnotacao, adicionarAnotacao } from "./utils/api";

function App() {
  const [anotacao, setAnotacao] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    listarAnotacao(setAnotacao);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>Minhas anotações</h1>

        <div className="topo">
          <input
            type="text"
            placeholder="Adicionar anotação"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div
            className="adicionar"
            onClick={() => adicionarAnotacao(text, setText, setAnotacao)}
          >
            Adicionar
          </div>
        </div>

        <div className="lista">
          {anotacao.map((item) => (
            <Anotacoes key={item._id} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
