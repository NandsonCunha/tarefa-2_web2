function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

delay(5000).then(() => console.log("Resovido após 5 seg!"))