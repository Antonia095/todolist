const { Router } = require("express");
const {
  encontrarAnotacao,
  adicionarAnotacao,
  atualizarAnotacao,
  excluirAnotacao,
} = require("../src/controllers/anotacaoController");

const router = Router();

router.get("/", encontrarAnotacao);
router.post("/adicionar", adicionarAnotacao);
router.post("/atualizar", atualizarAnotacao);
router.post("/excluir", excluirAnotacao);

module.exports = router;
