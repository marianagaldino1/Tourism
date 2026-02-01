import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Alert from "../components/Alert";

export default function Home() {
  const [busca, setBusca] = useState("");
  const [erro, setErro] = useState<string | null>(null);

  const navigate = useNavigate();

  function handleBuscar() {
    if (!busca.trim()) {
      setErro("Digite algum termo para realizar a busca.");
      return;
    }

    setErro(null);
    navigate(`/pontos?busca=${encodeURIComponent(busca)}`);
  }

  return (
    <div className="container">
      <Navbar showCadastro={true} />

      <div className="searchbox">
        <input
          placeholder="Digite um termo para buscar um ponto turístico..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />

        <button className="btn" onClick={handleBuscar}>
          Buscar
        </button>
      </div>

      {erro && <Alert type="warning" message={erro} />}
    </div>
  );
}
