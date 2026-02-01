using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tourism.Application.DTOs
{
    public class CreatePontoTuristicoDto
    {
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public string Localizacao { get; set; }
        public string Cidade { get; set; }
        public string Estado { get; set; }
    }
}
