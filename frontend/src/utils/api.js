import axios from "axios";

const baseUrl = "http://localhost:5000";

const listarAnotacao = (setAnotacao) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log("data:", data);
    setAnotacao(data);
  });
};

const adicionarAnotacao = (text, setText, setAnotacao) => {
  axios
    .post(`${baseUrl}/adicionar`, { text })
    .then((data) => {
      console.log(data);
      setText("");
      listarAnotacao(setAnotacao);
    })
    .catch((err) => console.log(err));
};

const atualizarAnotacao = (id, text, setAnotacao, setText, setAtualiza) => {
  axios
    .post(`${baseUrl}/atualizar`, { _id: id, text })
    .then((data) => {
      setText("");
      setAtualiza(false);
      listarAnotacao(setAnotacao);
    })
    .catch((err) => console.log(err));
};

const deletarAnotacao = (_id, setAnotacao) => {
  axios
    .post(`${baseUrl}/deletar`, { _id })
    .then((data) => {
      console.log(data);
      listarAnotacao(setAnotacao);
    })
    .catch((err) => console.log(err));
};

export {
  listarAnotacao,
  adicionarAnotacao,
  atualizarAnotacao,
  deletarAnotacao,
};
