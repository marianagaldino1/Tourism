import { useEffect, useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Alert from "../components/Alert";
import { listarPontos } from "../services/pontoService";
import type { PontoTuristico } from "../types/PontoTuristico";

export default function Resultados() {
const [params] = useSearchParams();
const [busca, setBusca] = useState(params.get("busca") ?? "");
const [buscaQuery, setBuscaQuery] = useState(params.get("busca") ?? ""); // usado para efetuar a busca
const navigate = useNavigate();

  const [pontos, setPontos] = useState<PontoTuristico[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagina, setPagina] = useState(1);
  const [erro, setErro] = useState<string | null>(null);
  const [totalItens, setTotalItens] = useState(0);

  const tamanhoPagina = 10;
  const totalPaginas = Math.ceil(totalItens / tamanhoPagina);

useEffect(() => {
  setLoading(true);
  setErro(null);

  listarPontos(pagina, tamanhoPagina, buscaQuery)
    .then((res) => {
      setPontos(Array.isArray(res.itens) ? res.itens : []);
      setTotalItens(res.total ?? 0);
    })
    .catch(() => {
      setErro("Erro ao carregar os pontos turísticos. Tente novamente.");
      setPontos([]);
      setTotalItens(0);
    })
    .finally(() => setLoading(false));
}, [buscaQuery, pagina]);


  return (
    <div className="container">
      <Navbar showCadastro={true}/>

      <div className="searchbox">
  <input
    value={busca}
    onChange={(e) => setBusca(e.target.value)}
    placeholder="Digite um termo para buscar um ponto turístico..."
  />
  <button
    className="btn"
    onClick={() => {
      setPagina(1);             // volta para a primeira página
      setBuscaQuery(busca);     // atualiza a query real
      navigate(`?busca=${encodeURIComponent(busca)}`); // atualiza URL
    }}
  >
    Buscar
  </button>
</div>


      {erro && <Alert type="error" message={erro} />}

      {loading && <p>Carregando...</p>}

      {!loading && !erro && pontos.length === 0 && (
        <Alert
          type="info"
          message="Não encontrei nenhum resultado para a sua busca :("
        />
      )}

      {!loading &&
        !erro &&
        pontos.map((p) => (
          <div key={p.id} className="lista-item">
            <h4>{p.nome}</h4>
            <p>{p.descricao}</p>
            <Link className="btn" to={`/pontos/${p.id}`}>
              Ver detalhes
            </Link>
          </div>
        ))}

      <div className="paginacao">
        <Link className="btn" to="/">
          Voltar
        </Link>

           <span>
          Página {pagina} de {totalPaginas || 1}
        </span>
        {pagina > 1 && (
          <button
            className="btn"
            onClick={() => setPagina((p) => Math.max(p - 1, 1))}
          >
            Anterior
          </button>
        )}

       
        {pagina < totalPaginas && (
          <button
            className="btn"
            onClick={() => setPagina((p) => p + 1)}
          >
            Avançar
          </button>
        )}

     
      </div>
    </div>
  );
}
