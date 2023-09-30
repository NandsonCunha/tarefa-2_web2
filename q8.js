import axios from "axios"; // Certifique-se de que o módulo axios esteja instalado

async function processarChamadasAPI(urls) {
  for (const url of urls) {
    try {
      const response = await axios.get(url);
      console.log(`Resposta da API para ${url}: ${response.status}`);
      // Processar os dados da resposta aqui, se necessário
    } catch (error) {
      console.error(`Erro na chamada da API para ${url}: ${error.message}`);
      // Lidar com erros, se necessário
    }
  }
}

const urls = [
  'https://app.irancho.com.br/entrar',
  'https://gabriel.com.br/contacto/',
  'https://www.guiafoca.org/#download',
];

processarChamadasAPI(urls);