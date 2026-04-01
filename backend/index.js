//serve para iniciar o servidor e configurar as rotas da API

import express from "express" // utilizado para criar o servidor e definir as rotas
import pokemonRoutes from "./routes/pokemons.js"
import cors from "cors" // utilizado para permitir que o frontend acesse a API do backend, mesmo que estejam em domínios diferentes (CORS - Cross-Origin Resource Sharing)

const app = express()

app.use(express.json())
app.use(cors())

app.use("/pokemons", pokemonRoutes)

app.listen(8800, () => {
  console.log("Servidor rodando na porta 8800");
});