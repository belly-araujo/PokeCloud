//Define a lógica de como buscar os usuários no banco.

import { db } from "../db.js";

export const getPokemons = (_, res) => {
  const q = "SELECT * FROM pokemons";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const addPokemon = (req, res) => {
  const q = "INSERT INTO pokemons (nome, tipo, nivel, hp, treinador) VALUES (?)";

  const values = [
    req.body.nome,
    req.body.tipo,
    req.body.nivel,
    req.body.hp,
    req.body.treinador,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Pokémon criado com sucesso!");
  });
};

export const updatePokemon = (req, res) => {
  const q = `
    UPDATE pokemons 
    SET nome=?, tipo=?, nivel=?, hp=?, treinador=?
    WHERE id=?
  `;

  const values = [
    req.body.nome,
    req.body.tipo,
    req.body.nivel,
    req.body.hp,
    req.body.treinador,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Pokémon atualizado!");
  });
};

export const deletePokemon = (req, res) => {
  const q = "DELETE FROM pokemons WHERE id=?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Pokémon deletado!");
  });
};