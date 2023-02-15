const mongoose = require("mongoose");

const anotacaoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Anotação", anotacaoSchema);
