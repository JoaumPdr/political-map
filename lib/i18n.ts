import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  // Configuração de localidade padrão para o SSR
  const locale = "pt";
  
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
    timeZone: "America/Sao_Paulo",
  };
});
