import { Link } from "react-router-dom";

type NavbarProps = {
  showCadastro?: boolean;
};

export default function Navbar({ showCadastro = false }: NavbarProps) {
  return (
    <header>
      <h2>Projeto</h2>

      {showCadastro && (
        <Link className="btn" to="/pontos/novo">
          Cadastrar um ponto turístico
        </Link>
      )}
    </header>
  );
}
