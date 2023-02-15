import { useEffect, useState } from "react";
import Anotacoes from "./components/anotacoes";
import {
  listarAnotacao,
  adicionarAnotacao,
  atualizarAnotacao,
  deletarAnotacao,
} from "./utils/api";

function App() {
  const [anotacao, setAnotacao] = useState([]);
  const [text, setText] = useState("");
  const [isAtualizado, setAtualizar] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    listarAnotacao(setAnotacao);
  }, []);

  const atualiza = (_id, text) => {
    setAtualizar(true);
    setText(text);
    setId(_id);
  };

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
            onClick={
              isAtualizado
                ? () =>
                    atualizarAnotacao(
                      id,
                      text,
                      setAnotacao,
                      setText,
                      setAtualizar
                    )
                : () => adicionarAnotacao(text, setText, setAnotacao)
            }
          >
            {isAtualizado ? "Atualizar" : "Adicionar"}
          </div>
        </div>

        <div className="lista">
          {anotacao.map((item) => (
            <Anotacoes
              key={item._id}
              text={item.text}
              atualiza={() => atualiza(item._id, item.text)}
              deletarAnotacao={() => deletarAnotacao(item._id, setAnotacao)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
