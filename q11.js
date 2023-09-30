import fs from "fs/promises"
import path from "path"

async function obterSubdiretorios(caminho) {
  try {
    const itens = await fs.readdir(caminho)
    const subdiretorios = []

    await Promise.all(
      itens.map(async (item) => {
        const caminhoItem = path.join(caminho, item)
        const estatisticas = await fs.stat(caminhoItem)

        if (estatisticas.isDirectory()) {
          subdiretorios.push(item)
        }
      })
    )

    return subdiretorios
  } catch (error) {
    throw new Error(`Falha!! ${error}`)
  }
}

const diretorio = "./node_modules/form-data"

obterSubdiretorios(diretorio)
  .then((subdirs) => console.log(`Subdiretórios: ${subdirs.join(", ")}`))
  .catch((error) => console.error(error))
