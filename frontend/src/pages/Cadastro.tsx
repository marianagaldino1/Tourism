import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { cadastrarPonto } from "../services/pontoService";
import Alert from "../components/Alert";

export default function Cadastro() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    localizacao: "",
    cidade: "",
    estado: "", 
  });

  const [erro, setErro] = useState(""); 

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErro(""); 
  }

  async function salvar() {
    if (!form.nome.trim()) {
      setErro("O nome é obrigatório.");
      return;
    }

    if (form.descricao && form.descricao.length > 100) {
      setErro("A descrição deve ter no máximo 100 caracteres.");
      return;
    }

    if (!form.estado) {
      setErro("O estado é obrigatório.");
      return;
    }

    try {
      await cadastrarPonto(form);
      navigate("/");
    } catch (error: any) {
      console.error(error);
      setErro("Ocorreu um erro ao cadastrar o ponto turístico. Tente novamente.");
    }
  }

  return (
    <div className="container">
      <Navbar />

      <h2>Cadastro de Ponto Turístico</h2>

     {erro && <Alert message={erro} type="error" />}

      <div className="form-group">
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          name="nome"
          type="text"
          placeholder="Nome do ponto turístico"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="localizacao">Localização</label>
        <input
          id="localizacao"
          name="localizacao"
          type="text"
          placeholder="Ex: Centro, Zona Sul..."
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="cidade">Cidade</label>
        <input
          id="cidade"
          name="cidade"
          type="text"
          placeholder="Cidade"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="estado">UF</label>
        <select
          id="estado"
          name="estado"
          onChange={handleChange}
          value={form.estado}
        >
          <option value="" disabled>Selecione a UF</option>
          <option value="AC">AC</option>
          <option value="AL">AL</option>
          <option value="AP">AP</option>
          <option value="AM">AM</option>
          <option value="BA">BA</option>
          <option value="CE">CE</option>
          <option value="DF">DF</option>
          <option value="ES">ES</option>
          <option value="GO">GO</option>
          <option value="MA">MA</option>
          <option value="MT">MT</option>
          <option value="MS">MS</option>
          <option value="MG">MG</option>
          <option value="PA">PA</option>
          <option value="PB">PB</option>
          <option value="PR">PR</option>
          <option value="PE">PE</option>
          <option value="PI">PI</option>
          <option value="RJ">RJ</option>
          <option value="RN">RN</option>
          <option value="RS">RS</option>
          <option value="RO">RO</option>
          <option value="RR">RR</option>
          <option value="SC">SC</option>
          <option value="SP">SP</option>
          <option value="SE">SE</option>
          <option value="TO">TO</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="descricao">Descrição</label>
        <textarea
          id="descricao"
          name="descricao"
          placeholder="Descrição do ponto turístico"
          onChange={handleChange}
        />
      </div>

      <div className="btn-group">
        <button className="btn" onClick={() => navigate(-1)}>Voltar</button>
        <button className="btn" onClick={salvar}>Cadastrar</button>
      </div>
    </div>
  );
}
