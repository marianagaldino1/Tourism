using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tourism.Domain.Entities;

namespace Tourism.Domain.Interfaces
{
    public interface IPontoTuristicoRepository
    {
        Task AddAsync(PontoTuristico ponto);
        Task<PontoTuristico?> GetByIdAsync(int id);
        Task<(IEnumerable<PontoTuristico> Items, int Total)>
            GetPagedAsync(int page, int pageSize, string? search);
    }
}
