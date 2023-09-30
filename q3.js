import fs from "fs/promises"

async function readFiles(filePaths) {
  const contents = await Promise.all(filePaths.map(filePath => fs.readFile(filePath, 'utf-8')))
  return contents
}

const filesToRead = ['./arquivo1.txt', './arquivo2.txt', './arquivo3.txt']

readFiles(filesToRead)
  .then(contents => {
    console.log('Conteúdo dos arquivos:', contents)
  })
  .catch(error => {
    console.error('Erro:', error)
  })
