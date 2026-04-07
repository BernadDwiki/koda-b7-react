import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MiniTask1 from "./pages/Minitask1";
import MiniTask2 from "./pages/Minitask2";
import MiniTask3 from "./pages/Minitask3";
import MiniTask5 from "./pages/Minitask5";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <StrictMode>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/minitask1" element={<MiniTask1 />} />
          <Route path="/minitask2" element={<MiniTask2 />} />
          <Route path="/minitask3" element={<MiniTask3 />} />
          <Route path="/minitask5/*" element={<MiniTask5 />} />
        </Routes>
      </main>
      <Footer />
    </StrictMode>
  </BrowserRouter>,
);
