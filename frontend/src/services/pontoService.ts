import { api } from "./api";
import type { PontoTuristico } from "../types/PontoTuristico";
import type { CreatePontoTuristico } from "../types/CreatePontoTuristico";

type ListarPontosResponse = {
  itens: PontoTuristico[];
  total: number;
  pagina: number;
};

export async function listarPontos(
  pagina = 1,
  tamanhoPagina = 10,
  busca?: string
): Promise<ListarPontosResponse> {
  const response = await api.get("/PontosTuristicos", {
    params: { pagina, tamanhoPagina, busca },
  });

  return {
    itens: Array.isArray(response.data.itens) ? response.data.itens : [],
    total: response.data.total ?? 0,
    pagina: response.data.pagina ?? pagina,
  };
}

export async function obterPonto(id: number): Promise<PontoTuristico> {
  const response = await api.get(`/PontosTuristicos/${id}`);
  return response.data; 
}

export async function cadastrarPonto(dto: CreatePontoTuristico): Promise<void> {
  await api.post("/PontosTuristicos", dto);
}
