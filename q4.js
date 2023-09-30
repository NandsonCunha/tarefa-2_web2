async function asyncFunction() {
    try {
      const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
          const randomNumber = Math.random()
          if (randomNumber > 0.5) {
            resolve('Operação bem-sucedida')
          } else {
            reject(new Error('Erro: A operação falhou'))
          }
        }, 1000)
      })
  
      console.log(result)
    } catch (error) {
      console.error(error.message)
    }
  }
  
  asyncFunction()