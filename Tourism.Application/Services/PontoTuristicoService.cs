using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tourism.Application.DTOs;
using Tourism.Application.Interfaces;
using Tourism.Domain.Entities;
using Tourism.Domain.Interfaces;

namespace Tourism.Application.Services
{
    public class PontoTuristicoService : IPontoTuristicoService
    {
        private readonly IPontoTuristicoRepository _repository;

        public PontoTuristicoService(IPontoTuristicoRepository repository)
        {
            _repository = repository;
        }

        public async Task<int> CriarAsync(PontoTuristicoDto dto)
        {
            var ponto = new PontoTuristico(
                dto.Nome,
                dto.Descricao,
                dto.Localizacao,
                dto.Cidade,
                dto.Estado);

            await _repository.AddAsync(ponto);
            return ponto.Id;
        }

        public async Task<PontoTuristicoDto?> ObterPorIdAsync(int id)
        {
            var ponto = await _repository.GetByIdAsync(id);
            if (ponto == null) return null;

            return Mapear(ponto);
        }

        public async Task<PaginacaoResult<PontoTuristicoDto>> ListarAsync(
            int pagina,
            int tamanhoPagina,
            string? busca)
        {
            var (items, total) = await _repository
                .GetPagedAsync(pagina, tamanhoPagina, busca);

            return new PaginacaoResult<PontoTuristicoDto>
            {
                Itens = items.Select(Mapear),
                Total = total,
                Pagina = pagina,
                TamanhoPagina = tamanhoPagina
            };
        }

        private static PontoTuristicoDto Mapear(PontoTuristico ponto)
        {
            return new PontoTuristicoDto
            {
                Id = ponto.Id,
                Nome = ponto.Nome,
                Descricao = ponto.Descricao,
                Localizacao = ponto.Localizacao,
                Cidade = ponto.Cidade,
                Estado = ponto.Estado,
                DataInclusao = ponto.DataInclusao
            };
        }
    }
}
