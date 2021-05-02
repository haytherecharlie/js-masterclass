const fetch = require("node-fetch")

async function promiseAll() {
  try {
    let req = await Promise.all([
      fetch("https://dog.ceo/api/breeds/image/random"),
      fetch("https://dog.ceo/api/breeds/image/rando"),
    ])

    let data = await Promise.all(req.map((res) => res.json()))
    return data.flat()
  } catch (e) {
    return e.message
  }
}

;(async () => {
  try {
    let data = await promiseAll()
    for(let datum of data) {
      if(datum.status === 'error') {
        throw new Error(datum.message)
      }
    }
  } catch (e) {
    console.error(e)
  }
})()
