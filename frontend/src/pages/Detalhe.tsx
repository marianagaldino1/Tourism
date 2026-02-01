import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { obterPonto } from "../services/pontoService";
import type { PontoTuristico } from "../types/PontoTuristico";
import Navbar from "../components/Navbar";
import Alert from "../components/Alert";

// HOC para usar hooks em Class Component
function withRouter(Component: any) {
  return (props: any) => {
    const params = useParams();
    const navigate = useNavigate();
    return <Component {...props} params={params} navigate={navigate} />;
  };
}

interface DetalheState {
  ponto: PontoTuristico | null;
  loading: boolean;
}

class DetalheClass extends React.Component<any, DetalheState> {
  constructor(props: any) {
    super(props);
    this.state = {
      ponto: null,
      loading: true,
    };
  }

  componentDidMount() {
    const id = this.props.params.id;
    if (!id) return;

    // busca o ponto na API
    obterPonto(Number(id))
      .then((res) => {
        this.setState({ ponto: res ?? null });
      })
      .catch(() => {
        this.setState({ ponto: null });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    const { ponto, loading } = this.state;

    if (loading) return <p>Carregando...</p>;

    return (
      <div className="container">
        <Navbar />

        {!ponto ? (
          <>
            <Alert type="error" message="Ponto turístico não encontrado (Not Found)" />
            <Link className="btn" to="/pontos">
              Voltar
            </Link>
          </>
        ) : (
          <>
            <h2>Detalhe do Ponto: {ponto.nome}</h2>

            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input id="nome" type="text" value={ponto.nome} readOnly />
            </div>

            <div className="form-group">
              <label htmlFor="localizacao">Localização</label>
              <input id="localizacao" type="text" value={ponto.localizacao} readOnly />
            </div>

            <div className="form-group">
              <label htmlFor="cidade">Cidade</label>
              <input id="cidade" type="text" value={ponto.cidade} readOnly />
            </div>

            <div className="form-group">
              <label htmlFor="estado">UF</label>
              <input id="estado" type="text" value={ponto.estado} readOnly />
            </div>

            <div className="form-group">
              <label htmlFor="descricao">Descrição</label>
              <textarea id="descricao" value={ponto.descricao} readOnly />
            </div>

            <Link className="btn" to="/pontos">
              Voltar
            </Link>
          </>
        )}
      </div>
    );
  }
}

export default withRouter(DetalheClass);
