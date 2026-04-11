import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MiniTask1 from "./pages/Minitask1";
import MiniTask2 from "./pages/Minitask2";
import MiniTask3 from "./pages/Minitask3";
import MiniTask5 from "./pages/Minitask5";
import Fetch from "./pages/Fetch";
import Login from "./pages/Login";
import EditProfile from "./pages/EditProfile";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/minitask1" element={<ProtectedRoute><MiniTask1 /></ProtectedRoute>} />
          <Route path="/minitask2" element={<ProtectedRoute><MiniTask2 /></ProtectedRoute>} />
          <Route path="/minitask3" element={<ProtectedRoute><MiniTask3 /></ProtectedRoute>} />
          <Route path="/minitask5/*" element={<ProtectedRoute><MiniTask5 /></ProtectedRoute>} />
          <Route path="/fetch" element={<ProtectedRoute><Fetch /></ProtectedRoute>} />
          <Route path="/edit-profile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;