async function fetchDataFrmAPI(url){
    let response = await fetch(url)
    if(response.status !== 200){
        throw Error("Falha na comunicação com a Api")
    }
    return await response.json()
}

fetchDataFrmAPI("https://jsonplaceholder.typicode.com/users/1")
 .then((data) => console.log(data))
 .catch((err) => console.error(err.message))