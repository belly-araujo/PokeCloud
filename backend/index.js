import express from "express"
import pokemonRoutes from "./routes/pokemons.js"
import cors from "cors" 

const app = express()

app.use(express.json())
app.use(cors())

app.use("/pokemons", pokemonRoutes)

app.listen(8800, () => {
  console.log("Servidor rodando na porta 8800");
});