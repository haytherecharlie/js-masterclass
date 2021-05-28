function recursiveObject(strs) {
  let obj = {}

  function mergeObject(words, spread) {
    if (words.length === 0) return null
    let next = words.splice(0, 1)
    if (spread && spread.hasOwnProperty(next)) return Object.assign(spread[next], mergeObject(words, spread[next]))
    else return { [next]: mergeObject(words, null) }
  }

  strs.forEach((str) => {
    let words = str.split(" ")
    let first = words.splice(0, 1)
    if (obj && obj.hasOwnProperty(first)) obj[first] = { ...obj[first], ...mergeObject(words, obj[first]) }
    else obj[first] = mergeObject(words, null)
  })

  return obj
}

console.log(recursiveObject(["uber is way", "uber like wow", "touch my butt"]))
