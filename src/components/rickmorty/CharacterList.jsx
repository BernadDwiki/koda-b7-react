import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  const fetchCharacters = async (pageNum) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${pageNum}`
      );
      if (!response.ok) throw new Error("Failed to fetch characters");
      
      const data = await response.json();
      setCharacters(data.results);
      setTotalPages(data.info.pages);
      setError(null);
    } catch (err) {
      setError(err.message);
      setCharacters([]);
    } finally {
      setLoading(false);
    }
  };

  const slugify = (str) => {
    return str
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");
  };

  if (loading) return <div className="text-center text-xl">Loading...</div>;
  if (error)
    return <div className="text-center text-xl text-red-500">Error: {error}</div>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {characters.map((character) => (
          <Link
            key={character.id}
            to={`/minitask5/characters/${character.id}/${slugify(character.name)}`}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
          >
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{character.name}</h2>
              <p className="text-gray-600">
                <span className="font-semibold">Status:</span> {character.status}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Species:</span> {character.species}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Gender:</span> {character.gender}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
}
