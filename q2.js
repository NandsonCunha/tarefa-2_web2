async function fetchdata(input){
    if(input === "erro"){
        throw new Error("Entrada invalida")
    }return `Dados para minha entrada ${input}!`
}

fetchdata("data")
    .then((data) => console.log(data))
    .catch((err) => console.error(err.message))
fetchdata("error")
    .then((data) => console.log(data))
    .catch((err) => console.error(err.message))