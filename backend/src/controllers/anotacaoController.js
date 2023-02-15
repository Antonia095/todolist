const anotacaoModel = require("../model/anotacaoModel");

module.exports.encontrarAnotacao = async (req, res) => {
  const anotacao = await anotacaoModel.find();
  res.send(anotacao);
};

module.exports.adicionarAnotacao = async (req, res) => {
  const { text } = req.body;

  anotacaoModel
    .create({ text })
    .then((data) => {
      console.log("Adicionado com sucesso!");
      res.send(data);
    })
    .catch((err) => console.log(err));
};

module.exports.atualizarAnotacao = async (req, res) => {
  const { _id, text } = req.body;

  anotacaoModel
    .findByIdAndUpdate(_id, { text })
    .then(() => res.send("Anotação atualizada com sucesso!"))
    .catch((err) => console.log(err));
};

module.exports.excluirAnotacao = async (req, res) => {
  const { _id } = req.body;

  anotacaoModel
    .findByIdAndDelete(_id)
    .then(() => res.send("Anotação excluida com sucesso!"))
    .catch((err) => console.log(err));
};
