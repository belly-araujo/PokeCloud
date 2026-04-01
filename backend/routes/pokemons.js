//pokemons.js dentro de routes serve para definir as rotas(ou seja, os endpoints, que são as URLs
// que os clientes usam para acessar a API) dos pokemons.
// Ele pega as funções do controllers e associa as rotas
// usando o Express Router, que serve para
// organizar as rotas em um módulo separado, facilitando a manutenção e a escalabilidade da aplicação. 

import express from "express";
import {   
  getPokemons,
  addPokemon,
  updatePokemon,
  deletePokemon, 
  getPokemonById } from "../controllers/pokemons.js";

const router = express.Router()

router.get("/", getPokemons) //pega todos os pokemosn
router.post("/", addPokemon)
router.put("/:id", updatePokemon)
router.delete("/:id", deletePokemon)
router.get("/:id", getPokemonById); //pega um pokémon específico por ID

export default router;