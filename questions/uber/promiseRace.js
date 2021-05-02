async function promiseRace() {
  try {
    const req = await Promise.all([
      new Promise((res, rej) => setTimeout(rej, 100, 'method failed')),
      new Promise((res, rej) => setTimeout(res, 200, 'method success'))
    ])
    return req
  } catch(e) {
    console.error(e)
  }
}

(async() => {
  console.log(await promiseRace())
})()