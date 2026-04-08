import express from "express";
import {   
  getPokemons,
  addPokemon,
  updatePokemon,
  deletePokemon, 
  getPokemonById } from "../controllers/pokemons.js";

const router = express.Router()

router.get("/", getPokemons)
router.post("/", addPokemon)
router.put("/:id", updatePokemon)
router.delete("/:id", deletePokemon)
router.get("/:id", getPokemonById); 

export default router;