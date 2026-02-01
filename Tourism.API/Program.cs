using Microsoft.EntityFrameworkCore;
using Tourism.Application.Interfaces;
using Tourism.Application.Services;
using Tourism.Domain.Interfaces;
using Tourism.Infrastructure.Data;
using Tourism.Infrastructure.Repositories;
using System.Diagnostics;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<TourismDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddScoped<IPontoTuristicoRepository, PontoTuristicoRepository>();
builder.Services.AddScoped<IPontoTuristicoService, PontoTuristicoService>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy
            .WithOrigins("http://localhost:5173")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors("AllowFrontend");

// Middlewares
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

// opcional: abre o frontend automaticamente
Process.Start(new ProcessStartInfo
{
    FileName = "http://localhost:5173",
    UseShellExecute = true
});

app.Run();
