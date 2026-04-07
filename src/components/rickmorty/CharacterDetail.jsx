import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCharacterDetail();
  }, [id]);

  const fetchCharacterDetail = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      if (!response.ok) throw new Error("Failed to fetch character details");
      
      const data = await response.json();
      setCharacter(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setCharacter(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center text-xl">Loading...</div>;
  if (error)
    return <div className="text-center text-xl text-red-500">Error: {error}</div>;
  if (!character)
    return <div className="text-center text-xl">Character not found</div>;

  return (
    <div className="max-w-2xl mx-auto">
      <Link
        to="/minitask5/characters"
        className="text-blue-500 hover:underline mb-6 inline-block"
      >
        ← Back to Characters
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={character.image}
            alt={character.name}
            className="rounded-lg w-full"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{character.name}</h1>

          <div className="space-y-3">
            <div className="border-b pb-2">
              <p className="text-gray-600">
                <span className="font-semibold">Status:</span>{" "}
                <span
                  className={`px-3 py-1 rounded text-white ${
                    character.status === "Alive"
                      ? "bg-green-500"
                      : character.status === "Dead"
                      ? "bg-red-500"
                      : "bg-gray-500"
                  }`}
                >
                  {character.status}
                </span>
              </p>
            </div>

            <div className="border-b pb-2">
              <p><span className="font-semibold">Species:</span> {character.species}</p>
            </div>

            <div className="border-b pb-2">
              <p><span className="font-semibold">Gender:</span> {character.gender}</p>
            </div>

            <div className="border-b pb-2">
              <p><span className="font-semibold">Type:</span> {character.type || "Unknown"}</p>
            </div>

            <div className="border-b pb-2">
              <p><span className="font-semibold">Origin:</span> {character.origin?.name}</p>
            </div>

            <div className="border-b pb-2">
              <p><span className="font-semibold">Location:</span> {character.location?.name}</p>
            </div>

            <div>
              <p><span className="font-semibold">Created:</span> {new Date(character.created).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
