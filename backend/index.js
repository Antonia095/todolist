const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes/rotas");

const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.port || 3000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`Conectando ao mongodb...`))
  .catch((err) => console.log(err));

app.use(routes);

app.listen(PORT, () => console.log(`Lendo a ${PORT}`));
