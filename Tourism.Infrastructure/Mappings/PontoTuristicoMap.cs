using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tourism.Domain.Entities;

namespace Tourism.Infrastructure.Mappings
{
    public class PontoTuristicoMap : IEntityTypeConfiguration<PontoTuristico>
    {
        public void Configure(EntityTypeBuilder<PontoTuristico> builder)
        {
            builder.ToTable("PontosTuristicos");

            builder.HasKey(p => p.Id);

            builder.Property(p => p.Nome)
                .IsRequired()
                .HasMaxLength(150);

            builder.Property(p => p.Descricao)
                .HasMaxLength(100);

            builder.Property(p => p.Localizacao)
                .IsRequired()
                .HasMaxLength(200);

            builder.Property(p => p.Cidade)
                .IsRequired()
                .HasMaxLength(100);

            builder.Property(p => p.Estado)
                .IsRequired()
                .HasMaxLength(2);

            builder.Property(p => p.DataInclusao)
                .IsRequired();
        }
    }
}
