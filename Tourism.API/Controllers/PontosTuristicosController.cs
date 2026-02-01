using Microsoft.AspNetCore.Mvc;
using Tourism.Application.DTOs;
using Tourism.Application.Interfaces;

namespace Tourism.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PontosTuristicosController : ControllerBase
{
    private readonly IPontoTuristicoService _service;

    public PontosTuristicosController(IPontoTuristicoService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<IActionResult> Get(
        [FromQuery] int pagina = 1,
        [FromQuery] int tamanhoPagina = 10,
        [FromQuery] string? busca = null)
    {
        try
        {
            var result = await _service.ListarAsync(pagina, tamanhoPagina, busca);
            return Ok(result);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Ocorreu um erro ao listar os pontos turísticos: {ex.Message}");
        }
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        try
        {
            var ponto = await _service.ObterPorIdAsync(id);
            if (ponto == null) return NotFound();

            return Ok(ponto);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Ocorreu um erro ao buscar o ponto turístico: {ex.Message}");
        }
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] CreatePontoTuristicoDto dto)
    {
        try
        {
            var id = await _service.CriarAsync(dto);
            return CreatedAtAction(nameof(GetById), new { id }, null);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Ocorreu um erro ao criar o ponto turístico: {ex.Message}");
        }
    }
}

