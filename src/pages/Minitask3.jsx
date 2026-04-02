import { useEffect, useState } from "react";

const typeColor = {
  fire: "bg-orange-500",
  water: "bg-sky-500",
  grass: "bg-emerald-500",
  electric: "bg-amber-400 text-slate-900",
  ice: "bg-cyan-300 text-slate-900",
  fighting: "bg-rose-600",
  poison: "bg-violet-600",
  ground: "bg-amber-700",
  flying: "bg-indigo-400",
  psychic: "bg-fuchsia-500",
  bug: "bg-lime-600",
  rock: "bg-amber-700",
  ghost: "bg-violet-800",
  dragon: "bg-indigo-700",
  dark: "bg-slate-700",
  steel: "bg-slate-500",
  fairy: "bg-pink-500",
  normal: "bg-slate-500",
};

function MiniTask3() {
  const [pokemonList, setPokemonList] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");
  const [searchText, setSearchText] = useState("");

  async function fetchPokemon(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  useEffect(() => {
    async function loadAll() {
      try {
        const promises = [];
        for (let i = 1; i <= 30; i++) promises.push(fetchPokemon(i));

        const results = await Promise.all(promises);
        setPokemonList(results);
        setStatus("success");
      } catch (err) {
        console.error("⚠️ Gagal mengambil data. Periksa koneksi internet kamu.", err);
        setError("⚠️ Gagal mengambil data. Periksa koneksi internet kamu.");
        setStatus("error");
      }
    }

    loadAll();
  }, []);

  const filteredPokemon = pokemonList.filter((p) =>
    p.name.toLowerCase().includes(searchText.trim().toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <header className="text-center mb-10">
          <h1 className="font-sans font-extrabold text-4xl sm:text-5xl tracking-tight">
            Pokémon <span className="text-orange-400">Pokédex</span>
          </h1>
          <p className="mt-2 text-slate-400">30 Pokémon pertama dari PokéAPI</p>
        </header>

        <div className="mb-6">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Cari nama Pokémon..."
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-slate-100 outline-none placeholder:text-slate-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30"
          />
        </div>

        {status === "loading" && (
          <div className="text-center text-slate-400 py-16">
            <div className="mx-auto mb-4 h-9 w-9 rounded-full border-4 border-slate-700 border-t-orange-400 animate-spin" />
            Mengambil data Pokémon...
          </div>
        )}

        {status === "error" && (
          <div className="rounded-lg bg-rose-950/60 px-4 py-3 text-center text-rose-300">
            {error}
          </div>
        )}

        {status === "success" && (
          <>
            {filteredPokemon.length === 0 ? (
              <div className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-8 text-center text-slate-300">
                Pokémon dengan nama "{searchText}" tidak ditemukan.
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredPokemon.map((p) => (
                  <article
                    key={p.id}
                    className="card rounded-2xl border border-slate-700 bg-slate-900 px-4 py-5 text-center shadow-lg transition hover:-translate-y-1 hover:border-orange-400"
                  >
                    <span className="block text-left text-xs font-semibold text-slate-400">
                      #{String(p.id).padStart(3, "0")}
                    </span>
                    <img
                      className="mx-auto h-24 w-24 object-contain"
                      src={p.sprites.front_default}
                      alt={p.name}
                    />
                    <div className="mt-2 text-xl font-bold capitalize text-white">{p.name}</div>
                    <div className="mt-3 flex flex-wrap justify-center gap-2">
                      {p.types.map((t) => (
                        <span
                          key={t.type.name}
                          className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${typeColor[t.type.name] ?? "bg-slate-600"}`}
                        >
                          {t.type.name}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
export default MiniTask3;