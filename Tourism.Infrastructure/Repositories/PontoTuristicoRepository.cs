using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tourism.Domain.Entities;
using Tourism.Domain.Interfaces;
using Tourism.Infrastructure.Data;

namespace Tourism.Infrastructure.Repositories
{
    public class PontoTuristicoRepository : IPontoTuristicoRepository
    {
        private readonly TourismDbContext _context;

        public PontoTuristicoRepository(TourismDbContext context)
        {
            _context = context;
        }

        public async Task AddAsync(PontoTuristico ponto)
        {
            _context.PontosTuristicos.Add(ponto);
            await _context.SaveChangesAsync();
        }

        public async Task<PontoTuristico?> GetByIdAsync(int id)
        {
            return await _context.PontosTuristicos
                .AsNoTracking()
                .FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<(IEnumerable<PontoTuristico> Items, int Total)>
            GetPagedAsync(int page, int pageSize, string? search)
        {
            var query = _context.PontosTuristicos.AsQueryable();

            if (!string.IsNullOrWhiteSpace(search))
            {
                query = query.Where(p =>
                    p.Nome.Contains(search) ||
                    p.Descricao.Contains(search) ||
                    p.Localizacao.Contains(search));
            }

            var total = await query.CountAsync();

            var items = await query
                .OrderByDescending(p => p.DataInclusao)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .AsNoTracking()
                .ToListAsync();

            return (items, total);
        }
    }
}
