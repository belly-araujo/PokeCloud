// import { useEffect, useState } from "react";

// function App() {
//   const [pokemons, setPokemons] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8800/pokemons")
//       .then((res) => res.json())
//       .then((data) => setPokemons(data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-4xl font-bold text-center text-red-500 mb-8">
//         🔥 Pokédex
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {pokemons.map((poke) => (
//           <div
//             key={poke.id}
//             className="bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition"
//           >
            
//             <h2 className="text-xl font-bold text-gray-800">
//               {poke.nome}
//             </h2>

//             <p className="text-gray-600">Tipo: {poke.tipo}</p>
//             <p className="text-gray-600">Nível: {poke.nivel}</p>
//             <p className="text-gray-600">HP: {poke.hp}</p>

//             <p className="text-sm text-gray-400 mt-2">
//               Treinador: {poke.treinador}
//             </p>
//           </div>
//         ))}
//       </div>
//       <footer className="text-center text-gray-400 mt-10">
//   © 2026 - Desenvolvido por Isabelly
// </footer>
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [form, setForm] = useState({
    nome: "",
    tipo: "",
    nivel: "",
    hp: "",
    treinador: "",
  });
  const [editId, setEditId] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const fetchPokemons = () => {
    fetch("http://localhost:8800/pokemons")
      .then((res) => res.json())
      .then((data) => setPokemons(data))
      .catch(() => alert("Erro ao carregar pokémons"));
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const method = editId ? "PUT" : "POST";
    const url = editId
      ? `http://localhost:8800/pokemons/${editId}`
      : "http://localhost:8800/pokemons";

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then(() => {
        fetchPokemons();
        setForm({
          nome: "",
          tipo: "",
          nivel: "",
          hp: "",
          treinador: "",
        });
        setEditId(null);
      })
      .catch(() => alert("Erro ao salvar"));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8800/pokemons/${id}`, {
      method: "DELETE",
    })
      .then(() => fetchPokemons())
      .catch(() => alert("Erro ao deletar"));
  };

  const handleEdit = (poke) => {
    setForm(poke);
    setEditId(poke.id);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-red-500 mb-6">
        🔥 Pokédex
      </h1>
      {selectedPokemon && (
        <div className="bg-white p-6 rounded-xl shadow mb-6 max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-2">
            {selectedPokemon.nome}
          </h2>

          <p><strong>Tipo:</strong> {selectedPokemon.tipo}</p>
          <p><strong>Nível:</strong> {selectedPokemon.nivel}</p>
          <p><strong>HP:</strong> {selectedPokemon.hp}</p>
          <p><strong>Treinador:</strong> {selectedPokemon.treinador}</p>

          <button
            onClick={() => setSelectedPokemon(null)}
            className="mt-4 bg-gray-500 text-white px-3 py-1 rounded"
          >
            Fechar
          </button>
        </div>
      )}
      {selectedPokemon ? null : (
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-xl shadow mb-6 max-w-xl mx-auto"
      >
        <h2 className="text-xl font-bold mb-4">
          {editId ? "Editar Pokémon" : "Cadastrar Pokémon"}
        </h2>

        <div className="grid grid-cols-2 gap-2">
          <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} className="border p-2 rounded" />
          <input name="tipo" placeholder="Tipo" value={form.tipo} onChange={handleChange} className="border p-2 rounded" />
          <input name="nivel" placeholder="Nível" value={form.nivel} onChange={handleChange} className="border p-2 rounded" />
          <input name="hp" placeholder="HP" value={form.hp} onChange={handleChange} className="border p-2 rounded" />
          <input name="treinador" placeholder="Treinador" value={form.treinador} onChange={handleChange} className="border p-2 rounded col-span-2" />
        </div>
      

        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded w-full">
          {editId ? "Atualizar" : "Cadastrar"}
        </button>
      </form>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemons.map((poke) => (
          <div
            key={poke.id}
            className="bg-white p-4 rounded-xl shadow"
          >
            <h2 className="font-bold text-lg">{poke.nome}</h2>
            <p>Tipo: {poke.tipo}</p>
            <p>Nível: {poke.nivel}</p>
            <p>HP: {poke.hp}</p>
            <p className="text-sm text-gray-500">
              Treinador: {poke.treinador}
            </p>

            <div className="flex gap-2 mt-3">
              <button
                onClick={() => handleEdit(poke)}
                className="bg-yellow-400 px-2 py-1 rounded"
              >
                Editar
              </button>

              <button
                onClick={() => handleDelete(poke.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Deletar
              </button>
              <button
              onClick={() => setSelectedPokemon(poke)}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              Ver detalhes
            </button>
            </div>
          </div>
        ))}
      </div>

      <footer className="text-center text-gray-400 mt-10">
        © 2026 - Desenvolvido por Isabelly
      </footer>
    </div>
  );
}

export default App;