import fs from "fs"


function readdirPromise(caminho) {
  return new Promise(resolve => {
    fs.readdir(caminho, (err, file) => {
      if (err) {
        throw Error("Falha!")
      } else {
        resolve(file);
      }
    });
  });
}

const diretorio = "./node_modules/form-data"

readdirPromise(diretorio)
  .then(arquivo => console.log(`Lista Diretorio ${arquivo}`))
  .catch(error => console.error(`Falha!! ${error}`))
