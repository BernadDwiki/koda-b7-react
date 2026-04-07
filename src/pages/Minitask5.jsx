import { Routes, Route } from "react-router-dom";
import CharacterList from "../components/rickmorty/CharacterList";
import CharacterDetail from "../components/rickmorty/CharacterDetail";

export default function Minitask5() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Rick and Morty Characters</h1>
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/characters/:id/:slug" element={<CharacterDetail />} />
      </Routes>
    </div>
  );
}
