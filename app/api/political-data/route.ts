/**
 * @file route.ts
 * @description Manipulador de rota (Route Handler) da API Next.js para o endpoint `/api/political-data`.
 * Permite que aplicações externas ou componentes do cliente busquem dados estruturados
 * do espectro político de países e períodos filtrados. Prepara o projeto para uma futura
 * transição para banco de dados relacional com zero alterações no resto do código do cliente.
 * 
 * Depende de:
 * - Camada de Dados: {@link getCountriesData}, {@link getCountryByCode}, {@link getCountryPeriodByYear}
 * 
 * Endpoints suportados:
 * - `GET /api/political-data` -> retorna todos os dados.
 * - `GET /api/political-data?countryCode=BR` -> retorna dados de um país.
 * - `GET /api/political-data?countryCode=BR&year=1964` -> retorna o período ativo de um país em um ano.
 */

import { NextRequest, NextResponse } from "next/server";
import { getCountriesData, getCountryByCode, getCountryPeriodByYear } from "@/lib/data/politicalData";

/**
 * Lida com requisições HTTP GET para o endpoint de dados políticos.
 * 
 * @param {NextRequest} request - Objeto de requisição do Next.js.
 * @returns {Promise<NextResponse>} Resposta contendo o JSON correspondente ou erros estruturados.
 */
export async function GET(request: NextRequest) {
  try {
    // Analisa os parâmetros de consulta da URL (query parameters)
    const { searchParams } = new URL(request.url);
    const countryCode = searchParams.get("countryCode");
    const yearStr = searchParams.get("year");

    // Caso 1: Consulta por país específico em um ano específico (?countryCode=BR&year=1964)
    if (countryCode && yearStr) {
      const year = parseInt(yearStr, 10);
      
      // Validação do parâmetro de ano
      if (isNaN(year)) {
        return NextResponse.json(
          { error: "Parâmetro 'year' inválido. Deve ser um número." },
          { status: 400 }
        );
      }
      
      const period = await getCountryPeriodByYear(countryCode, year);
      
      if (!period) {
        return NextResponse.json(
          { error: `Nenhum período político encontrado para ${countryCode} no ano de ${year}.` },
          { status: 404 }
        );
      }
      
      return NextResponse.json(period);
    }

    // Caso 2: Consulta apenas por país (?countryCode=BR)
    if (countryCode) {
      const country = await getCountryByCode(countryCode);
      if (!country) {
        return NextResponse.json(
          { error: `País com código ${countryCode} não encontrado.` },
          { status: 404 }
        );
      }
      return NextResponse.json(country);
    }

    // Caso 3: Consulta geral (sem parâmetros) -> Retorna o dataset inteiro
    const allData = await getCountriesData();
    return NextResponse.json(allData);
  } catch (error: any) {
    // Tratamento de falhas internas para evitar vazamento de stacktrace sensível
    return NextResponse.json(
      { error: "Erro interno do servidor.", details: error.message },
      { status: 500 }
    );
  }
}
