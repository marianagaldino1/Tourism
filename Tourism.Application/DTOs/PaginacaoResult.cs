using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tourism.Application.DTOs
{
    public class PaginacaoResult<T>
    {
        public IEnumerable<T> Itens { get; set; }
        public int Total { get; set; }
        public int Pagina { get; set; }
        public int TamanhoPagina { get; set; }
    }
}
