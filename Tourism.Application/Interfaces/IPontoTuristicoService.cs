using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tourism.Application.DTOs;

namespace Tourism.Application.Interfaces
{
    public interface IPontoTuristicoService
    {
        Task<int> CriarAsync(CreatePontoTuristicoDto dto);
        Task<PontoTuristicoDto?> ObterPorIdAsync(int id);
        Task<PaginacaoResult<PontoTuristicoDto>> ListarAsync(
            int pagina,
            int tamanhoPagina,
            string? busca);
    }
}
