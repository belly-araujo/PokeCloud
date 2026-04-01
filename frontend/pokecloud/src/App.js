// serve para criar a interface do usuário 
// se comunica com o backend para exibir, criar, editar e deletar pokémons 

import { useEffect, useState } from "react";

function App() { // componente principal
  const [pokemons, setPokemons] = useState([]); 
  const [form, setForm] = useState({
    nome: "",
    tipo: "",
    nivel: "",
    hp: "",
    treinador: "",
    imagem: ""
  });
  
  const [editId, setEditId] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [message, setMessage] = useState("");

  const fetchPokemons = () => {
    fetch("http://localhost:8800/pokemons")
      .then((res) => res.json())
      .then((data) => setPokemons(data))
      .catch(() => setMessage("Erro ao carregar pokémons"));
  };

  useEffect(() => { // carrega os pokémons quando o componente é montado
    fetchPokemons();
  }, []);

  const handleChange = (e) => { //atualiza os valores do formulário conforme o usuário digita
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => { // envia os dados do formulário para o backend para criar ou atualizar um pokémon
    e.preventDefault();

    const method = editId ? "PUT" : "POST";
    const url = editId
      ? `http://localhost:8800/pokemons/${editId}`
      : "http://localhost:8800/pokemons";

    if (!form.nome || !form.tipo) {
      setMessage("Preencha os campos obrigatórios!");
      return;
    }
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
          imagem: "",
        });
        setEditId(null);
      })
      .then(() => {
        setEditId(null);
        setMessage("Pokémon salvo com sucesso!");
      })
      .catch(() => setMessage("Erro ao salvar"));

  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8800/pokemons/${id}`, {
      method: "DELETE",
    })
      .then(() => {
      fetchPokemons();
      setMessage("Pokémon deletado!");
    })
      .catch(() => setMessage("Erro ao deletar"));
  };

  const handleView = (id) => {
  fetch(`http://localhost:8800/pokemons/${id}`)
    .then((res) => res.json())
    .then((data) => setSelectedPokemon(data))
    .catch(() => setMessage("Erro ao buscar detalhes"));
};

  const handleEdit = (poke) => {
    setForm(poke);
    setEditId(poke.id);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <h1 className="text-3xl font-bold text-center text-red-500 mb-6">
        🔥💧 PokeCloud ⚡🌿
      </h1>
      {message && (
        <div className="bg-blue-100 text-blue-800 p-2 rounded mb-4 text-center">
          {message}
        </div>
      )}
      {selectedPokemon && ( // exibe os detalhes do pokemon
        <div className="bg-white p-6 rounded-xl shadow mb-6 max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-2">
            {selectedPokemon.nome}
          </h2>

          <img
            src={selectedPokemon.imagem}
            alt={selectedPokemon.nome}
            className="w-32 h-32 mx-auto mb-4"
          />

          <p><strong>Tipo:</strong> {selectedPokemon.tipo}</p>
          <p><strong>Nível:</strong> {selectedPokemon.nivel}</p>
          <p><strong>HP:</strong> {selectedPokemon.hp}</p>
          <p><strong>Treinador:</strong> {selectedPokemon.treinador}</p>

          <button
            onClick={() => setSelectedPokemon(null)}
            className="mt-4 bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded transition"
          >
            Fechar
          </button>
        </div>
      )}
      {selectedPokemon ? null : ( //se um pokemon estiver selecionado, esconde o formulário de cadastro/edição
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
          <input name="imagem" placeholder="URL da Imagem" value={form.imagem} onChange={handleChange} className="border p-2 rounded col-span-2" />
        </div>
      

        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 rounded w-full transition">
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
            <img
              src={poke.imagem}
              alt={poke.nome}
              className="w-24 h-24 mx-auto"
            />
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
                className="bg-amber-400 hover:bg-amber-500 text-gray-900 px-2 py-1 rounded transition"
              >
                Editar
              </button>

              <button
                onClick={() => handleDelete(poke.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded transition"
              >
                Deletar
              </button>
              <button
              onClick={() => handleView(poke.id)}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-2 py-1 rounded transition"
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