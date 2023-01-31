import axios from "axios";

const baseUrl = "http://localhost:5000";

const listarAnotacao = (setAnotacao) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log("data:", data);
    setAnotacao(data);
  });
};

const adicionarAnotacao = (text, setText, setAnotacao) => {
  axios.post(`${baseUrl}/adicionar`, { text }).then((data) => {
    console.log(data);
    setText("");
    listarAnotacao(setAnotacao);
  });
};

export { listarAnotacao, adicionarAnotacao };
