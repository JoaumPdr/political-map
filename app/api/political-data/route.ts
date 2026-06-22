import { NextRequest, NextResponse } from "next/server";
import { getCountriesData, getCountryByCode, getCountryPeriodByYear } from "@/lib/data/politicalData";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const countryCode = searchParams.get("countryCode");
    const yearStr = searchParams.get("year");

    // Caso o usuário queira um país específico para um ano específico
    if (countryCode && yearStr) {
      const year = parseInt(yearStr, 10);
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

    // Caso o usuário queira apenas um país
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

    // Retorna todos os dados
    const allData = await getCountriesData();
    return NextResponse.json(allData);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Erro interno do servidor.", details: error.message },
      { status: 500 }
    );
  }
}
