using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tourism.Domain.Entities
{
    public class PontoTuristico
    {
        public int Id { get; private set; }
        public string Nome { get; private set; }
        public string Descricao { get; private set; }
        public string Localizacao { get; private set; }
        public string Cidade { get; private set; }
        public string Estado { get; private set; }
        public DateTime DataInclusao { get; private set; }

        protected PontoTuristico() { } 

        public PontoTuristico(
            string nome,
            string descricao,
            string localizacao,
            string cidade,
            string estado)
        {
            Validar(nome, descricao, localizacao, cidade, estado);

            Nome = nome;
            Descricao = descricao;
            Localizacao = localizacao;
            Cidade = cidade;
            Estado = estado;
            DataInclusao = DateTime.UtcNow;
        }

        private void Validar(
            string nome,
            string descricao,
            string localizacao,
            string cidade,
            string estado)
        {
            if (string.IsNullOrWhiteSpace(nome))
                throw new ArgumentException("Nome é obrigatório");

            if (descricao?.Length > 100)
                throw new ArgumentException("Descrição deve ter no máximo 100 caracteres");

            if (string.IsNullOrWhiteSpace(estado))
                throw new ArgumentException("Estado é obrigatório");
        }
    }
}
