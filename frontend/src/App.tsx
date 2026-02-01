import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resultados from "./pages/Resultados";
import Detalhe from "./pages/Detalhe";
import Cadastro from "./pages/Cadastro";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pontos" element={<Resultados />} />
        <Route path="/pontos/:id" element={<Detalhe />} />
        <Route path="/pontos/novo" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}
