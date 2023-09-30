function firstPromise(promises){
    return Promise.race(promises)
}

const p1 = new Promise((resolve) => setTimeout(() => resolve("primeira"), 6000))

const p2 = new Promise((resolve) => setTimeout(() => resolve("segunda"), 2000))
firstPromise([p1, p2])
 .then((result) => console.log(result))
 .catch((err) => console.error(err.message))